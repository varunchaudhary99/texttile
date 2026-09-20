import React, { useState } from 'react'


export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? '#042743' : 'white' }}>
<div className="mb-3">

 <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase </button>  
    </div>
</>  
);}
