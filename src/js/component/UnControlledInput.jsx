import React, { useState, useRef } from 'react'

export default function UnControlledInput(){
    const [myText, setMyText] = useState('');
    const myInput = useRef();
    
    console.log("UnControlled: Render")

    return (<>
                <h1>UnControlled Input</h1>
                <input ref={myInput}></input>
                <button onClick={() => setMyText(myInput.current.value)} >Save</button>
                <h2>{myText}</h2>
            </>)
}