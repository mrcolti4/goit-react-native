import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";

const registerDB = async ({ email, password, userName }) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await updateUserProfile({ displayName: userName });

  return user;
};

const loginDB = async ({ email, password }) => {
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials.user;
};

const logOut = async () => {
  await signOut(auth);
  return;
};
// або більш короткий запис цієї функції
// const registerDB = ({ email, password }) =>
//   createUserWithEmailAndPassword(auth, email, password);

const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};

const updateUserProfile = async (update) => {
  const user = auth.currentUser;
  await updateProfile(user, update);
  return;
};

export default {
  registerDB,
  loginDB,
  logOut,
  authStateChanged,
  updateUserProfile,
};
