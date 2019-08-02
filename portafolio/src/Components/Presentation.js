import React, { Component } from "react";
import NavBar from "./NavBar";
import Box from "./Box";
import "./Style.css/Presentation.css"



class Presentation extends Component {
    
  render() {
    return (
        <div className="parallax-container row">
          <div className="col s12 background1">
            <NavBar />
            <Box />
          </div>
  
        </div>
        
    );
  }
}


export default Presentation;
