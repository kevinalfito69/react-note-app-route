import { useContext, useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContextProvider from "./contexts/LocaleContext";
import { RotatingLines } from "react-loader-spinner";
import Register from "./pages/Register";
import { getUserLogged, putAccessToken } from "./utils/api";
import { AuthContext } from "./contexts/AuthContext";

function App() {
    const [authUser, setAuthUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        setAuthUser(data);
        setInitializing(false);
    };

    const authContextValue = useMemo(() => {
        return [authUser];
    }, [authUser]);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    const themeContextValue = useMemo(() => {
        return [theme, toggleTheme];
    }, [theme]);
    useEffect(() => {
        const getUser = async () => {
            const { data } = await getUserLogged();

            setAuthUser(data);
            setInitializing(false);
        };
        getUser();
    }, []);
    const onLogout = () => {
        setAuthUser(null);
        putAccessToken("");
    };

    if (initializing) {
        return (
            <div className="app-container" data-theme={theme}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                />
            </div>
        );
    }
    if (authUser === null) {
        return (
            <div className="app-container" data-theme={theme}>
                <main>
                    <Routes>
                        <Route
                            path="/*"
                            element={<Login loginSuccess={onLoginSuccess} />}
                        />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        );
    }

    return (
        <>
            <AuthContext.Provider value={authContextValue}>
                <ThemeContext.Provider value={themeContextValue}>
                    <LocaleContextProvider>
                        <div className="app-container" data-theme={theme}>
                            <main>
                                {/* routes */}
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<Index onLogout={onLogout} />}
                                    />
                                    <Route
                                        path="/archive"
                                        element={<Archived />}
                                    />
                                    <Route
                                        path="/detail/:id"
                                        element={<Detail />}
                                    />
                                    <Route path="/add" element={<Add />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </main>
                        </div>
                    </LocaleContextProvider>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </>
    );
}

export default App;
