import React,{useState} from 'react';
import './App.css'

const App=()=>{
  const time = new Date().toLocaleString();

  const [ime,setIme] = useState(time);
const tame=()=>{
  const time = new Date().toLocaleTimeString();
  return setIme(time);
}
setInterval(tame,1000);
  return (
    <div className="container" >
      <h1>{ime}</h1>
      <div>
      <button className="btn" onClick={tame} >Get Time</button>
      </div>
    </div>
  )
}

export default App;