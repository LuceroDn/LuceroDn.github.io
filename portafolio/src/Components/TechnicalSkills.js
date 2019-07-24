import React, { Component } from 'react';
import html from "./img/html02.png";
import javascript from "./img/js02.jpg";
import css from "./img/css02.png";
import bootstrap from "./img/bootstrap02.png";
import materialize from "./img/materialize02.png";
import github from "./img/github02.png";
import "./Style.css/TechnicalSkills.css";

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="container-fluid technicalSkills">
        <div className="row">
          <div className="col">

            <div>
              <h3 className="titlePages center-align">HABILIDADES TÉCNICAS</h3>
            </div>

            <div className=" technicalBox">
              <div className="row center-xs">
                <div class="col s6">
                  <img className="html" src={html} alt="imgSkills" />
                </div>
                <div class="col s6">
                  <img className="css" src={css} alt="imgSkills" />
                </div>
              </div>


              <div className="row center-xs">
                <div class="col s6">
                  <img className="javascript" src={javascript} alt="imgSkills" />
                </div>
                <div class="col s6">
                  <img className="bootstrap" src={bootstrap} alt="imgSkills" />
                </div>
              </div>
            </div>

            <div className="row center-xs">
              <div class="col s6">
                <img className="materialize" src={materialize} alt="imgSkills" />
              </div>
              <div class="col s6">
                <img className="github" src={github} alt="imgSkills" />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalSkills;