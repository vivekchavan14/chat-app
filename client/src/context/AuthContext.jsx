import React, { createContext, useState, useContext } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Custom hook for accessing AuthContext
export const useAuthContext = () => {
    return useContext(AuthContext);
};

// AuthContextProvider component
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
