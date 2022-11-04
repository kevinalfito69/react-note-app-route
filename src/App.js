import { useContext, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContextProvider from "./contexts/LocaleContext";
import { AuthUserContext } from "./contexts/AuthUserContext";
import Register from "./pages/Register";

function App() {
    const [authUser] = useContext(AuthUserContext);
    console.log(authUser);
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

    if (authUser === null) {
        return (
            <Routes>
                <Route path="/*" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        );
    }
    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <LocaleContextProvider>
                    <div className="app-container" data-theme={theme}>
                        <main>
                            {/* routes */}
                            <Routes>
                                <Route path="/" element={<Index />} />
                                <Route path="/archive" element={<Archived />} />
                                <Route
                                    path="/detail/:id"
                                    element={<Detail />}
                                />
                                <Route path="/add" element={<Add />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                    </div>
                </LocaleContextProvider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
