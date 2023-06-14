import React, { useState } from "react";

type NoteType = {
    fret: number
}

const [inputList, setInputList] = useState([])

export default function Note(props: NoteType){
    return (
        <>
            <button onClick={noteClick}>{props.fret}</button>

        </>
    )
}

const Input = () => {
    return <input placeholder="Input"/>;
}

function noteClick(){
    setInputList(["salut"]);
}