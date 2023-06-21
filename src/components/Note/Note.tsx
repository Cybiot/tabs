import React, { useState } from "react";

type NoteType = {
    fret: number
}



export default function Note(props: NoteType){
    const [inputList, setInputList] = useState([] as string[]);


    return (
        <>
            <button onClick={noteClick}>{props.fret}</button>
            <p>{inputList}</p>
            <form action="">{}</form>
        </>
    )

    function noteClick(){
        setInputList(["salut"]);
    }
    
}


