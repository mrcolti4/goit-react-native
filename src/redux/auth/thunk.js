import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { auth } from "../../config";

export const register = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const { email, password, userName: displayName } = body;
      const { user } = await authApi.registerDB({ email, password });
      const userObj = {
        email: user.email,
        uid: user.uid,
        displayName,
        photoUrl: user.photoURL,
      };
      return userObj;
    } catch (error) {
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
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
