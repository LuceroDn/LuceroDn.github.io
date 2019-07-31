import React, { Component } from "react";
import logo from "./img/logo.png";
import "./Style.css/Presentation.css"


class Box extends Component {
  render() {
    return (
   <div className="backgroundBox">
     <div className="row center-xs center-sm center-lg">
<div className="col box">
<img className="logo" src={logo} alt="logo" />
<p className="frontE">FRONT-END DEVELOPER</p>
</div>

<div className="buttonCV center-xs">
<a class="waves-effect waves-light btn #80cbc4 teal lighten-3">Descarga mi CV</a>
</div>

     </div>
   </div>

    );
  }
}


export default Box;