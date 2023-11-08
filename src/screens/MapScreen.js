import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      initialRegion={{ ...location }}
    >
      {location && (
        <Marker
          draggable
          onDragEnd={(e) => {
            setLocation(e.nativeEvent.coordinate);
          }}
          coordinate={location}
        />
      )}
    </MapView>
  );
};

export default MapScreen;
