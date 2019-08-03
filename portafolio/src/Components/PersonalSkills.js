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
                            <h3 className="titlePages titlePersonalS center-align col s6 m12 l12 xl12 offset-s3 offset-m6 offset-l8 offset-xl10">HABILIDADES PERSONALES</h3>
                        </div>

                        <div class="row lista center">
                            <div className="col s8 m10 l11 xl11 offset-s2 offset-m7 offset-l8 offset-xl10">
                                <ul className=" textoLista">
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

                    <div className="col s8 m8 l8 xl8 offset-s2 offset-m8 offset-l10 offset-xl12">
                        <img className="focoSkills" src={foco} alt="skills" />
                    </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default PersonalSkills;