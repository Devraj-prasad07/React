import React from "react";
// import FunctionalComponent from "./FunctionalComponent";
import Userclass from "./ClassBasedComponent";

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    console.log(" Parent constructor");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1> This is AboutUs Page </h1>
        <Userclass />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentDidUpdate(){
    console.log("Parent componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("Parent componentWillUnmount");
  }
}

export default AboutUs;
