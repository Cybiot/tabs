import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

