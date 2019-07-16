import React, { Component } from 'react';
import imagen from '../img/code.jpg'

class Skills extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row skills">
          <div className="col">

            <h2 className="titlePages">HABILIDADES</h2>


            <h3 className="tecnicas center-align">Técnicas</h3>

            <div className="col">

              <div class="col s6">
                <img className="imgSkills" src={imagen} alt="imgSkills" />
              </div>
              <div class="col s6">
                <img className="imgSkills" src={imagen} alt="imgSkills" />
              </div>
              <div class="col s6">
                <img className="imgSkills" src={imagen} alt="imgSkills" />
              </div>

              <div class="col s6">
                <img className="imgSkills" src={imagen} alt="imgSkills" />
              </div>
              <div class="col s6">
                <img className="imgSkills" src={imagen} alt="imgSkills" />
              </div>
              <div class="col s6">
                <img className="imgSkills" src={imagen} alt="imgSkills" />
              </div>

            </div>

            
            <h3 className="personales center-align">Personales</h3>
          

          </div>
        </div>
      </div>
    )
  }
}

export default Skills;