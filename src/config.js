// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxjs7Id7DgOg5S0qDfkytBj5W5I5TWS5o",
  authDomain: "react-native-goit-c7bea.firebaseapp.com",
  databaseURL: "<https://react-native-goit-c7bea.firebaseio.com>",
  projectId: "react-native-goit-c7bea",
  storageBucket: "react-native-goit-c7bea.appspot.com",
  messagingSenderId: "569984419584",
  appId: "1:569984419584:web:73c4431d18ef542d1d15e5",
  measurementId: "G-T6LBVJVJMZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
