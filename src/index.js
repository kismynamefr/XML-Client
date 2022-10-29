import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
            <ToastContainer limit={1}/>
        </PersistGate>
    </Provider>
);