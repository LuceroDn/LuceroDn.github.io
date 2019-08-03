import React, { Component } from "react";
import logo from "./img/logo.png";
import "./Style.css/Box.css"


class Box extends Component {
  render() {
    return (
   <div className="backgroundBox">
     <div className="row center">
<div className="col s6 m4 l4 xl4 offset-s3 offset-m4 offset-l4 offset-xl4 box">
<img className="logo" src={logo} alt="logo" />
<p className="frontE center-align">FRONT-END DEVELOPER</p>
</div>


     </div>
   </div>

    );
  }
}


export default Box;