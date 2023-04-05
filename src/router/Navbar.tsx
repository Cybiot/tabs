import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


export default function Nav() {
    return (
        <>
            <div className={'navigation'}>
                <NavLink to={'/'}>HOME</NavLink>
            </div>
        </>
    )
}