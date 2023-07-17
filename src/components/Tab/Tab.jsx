import React from "react";
import "./tab.css";
import Note from "../Note/Note";

const rowButtons = [];
let noteButtons = [];


for (let i = 0; i<6; i++){
    for (let j = 0; j<24; j++){
        noteButtons.push(<Note key={j+','+i}/>);
    }
    rowButtons.push(noteButtons)
    noteButtons = [];
}

const listItems = rowButtons.map((row, index) =>
  (
    <div key={index}>
        {row}
    </div>
  )
);



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
                    {listItems}
                </div>
            </div>
        </>
    )
}