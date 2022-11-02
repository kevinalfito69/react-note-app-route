import React from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import NavMobile from "./components/NavMobile/NavMobile";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import ThemeContext from "./contexts/ThemeContext";

function App() {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") || "light"
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };
    const themeContextValue = React.useMemo(() => {
        return {
            theme,
            toggleTheme,
        };
    }, [theme]);
    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <div className="app-container" data-theme={theme}>
                    <main>
                        {/* routes */}
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/archive" element={<Archived />} />
                            <Route path="/detail/:id" element={<Detail />} />
                            <Route path="/add" element={<Add />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <NavMobile />
                </div>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
