import React, { useState } from "react";

type NoteType = {
    fret: number
}



export default function Note(props: NoteType){

    const [formVisibility, setFormVisibility] = useState(false);
    const [message, setMessage] = useState('-');

    return (
        <>
            <button onClick={showForm}>{props.fret}</button>
            { formVisibility && (<form className="noteform">
                <input placeholder="valeur" onChange={(e =>setMessage(e.target.value))}></input>
                <button type="submit" className="noteform-button">Valider</button>
            </form>)}
        </>
    )


    function showForm(){
        setFormVisibility(!formVisibility);
    }
    
}


