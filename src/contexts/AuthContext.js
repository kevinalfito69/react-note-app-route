import { createContext } from "react";

export const AuthContext = createContext();
// const useAuthProvider = ({ children }) => {
//     const [initializing, setInitializing] = useState(true);
//     const [authUser, setAuthUser] = useState(null);
//     const LoginSuccess = async ({ accessToken }) => {
//         putAccessToken(accessToken);
//         const { data } = getUserLogged();
//         setAuthUser(data);
//         setInitializing(false);
//     };
//     const onLogout = () => {
//         setAuthUser(null);
//         putAccessToken("");
//     };
//     const contextValue = useMemo(() => {
//         return [authUser, LoginSuccess, onLogout, initializing];
//     }, [authUser]);
//     return <useAuth.Provider value={contextValue}>{children}</useAuth.Provider>;
// };
// export default useAuthProvider;
