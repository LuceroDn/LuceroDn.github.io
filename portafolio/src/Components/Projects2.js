import React, { Component } from 'react';
import imgPokemon from './img/pokemon2.jpg';
import imgTicTac from './img/tictactoe3.jpg';
import imgBurgerQ from "./img/burgerQ.jpg";
import "./Style.css/Projects.css";

class Projects extends Component {
    render() {
        return (
            <div className="container-fluid backgroundProjects">
                <div className="row center-xs">
                    <div className="col-xs-10">
                        
                    <div>
              <h2 className="titlePages titleProjects">PROYECTOS</h2>
            </div>
                   
                <div className="container">

                    <div className="card">
                        <div className="img-box">
                            <img className="imgProject" src={imgPokemon} alt="pokemon" />
                        </div>
                        <div className="content">
                            <h2 className="titleCard">Data Lovers<br></br><span className="subtitleCard">Front-End</span></h2>
                            <p className="textCard">Se utilizo materialize, flexbox, vanilla js.</p>
                        
                        <ul>
                            <li><a href="#">Demo</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img-box">
                            <img className="imgProject" src={imgTicTac} alt="tictac" />
                        </div>
                        <div className="content">
                            <h2 className="titleCard">Data Lovers<br></br><span className="subtitleCard">Front-End</span></h2>
                            <p className="textCard">Se utilizo materialize, flexbox, vanilla js.</p>
                            <ul>
                                <li><a href="#">Demo</a></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img-box">
                            <img className="imgProject" src={imgBurgerQ} alt="bq" />
                        </div>
                        <div className="content">
                            <h2 className="titleCard">Data Lovers<br></br><span className="subtitleCard">Front-End</span></h2>
                            <p className="textCard">Se utilizo materialize, flexbox, vanilla js.</p>
                        
                        <ul>
                            <li><a href="#">Demo</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
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