import React from "react";

type NoteType = {
    fret: number
}

export default function NoteAttributing(props: NoteType){
    return (
        <>
            <h1>{props.fret}</h1>
        </>
    )
}

// export default function(){
//     return(
//         <>
//         <div>

//         </div>
//         </>
//     )
// }