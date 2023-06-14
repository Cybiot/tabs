import React from "react";
import "./tab.css";
import Note from "../Note/Note";

const rowButtons = [];
let noteButtons = [];

// for (let i = 0; i<6; i++){
//     for (let j = 0; j<12; j++){
//         noteButtons.push(<button key={j+','+i} onClick={buttonClick}>-</button>);
//     }
//     rowButtons.push(noteButtons)
//     noteButtons = [];
// }

for (let i = 0; i<6; i++){
    for (let j = 0; j<24; j++){
        noteButtons.push(<Note key={j+','+i} fret="-"/>);
    }
    rowButtons.push(noteButtons)
    noteButtons = [];
}

const listItems = rowButtons.map((row, index) =>
  <p key={index}>{row}</p>
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
                
                    {/* faire un component/page/model qui va créer la structure avec toutes les cases et chaque case sera un <NoteAttributing> */}
                    {/* <p>-------------------------------------------|</p>
                    <p>---1---------------------------------------|</p>
                    <p>---2---------------------------------------|</p>
                    <p>-------------------------------------------|</p>
                    <p>---0---------------------------------------|</p>
                    <p>---0---------------------------------------|</p> */}
                

                {/* <Note fret={3}></Note> */}

                <div className="tab-rows">
                    {listItems}
                    {/* {rowButtons} */}
                </div>
            </div>
        </>
    )
}