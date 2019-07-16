import React, { Component } from "react";
//import logo from "../img/logo.png";


class Box extends Component {
  render() {
    return (
   <div className="box">
    <div>
        <h1 className="name">LUCERO DN</h1>
    </div>
    <div>
        <p className="FrontE">Front-End Developer</p>
    </div>

    <div className="buttonCV">
    <a class="btn-floating btn-large waves-effect waves-light #d4f1e7 teal lighten-3">CV</a>
    </div>
   </div>

    );
  }
}


export default Box;