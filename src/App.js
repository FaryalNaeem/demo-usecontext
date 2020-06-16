import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';

function App() {
    let [number, setNumber] = useState(45);
  return (
    <div>
      Hello World
      <Parent num={number} ></Parent>
      <button onClick={()=> { setNumber(++number)} } > Add number</button>
    </div>
  );
}

export default App; 
