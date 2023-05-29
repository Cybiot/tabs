import React from "react";
import "./tab.css";
import NoteAttributing from "../Note/Note";

export default function Tab(){
    return(
        <>
            <div className="tab">
                <div className="tuning">
                    <p>e |</p>
                    <p>B |</p>
                    <p>G |</p>
                    <p>D |</p>
                    <p>A |</p>
                    <p>E |</p>
                </div>
                <div className="tab-rows">
                    {/* faire un component/page/model qui va créer la structure avec toutes les cases et chaque case sera un <NoteAttributing> */}
                    <p>-------------------------------------------|</p>
                    <p>---1---------------------------------------|</p>
                    <p>---2---------------------------------------|</p>
                    <p>-------------------------------------------|</p>
                    <p>---0---------------------------------------|</p>
                    <p>---0---------------------------------------|</p>
                </div>
                <NoteAttributing fret={3}></NoteAttributing>
            </div>
        </>
    )
}