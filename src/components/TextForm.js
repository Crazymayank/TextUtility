import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      console.log("Lowercase was clicked " + text);
      let newText= text.toLowerCase();
      setText(newText)
  }

  const handleClearClick = ()=>{
    console.log("Lowercase was clicked " + text);
    let newText= '';
    setText(newText)
  }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className= "container">
        <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        
    </div>
    <div className="container my-3">
      <h2> Your text summary </h2>
      <p> {text.split(" ").length} <b> words  </b>  and {text.length} <b>characters</b> </p>
      <p> {0.008*text.split(" ").length}   Minutes  read</p>
      <h2> Preview</h2>
      <p>{text}</p>


    </div>
    </>
  )
}
