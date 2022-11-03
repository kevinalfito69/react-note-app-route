import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./styles/style.css";
import AuthUserContextProvider from "./contexts/AuthUserContext";

const root = createRoot(document.getElementById("root"));
root.render(
    <AuthUserContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthUserContextProvider>
);
