import { useState, useEffect, useCallback } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Location from "expo-location";

import { storage } from "../config";

export const uploadImageAndGetCoords = async (
  localImg,
  setImg,
  setProgress,
  setCoords
) => {
  if (!localImg) return;
  const response = await fetch(localImg);
  const blob = await response.blob();
  const storageRef = ref(storage, "post-img/" + new Date().getTime());
  const uploadTask = uploadBytesResumable(storageRef, blob);

  uploadTask.on(
    "state_changed",
    (snap) => {
      setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
    },
    (error) => {
      console.log(error);
    },
    async () => {
      const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
      setImg(imgUrl);
    }
  );
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return Alert.alert("Error", "Dont have permission for geolocation");
  }
  let location = await Location.getCurrentPositionAsync({});
  setCoords({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  });
};

export const useAsync = (asyncFn, immediate, localImg) => {
  const [progress, setProgress] = useState(0);
  const [img, setImg] = useState("");
  const [coords, setCoords] = useState({});

  const callback = useCallback(() => {
    return asyncFn(localImg, setImg, setProgress, setCoords);
  }, [asyncFn, localImg]);

  useEffect(() => {
    if (immediate) {
      callback();
    }
  }, [callback, immediate]);

  return { progress, img, coords };
};
