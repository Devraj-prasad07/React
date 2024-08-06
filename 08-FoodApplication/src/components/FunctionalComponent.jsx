import React from "react";
import { useState } from "react";

const FunctionalComponent = (props) => {
    const {name, location} = props
    const [count1] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="card">
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>UserID : Devraj@123</h3>
            <h2>count 1 : {count1}</h2>
        </div>
    )
}

export default FunctionalComponent;