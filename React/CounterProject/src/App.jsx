import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)

  //let counter =5
  const increaseValue = () => {
    setCounter(counter+1)
  }

  const decreaseValue = () =>{
    setCounter(counter-1)
  }
  
  return (
    
    <>
      <h1>Simple Counter Project</h1>
      <h2>Counter value : {counter}</h2>
      

      <button onClick={increaseValue}>Increase value : {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value : {counter}</button>
    </>
  )
}

export default App
