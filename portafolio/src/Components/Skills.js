import React, { Component } from 'react';
import imagen from '../img/code.jpg'

class Skills extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row skills">
          <div className="">

            <h2 className="titlePages">Habilidades</h2>


            <h3 className="">Técnicas</h3>

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

          </div>
        </div>
      </div>
    )
  }
}

export default Skills;