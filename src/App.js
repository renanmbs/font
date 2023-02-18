import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [fonts,setFonts] = useState(null);
  const [text,setText] = useState("");
  const [color,setColor] = useState(null);
  const styles = {fontSize: fonts,
                  color:color};

  const handleFont = ({target}) => {
    setFonts(target.value);
  }

  const handleText = ({target}) => {
    setText(target.value);
  }

  const handleColor = ({target}) => {
    setColor(target.value);
  }

  return(
    <div id='banner'>
      <h1>Font Tester</h1>

      <div id='box'>

        <label>Font Size <br/> <small>(px,em,rem...)</small></label><br/>
        <input id="font" onChange={handleFont}/><br/>

        <label>Font Color <br/> <small>(HEX,RGB,RGBA, color's name...)</small></label><br/>
        <input id="font" onChange={handleColor}/><br/>

        <label>Text to Try</label><br/>
        <input id='text' onChange={handleText}/>

      </div>

        <div style={styles}>
          
          <h2>{text}</h2>

        </div>

    </div>
  )
}
