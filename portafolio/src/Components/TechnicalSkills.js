import React, { Component } from 'react';
import imagen from '../img/code.jpg'

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row skills">
          <div className="col">

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

          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalSkills;