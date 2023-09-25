import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text Here");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case","success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case","success");
  };
  const handleOnChange = (e) => {
 
    setText(e.target.value);
  };

const handleClearText=()=>{
    setText("");
    props.showAlert("Cleared Text","success");
}

const removeSpaces=()=>{
  let newText=text;
  setText(newText.split(" ").filter((words)=>{return words.length!==0}).join(" "));
}


const handleCapitalize=()=>{
    let newText=text.split(" ").map((words)=>{
        
       return words.charAt(0).toUpperCase()+words.substring(1);
    }).join(" ");

    
    setText(newText)
    props.showAlert("Text Capitalized","success");
}



  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3 ">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor: props.mode==='dark'? '#97a5b0':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button  className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleUpClick}  disabled={text.length===0}>
        Convert to UpperCase
      </button>
      <button enabled className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleLoClick} disabled={text.length===0}>
        Convert to LowerCase
      </button>
      <button className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleClearText} disabled={text.length===0}>
        Clear Text
      </button>
      <button className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleCapitalize} disabled={text.length===0}>
        Capitalize
      </button>
      <button className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={removeSpaces} disabled={text.length===0}>
        Remove extra spaces
      </button>
    </div>
    
    <div className="container my-2">
      <h1>Your text Summary</h1>
      <p> {text.split(/\s+/).filter((words)=>{
       return words.length!==0
      }).length} words {text.length} charcters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
