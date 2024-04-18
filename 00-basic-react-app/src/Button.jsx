function hi (){
    console.log("Hi Devraj");
}

export default function Button (){
    return(
    <div>
        <button onClick={hi}>Click Me!</button>
    </div>
    );
}


