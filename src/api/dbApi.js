import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

export const writeDataToFirestore = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
    console.log("docRef: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
