import React, { Component } from 'react';
import "./Style.css/TechnicalSkills.css";

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="container-fluid technicalSkills">
        <div className="row">
          <div className="col">

            <div>
              <h3 className="titlePages center-align titleTech">HABILIDADES TÉCNICAS</h3>
            </div>

            <div className=" technicalBox">
              <div className="row center-xs">
                <div class="col s6 boxTech">
                <i class="devicon-html5-plain-wordmark"></i>
                </div>
                <div class="col s6">
                <i class="devicon-css3-plain-wordmark"></i>
                </div>
              </div>


              <div className="row center-xs">
                <div class="col s6">
                <i class="devicon-javascript-plain"></i>
                </div>
                <div class="col s6">
                <i class="devicon-bootstrap-plain-wordmark"></i>
                </div>
              </div>
            </div>

            <div className="row center-xs">
              <div class="col s6">
              <i class="devicon-react-original-wordmark"></i>
              </div>
              <div class="col s6">
              <i class="devicon-github-plain-wordmark"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalSkills;