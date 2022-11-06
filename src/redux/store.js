import { configureStore } from "@reduxjs/toolkit";
import rootReducers from './reducer/index';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const middleware =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default(), thunk]
    : [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export const persistor = persistStore(store);
