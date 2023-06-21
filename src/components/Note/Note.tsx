import React, { useState } from "react";

type NoteType = {
    fret: number
}



export default function Note(props: NoteType){

    const [formVisibility, setFormVisibility] = useState(false);

    return (
        <>
            <button onClick={showForm}>{props.fret}</button>
            { formVisibility && (<form>
                <input placeholder="valeur"></input>
                <button> Valider </button>
            </form>)}
        </>
    )


    function showForm(){
        setFormVisibility(!formVisibility);
    }
    
}


