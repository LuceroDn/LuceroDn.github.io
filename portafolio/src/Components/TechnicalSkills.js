import React, { Component } from 'react';
import "./Style.css/TechnicalSkills.css";

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="container-fluid technicalSkills">
        <div className="row center">
          <div className="col">
        
            <div>
              <h3 className="titlePages center-align titleTech col s6 m12 l12 xl12 offset-s3 offset-m6 offset-l7 offset-xl10">HABILIDADES TÉCNICAS</h3>
            </div>

               <div className="technicalBox col m10 xl12 offset-m7 offset-xl10">
              
                <div class="col s6 boxTech">
                <i class="devicon-html5-plain-wordmark"></i>
                </div>
                <div class="col s6">
                <i class="devicon-css3-plain-wordmark"></i>
                </div>
        


            
                <div class="col s6">
                <i class="devicon-javascript-plain"></i>
                </div>
                <div class="col s6">
                <i class="devicon-bootstrap-plain-wordmark"></i>
                </div>
            
  

          
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