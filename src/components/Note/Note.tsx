import React, { useState } from "react";
import "./note.css";

type NoteType = {
    fret: string
}


export default function Note(){

    const [formVisibility, setFormVisibility] = useState(false);
    const [noValue, setNoValue] = useState(true);
    const [tempFret, setTempFret] = useState('');
    const [fret, setFret] = useState('');

    return (
        <>
            <div className="noteDiv">
                <button onClick={showForm} className={noValue ? 'noValue' : 'fretValue'}>{noValue && ('')}{ !noValue && ( fret )}</button>

                { formVisibility && (<form className="noteform" onSubmit={formSubmit}>
                    <input placeholder="..." onChange={(e =>setTempFret(e.target.value))}></input>
                    <button className="noteform-button"></button>
                </form>)}
            </div>
        </>
    )

    
    function showForm(){
        setTempFret('');
        setFormVisibility(!formVisibility);
    }

    function formSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        showForm();
        setFret(tempFret);
        tempFret === '' ? setNoValue(true) : setNoValue(false);
    }
    
}

