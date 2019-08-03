import React, { Component } from "react";
import travel from "./img/travel1.jpg";
import "./Style.css/AboutMe.css"


class AboutMe extends Component {

  render() {
    return (
      <div className="container-fluid backgroundAbout">
        <div className="row center">
          <div className="col">

            <div className="aboutBox">
            <div>
              <h2 className="titlePages titleAbout col s6 m6 l6 xl6 offset-s3 offset-m3 offset-l3 offset-xl4">ACERCA DE MI</h2>
            </div>

            <div className="row center">
            <p className="textAbout col s10 m12 l12 xl12 offset-s1 offset-xl1">Hola, soy Lucero, soy desarrolladora web y administradora de empresas. Me gusta mucho viajar, leer y los animales.</p>
            <p className="textAbout textAbout2 col s10 m10 xl12  offset-s1 offset-m1 offset-xl1">Aquí podrás encontrar algunos proyectos en los que he trabajado en Laboratoria</p>
            </div>

            <div className="row">
              <div className="col s8 xl 10 offset-s2 offset-xl3">
                <img className="imgTravel" src={travel} alt="travel" />
              </div>
            </div>

            </div>

          </div>
        </div>
      </div>

    );
  }
}


export default AboutMe;