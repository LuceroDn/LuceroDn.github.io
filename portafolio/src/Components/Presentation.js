import React, { Component } from "react";
import NavBar from "./NavBar";
import Box from "./Box";
import "./Style.css/Presentation.css"



class Presentation extends Component {
    
  render() {
    return (
        <div className="container-fluid background1">
          

            <NavBar />
            <Box />
          
          </div>
  
        
        
    );
  }
}


export default Presentation;
