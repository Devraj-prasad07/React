import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

  let updateBlue = () => {
    setMoves((prevMove) => {
      return { ...prevMove, blue: prevMove.blue + 1 };
    });
  };

  let updateYellow = () => {
    setMoves((prevMove) => {
      return { ...prevMove, yellow: prevMove.yellow + 1 };
    });
  };

  let updateRed = () => {
    setMoves((prevMove) => {
      return { ...prevMove, red: prevMove.red + 1 };
    });
  };

  let updateGreen = () => {
    setMoves((prevMove) => {
      return { ...prevMove, green: prevMove.green + 1 };
    });
  };

  return (
    <div>
      <h2>Game Begins</h2>
      <div className="board">
        <p>Blue Moves : {moves.blue} </p>
        <button
          style={{ backgroundColor: "#337AFF", color: "black" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Red Moves : {moves.red} </p>
        <button
          style={{ backgroundColor: "red", color: "black" }}
          onClick={updateRed}
        >
          +1
        </button>
        <p>Green Moves : {moves.green} </p>
        <button
          style={{ backgroundColor: "green", color: "black" }}
          onClick={updateGreen}
        >
          +1
        </button>
        <p>Yellow Moves : {moves.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
      </div>
    </div>
  );
}
