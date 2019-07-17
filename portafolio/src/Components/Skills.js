import React, {Component} from "react";
import TechnicalSkills from "./TechnicalSkills";
import PersonalSkills from "./PersonalSkills";

class Skills extends Component {
    render(){
        return(
            <div className="container-fluid skills">
            <div className="row">
              <div className="col">
    
                <h2 className="titlePages">HABILIDADES</h2>
    
                <TechnicalSkills />
                <PersonalSkills />
    
              </div>
            </div>
          </div>
        )
    }
}

export default Skills;