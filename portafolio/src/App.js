import React, { Component } from "react";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import Presentation from "./Components/Presentation";
import AboutMe from "./Components/AboutMe";
import TechnicalSkills from "./Components/TechnicalSkills";
import PersonalSkills from "./Components/PersonalSkills";
import Projects from "./Components/Projects2";
import Interests from "./Components/Interests";
import Sentence from "./Components/Sentence";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
  

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Presentation />
     <AboutMe /> 
      <TechnicalSkills />
      <PersonalSkills />
      <Projects />
      <Interests />
      <Sentence />
      <Contact />
      <Footer />
    </React.Fragment>
    )
  }
}


export default App;
