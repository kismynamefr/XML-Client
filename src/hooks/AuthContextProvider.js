import React, { createContext, useState } from "react";
import Toast from "./ToastProvider";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [usersHasSignin, setUsersHasSignin] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                usersHasSignin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;