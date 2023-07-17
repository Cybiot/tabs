import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


export default function Nav() {
    return (
        <>
            <div className={'navigation'}>
                <NavLink to={'/'} className="navlink">HOME</NavLink>
                <NavLink to={'/create'} className="navlink">NEW TAB</NavLink>
                <NavLink to={'/community'} className="navlink">COMMUNITY</NavLink>
                <NavLink to={'/account'} className="navlink"></NavLink>
            </div>
        </>
    )
}