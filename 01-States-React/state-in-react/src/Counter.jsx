import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount(count + 1);
  };

  let decCount = () => {
    setCount(count - 1);
  };

  return (
    <div >
      <h3>Add Counter : {count}</h3>
      <button onClick={incCount}>Increase Count</button>
      <button onClick={decCount} style={{marginLeft:"20px"}}>Decrease Count</button>
    </div>
  );
}
