import React from "react";

class Userclass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo : {
        name: "Username",
        location : "India"
      },
    };
    console.log("Child Constructor");
  }

  render() {
    const { name, location,
      avatar_url
       } = this.state.userInfo;
    console.log("Child Render");
    return (
      <div className="card">
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <img src={avatar_url}></img>
      </div>
    );
  }

  async componentDidMount(){ // used to make api calls
    const data = await fetch ("https://api.github.com/user/119845770");
    const json = await data.json();
    this.setState({
      userInfo : json,
    })

    console.log(json);
    console.log("Child componentDidMount");
  }

  componentDidUpdate(){
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("Child componentWillUnmount");
  }

}

export default Userclass;
