import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor:"red"}}>red</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}}>green</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"blue"}}>blue</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm font-bold' style={{backgroundColor:"yellow"}}>yellow</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"pink"}}>pink</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"purple"}}>purple</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mr-4'>
        <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"brown"}}>brown</button>
      </div>

    </div>
    </div>
  );
}

export default App;
