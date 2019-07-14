import React, { Component } from "react";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import Presentation from "./Components/Presentation";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";


  

class App extends Component {
  render() {
    return (
    <div>
      <Presentation />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
    )
  }
}


export default App;
