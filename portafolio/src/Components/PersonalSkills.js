import React, { Component } from "react";
import foco from "./img/focoVerde.jpg";
import "./Style.css/PersonalSkills.css";


class PersonalSkills extends Component {
    render() {
        return (
            <div className="container-fluid personalSkills">
                <div className="row center">
                    <div className="col">

                        <div>
                            <h3 className="titlePages titlePersonalS col s10 m12 l12 xl12 offset-s5 offset-m10 offset-l7 offset-xl10">HABILIDADES PERSONALES</h3>
                        </div>

                        <div class="row lista">
                            <div className="col s9 offset-s5">
                                <ul className="center-align textoLista">
                                    <li>° Autoaprendizaje</li>
                                    <li>° Metodología Agile</li>
                                    <li>° Adaptabilidad</li>
                                    <li>° Comunicación Asertiva</li>
                                    <li>° Paneación Estratégica</li>
                                    <li>° Gestión de Proyectos</li>
                                    <li>° Trabajo Colaborativo</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="center-xs">
                        <img className="focoSkills" src={foco} alt="skills" />
                    </div>

                </div>
            </div>

        )
    }
}

export default PersonalSkills;