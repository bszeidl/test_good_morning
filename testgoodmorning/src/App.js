
import './App.css';
import Hello from './hello.js';
/*import Button from './button';*/
import React, { useState } from 'react';

function App() {
  
  const [nameInput, setnameInput] = useState('');

  const showName = (e) => {    
    setnameInput(e.target.value);        
  }
  
  const reset = () => {
    setnameInput('');
  }     

  console.log(nameInput == 0);

  return (
    <div className="App">
      <h1>Good Morning!</h1>
      <Hello name={nameInput} />
      <input type='text' onChange={showName} value={nameInput}/>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
