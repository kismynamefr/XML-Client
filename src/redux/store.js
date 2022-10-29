import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH, PAUSE,
    PERSIST, persistReducer, persistStore, PURGE,
    REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducers from './reducer/index';

// const middlewares = [thunk];

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(createLogger());
// }

// const stores = createStore(
//     reducers,
//     applyMiddleware(...middlewares)
// )
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export let persistor = persistStore(store);