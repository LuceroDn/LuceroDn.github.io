import React, { Component } from "react";
import foco from "../img/focoVerde.jpg";


class PersonalSkills extends Component {
    render() {
        return (
            <div className="container-fluid personalSkills">
                <div className="row center-xs">
                    <div className="col">

                        <div>
                            <h3 className="titlePages center-align">HABILIDADES PERSONALES</h3>
                        </div>

                        <div class="row center-xs lista">
                            <div className="col">
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