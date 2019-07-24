import React, { Component } from 'react';
import imgDL from '../img/pokemon.png';
import imgTicTac from '../img/toktaktok_03.png';


class Projects extends Component {
  render() {
    return (
      <div className="container-fluid backgroundProjects">
        <div className="row">
          <div className="col">

            <div>
              <h1 className="titlePages titleProjects">PROYECTOS</h1>
            </div>

            <div className="row cards center-xs">

              <div class="card sticky-action">

                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator imgPokemon" src={imgDL} alt="pokemon" />
                </div>

                <div class="card-content #e0e0e0 grey lighten-2">
                  <span class="card-title activator start-xs">Data Lovers<i class="material-icons right">more_vert</i></span>
                  <p className="start-xs"><a href="#">Github</a></p>
                </div>

                <div class="card-reveal #e0e0e0 grey lighten-2">
                  <span class="card-title">Data Lovers<i class="material-icons right close">close</i></span>
                  <p className="textProject">Here is some more information about this product that is only revealed once clicked on.</p>
                </div>

              </div>


              <div class="card sticky-action">

                <div class="card-image waves-effect waves-block waves-light backgTicTac">
                  <img class="activator imgTicTac" src={imgTicTac} alt="tictac" />
                </div>

                <div class="card-content #e0e0e0 grey lighten-2">
                  <span class="card-title activator start-xs">Tic Tac Toe<i class="material-icons right">more_vert</i></span>
                  <p className="start-xs"><a href="#">Github</a></p>
                </div>

                <div class="card-reveal #e0e0e0 grey lighten-2">
                  <span class="card-title">Tic Tac Toe<i class="material-icons right close">close</i></span>
                  <p className="textProject">Here is some more information about this product that is only revealed once clicked on.</p>
                </div>

              </div>


              <div class="card sticky-action">

                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator imgPokemon" src={imgDL} alt="pokemon" />
                </div>

                <div class="card-content #e0e0e0 grey lighten-2">
                  <span class="card-title activator start-xs">Data Lovers<i class="material-icons right">more_vert</i></span>
                  <p className="start-xs"><a href="#">Github</a></p>
                </div>

                <div class="card-reveal #e0e0e0 grey lighten-2">
                  <span class="card-title">Data Lovers<i class="material-icons right close">close</i></span>
                  <p className="textProject">Here is some more information about this product that is only revealed once clicked on.</p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Projects; 