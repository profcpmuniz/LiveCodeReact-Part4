import React, { useState, useRef } from 'react'

export default function UnControlledInput(){
    const [myText, setMyText] = useState('');
    
    const myInput = useRef();
    const myInput1 = useRef();
    const myInput2 = useRef();
    
    function handleButtonClick(){
        setMyText(myInput.current.value + myInput1.current.value + myInput2.current.value)
    }

    console.log("UnControlled: Render")

    return (<>
                <h1>UnControlled Input</h1>
                <input ref={myInput}></input>
                <input ref={myInput1}></input>
                <input ref={myInput2}></input>
                
                <button onClick={() => handleButtonClick()} >Save</button>
                <h2>{myText}</h2>
            </>)
}