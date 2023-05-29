import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/create'} element={<Create/>}/>
                <Route path={'/community'} element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    )
}

