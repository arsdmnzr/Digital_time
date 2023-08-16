import React, { useState } from 'react'
import './App.css'

function App() {
  let time = new Date().toLocaleString();
  const [digit, setDigit] = useState(time);

  function got()
   {setInterval(()=>{
  let time = new Date().toLocaleString();

    setDigit(time)
  },1000);};
  return (
    <div className="container" >
      <h1>{digit}</h1>
      <button onClick={got}>Get Time</button>
    </div>
  )
}

export default App;