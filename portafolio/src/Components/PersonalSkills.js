import React, {Component} from "react";
import methodologyAgile from "../img/metodologia.jpg";
import adaptation from "../img/adaptacion.jpg";
import selfLearning from "../img/autoaprendizaje.jpg";
import communication from "../img/comunicacion2.jpg";
import management from "../img/gestion.jpg";
import planning from "../img/planeacion.jpg";
import teamWork from "../img/team.jpg";
import solution from "../img/solucion.jpg";


class PersonalSkills extends Component {
    render(){
        return(
            <div className="container-fluid">
        <div className="row skills">
          <div className="col">

            <h3 className="personales center-align">Personales</h3>

            <div class="row">

<div class="col s5 offset-s1 boxes">
  <img className="metodologia" src={methodologyAgile} alt="metodologiaAgile"/>
    <p className="textSkills center-align">Metodologia Agile</p>
</div>
<div class="col s5 offset-s5 boxes">
  <img className="adaptation" src={adaptation} alt="adaptation"/>
    <p className="textSkills center-align">Adaptabilidad</p>
</div>
<div class="col s5 offset-s1 boxes">
  <img className="selfLearning" src={selfLearning} alt="selflearning" />
    <p className="textSkills center-align">Autoaprendizaje</p>
</div>
<div class="col s5 offset-s5 boxes">
  <img className="comunication" src={communication} alt="comunication"/>
    <p className="textSkills center-align">Comunicación Asertiva</p>
</div>
<div class="col s5 offset-s1 boxes">
  <img className="management" src={management} alt="management"/>
    <p className="textSkills center-align">Gestión de Proyectos</p>
</div>
<div class="col s5 offset-s5 boxes">
  <img className="planning" src={planning} alt="planning"/>
    <p className="textSkills center-align">Planeación Estratégia</p>
</div>
<div class="col s5 offset-s1 boxes">
  <img className="teamWork" src={teamWork} alt="teamwork"/>
    <p className="textSkills center-align">Trabajo en Equipo</p>
</div>
<div class="col s5 offset-s5 boxes">
  <img className="solution" src={solution} alt="solution"/>
    <p className="textSkills center-align">Solución de Problemas</p>
</div>


</div>
    
            </div>
          </div>
        </div>
      
        )
    }
}

export default PersonalSkills;