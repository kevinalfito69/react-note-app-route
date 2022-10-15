import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";

import NavMobile from "./components/NavMobile/NavMobile";

import NoteList from "./components/NoteList/NoteList";
import Index from "./pages/Index";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";

function App() {
    return (
        <>
            <div className="app-container">
                <main>
                    {/* routes */}
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/archive" element={<Archived />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/add" element={<Add />} />
                    </Routes>
                </main>

                <NavMobile />
            </div>
        </>
    );
}

export default App;
