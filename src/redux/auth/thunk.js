import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { Alert } from "react-native";

export const register = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const { user } = await authApi.registerDB(body);
      const userObj = {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
      };
      return userObj;
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          Alert.alert("Error", "Email already in use");
          return rejectWithValue(error.message);
        default:
          Alert.alert("Error", `Something went wrong \n${error.message}`);
          return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const user = await authApi.loginDB(body);
      const userObj = {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
      };

      return userObj;
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          Alert.alert("Error", "Email or password incorrect");
          return rejectWithValue(error.message);

        default:
          Alert.alert("Error", `Something went wrong \n${error.message}`);
          return rejectWithValue(error.message);
      }
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      authApi.logOut();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
