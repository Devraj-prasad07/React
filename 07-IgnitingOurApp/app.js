import React from "react";
import ReactDOM from "react-dom";

// const Heading = () => <h1 className="heading">This is Heading Section</h1>;

// const Para = () => <p>This is Para</p>;

// const root = document.getElementById("root");
// ReactDOM.render(<Heading />, root);

const heading = React.createElement(
    "div",
    {className:"title"},
    React.createElement("h1",{},"I am an H1 tag")
)

const root = document.getElementById("root");
ReactDOM.render(heading, root);