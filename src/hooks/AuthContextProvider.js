import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [usersHasSignin, setUsersHasSignin] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                usersHasSignin,
                setUsersHasSignin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;