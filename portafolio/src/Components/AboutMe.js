import React, { Component } from "react";
import travel from "../img/travel1.jpg";


class AboutMe extends Component {

  render() {
    return (
      <div className="container backgroundAbout">
        <div className="row">
          <div className="col">
            <div>
              <h2 className="titlePages">ACERCA DE MI</h2>
            </div>
            <p className="textAbout">Hola, soy Lucero, soy desarrolladora web y administradora de empresas. Me gusta mucho viajar, leer y los animales.</p>
            <p className="textAbout textAbout2">Aquí podrás encontrar algunos proyectos en los que he trabajado en Laboratoria</p>

            <div className="row center-xs">
              <div className="col">
                <img className="imgTravel" src={travel} alt="travel" />
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}


export default AboutMe;