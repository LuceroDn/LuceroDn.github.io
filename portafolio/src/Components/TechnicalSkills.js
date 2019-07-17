import React, { Component } from 'react';
import html from "../img/html.png";
import javascript from "../img/js.jpg";
import css from "../img/css.png";
import bootstrap from "../img/bootstrap.png";
import materialize from "../img/materialize2.png";
import github from "../img/github2.png";

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row skills">
          <div className="col">

            <h3 className="technical center-align">Técnicas</h3>

            <div className=" technicalBox1">

              <div className="row center-xs">

              <div class="col s6">
                <img className="html" src={html} alt="imgSkills" />
              </div>
              <div class="col s6">
                <img className="css" src={css} alt="imgSkills" />
              </div>

              </div>
              </div>

              <div className="col technicalBox2">

              <div class="col s6">
                <img className="javascript" src={javascript} alt="imgSkills" />
              </div>

              <div class="col s6">
                <img className="bootstrap" src={bootstrap} alt="imgSkills" />
              </div>

          </div>

          <div className="col technicalBox3">

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