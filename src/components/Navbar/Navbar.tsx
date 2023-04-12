import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


export default function Nav() {
    return (
        <>
            <div className={'navigation'}>
                <NavLink to={'/'} >HOME</NavLink>
                <NavLink to={'/create'} >NEW TAB</NavLink>
                {/* <Navlink to={'/community'}>COMMUNITY</Navlink> */}
            </div>
        </>
    )
}