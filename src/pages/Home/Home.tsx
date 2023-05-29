import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import Tab from "../../components/Tab/Tab";

export default function Home(){
    return(
        <>
        <div className="home">
            <Navbar/>
            <p>Baaanjouuu</p>
            <div className="tab-list">
                <Tab/>
            </div>
        </div>
        </>
    )
}