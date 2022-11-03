import { createContext, useState, useMemo } from "react";

export const AuthUserContext = createContext();
const AuthUserContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const contextValue = useMemo(() => {
        return [authUser];
    }, [authUser]);
    return (
        <AuthUserContext.Provider value={contextValue}>
            {children}
        </AuthUserContext.Provider>
    );
};
export default AuthUserContextProvider;
