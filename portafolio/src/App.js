import React, { Component } from "react";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import Presentation from "./Components/Presentation";
import AboutMe from "./Components/AboutMe";


  

class App extends Component {
  render() {
    return (
    <div>
      <Presentation />
      <AboutMe />
    </div>
    )
  }
}


export default App;
