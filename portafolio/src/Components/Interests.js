import React, {Component} from 'react';
import animals from "../img/animales.png";
import airplane from "../img/avion.png";
import music from "../img/musica.png";
import ux from "../img/ux.png";
import planet from "../img/planeta.png";

class Interests extends Component {
    render(){
        return(
            <div className="container-fluid backgroundInterests">
                <div className="row">
                        <h1 className="titlePages">INTERESES</h1>
                    <div className="col">

              <div className="col s6 interest">
                <img className="" src={animals} alt="animals" />
              </div>
              <div className="col s6 interest">
                <img className="" src={airplane} alt="airplane" />
              </div>
              <div className="col s12 interest2">
                <img className="" src={music} alt="music" />
              </div>

              <div className="col s6 interest">
                <img className="" src={ux} alt="ux" />
              </div>
              <div className="col s6 interest">
                <img className="" src={planet} alt="planet" />
              </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Interests;