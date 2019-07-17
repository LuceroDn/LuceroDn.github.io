import React, { Component } from 'react';
import airplane from "../img/avion.png";
import music from "../img/musica.png";
import ux from "../img/ux.png";
import planet from "../img/planeta.png";

class Interests extends Component {
  render() {
    return (
      <div className="container-fluid backgroundInterests">
        <div className="row center-xs">
          <div className="col">

            <div>
              <h1 className="titlePages">INTERESES</h1>
            </div>

<div className="interestBox">


            <div className="row">
              <div className="col s6">
                <img className="" src={airplane} alt="airplane" />
                <p className="subtitleInter">Viajar</p>
              </div>
              <div className="col s6">
                <img className="" src={ux} alt="airplane" />
                <p className="subtitleInter">UX</p>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <img className="" src={planet} alt="airplane" />
                <p className="subtitleInter">Consciencia Social</p>
              </div>
              <div className="col s6">
                <img className="" src={music} alt="musica" />
                <p className="subtitleInter">Música</p>
              </div>
            </div>

</div>

          </div>
        </div>
      </div>
    )
  }
}

export default Interests;