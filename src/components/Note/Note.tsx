import React, { useState } from "react";

type NoteType = {
    fret: string
}



export default function Note(){

    const [formVisibility, setFormVisibility] = useState(false);
    const [tempFret, setTempFret] = useState('-');
    const [fret, setFret] = useState('-');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        //props.fret = message;
    }

    return (
        <>
            <div className="noteDiv">
                <button onClick={showForm}>{fret}</button>
                { formVisibility && (<form className="noteform" onSubmit={formSubmit}>
                    <input placeholder="..." onChange={(e =>setTempFret(e.target.value))}></input>
                    <button className="noteform-button"></button>
                </form>)}
            </div>
        </>
    )

    
    function showForm(){
        setFormVisibility(!formVisibility);
    }

    function formSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        showForm();
        setFret(tempFret);
    }
    
}


