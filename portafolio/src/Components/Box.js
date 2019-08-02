import React, { Component } from "react";
import logo from "./img/logo.png";
import "./Style.css/Box.css"


class Box extends Component {
  render() {
    return (
   <div className="backgroundBox">
     <div className="row center-xs">
<div className="col-xs-7 box">
<img className="logo center-xs middle-xs" src={logo} alt="logo" />
<p className="frontE">FRONT-END DEVELOPER</p>
</div>

<div className="row bottom-xs">
 <div className="col buttonCV">
<a class="waves-effect waves-light btn #80cbc4 teal lighten-3">Descarga mi CV</a>
</div>
</div>

     </div>
   </div>

    );
  }
}


export default Box;