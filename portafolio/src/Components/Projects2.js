import React, { Component } from 'react';
import imgPokemon from '../img/pokemon.png';
import imgTicTac from '../img/tictactoe.png';

class Projects extends Component {
    render() {
        return (
            <div className="container-fluid backgroundProjects">
                <div className="row">
                    <div className="col">

                        <div>
                            <h1 className="titlePages titleProjects">PROYECTOS</h1>
                        </div>


	<div class="row center-xs center-sm wrap">
		<div class="col cardProject">
			<div class="cardBody">
				<div class="forward card1">
                    <div className="imgBox">
                <img class="imgPokemon " src={imgPokemon} alt="pokemon" />
                    </div>
                </div>
				<div class="back backPokemon">
                    <h1 className="titleCard">DATA LOVERS</h1>
					<p className="textBack">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex velit beatae. Illum, suscipit, aspernatur!</p>
				</div>
			</div>
		</div>
		<div class="col cardProject">
			<div class="cardBody">
				<div class="forward card2">
                    <div className="tictacBox">
                <img class="imgTicTac" src={imgTicTac} alt="tictac" />
                    </div>
                </div>
				<div class="back backTictac">
                <h1 className="titleCard">TIC TAC TOE</h1>
					<p className="textBack">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex velit beatae. Illum, suscipit, aspernatur!</p>
				</div>
			</div>
		</div>
		<div class="col cardProject">
			<div class="cardBody">
				<div class="forward card3">
                    <div className="imgBox">
                <img class="imgPokemon" src={imgPokemon} alt="pokemon" />
                    </div>
                </div>
				<div class="back backBeatBox">
                <h1 className="titleCard">BEATBOX</h1>
					<p className="textBack">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex velit beatae. Illum, suscipit, aspernatur!</p>
				</div>
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