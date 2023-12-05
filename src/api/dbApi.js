import { collection, addDoc } from "firebase/firestore";
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
