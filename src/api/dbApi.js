import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config";

export const writeDataToFirestore = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getDataFromFirestore = async () => {
  try {
    const data = [];
    const snapshot = await getDocs(collection(db, "posts"));
    snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
