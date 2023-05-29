import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


export default function Nav() {
    return (
        <>
            <div className={'navigation'}>
                <NavLink to={'/'} >HOME</NavLink>
                <NavLink to={'/create'} >NEW TAB</NavLink>
                <NavLink to={'/community'}>COMMUNITY</NavLink>
                <NavLink to={'/account'} className={'account-nav'}></NavLink>
            </div>
        </>
    )
}