import { useState } from "react";

export default function LikeButton() {
  // let [isLiked, setIsLiked ]  = useState(false);
  // let clickLike = () => {
  //   setIsLiked(!isLiked);
  // };
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
   
  let decCount = () => {
    setCount((currCount) => {
      return currCount > 1 ? currCount - 1 :  0 ;
    });
  }

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={incCount}>increase</button>
      <button onClick={decCount}>decrease</button>
      {/* <button onClick={clickLike}>
        {!isLiked ? <i className="fa-regular fa-thumbs-up" style={{ fontSize: "50px" }}></i> : <i className="fa-solid fa-thumbs-up" style={{ fontSize: "50px" , color: "blue"}}></i>}
      </button> */}
    </div>
  );
}
