import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { rootReducer } from "./root/slice";
import { authReducer } from "./auth/slice";
import { postsReducer } from "./posts/slice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["user"],
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: persistReducer(persistConfig, authReducer),
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
