import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    if(counter < 20 ){
      setCounter(counter + 1)
    }
  }
  const dec = () => {
    if(counter > 0){
      setCounter (counter - 1);
    }
  }
  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
    </>
  );
}

export default App;
