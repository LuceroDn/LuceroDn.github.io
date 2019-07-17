import React, { Component } from "react";
import whatsApp from "../img/whatsapp.png";
import github from "../img/git.png";
import linkedIn from "../img/linkedin.png";
import eMail from "../img/mail.png"



class Contact extends Component {
    render() {
        return (
            <div className="container-fluid backgroundContact">
                <div className="row">
                    <div className="col">

                        <div>
                            <h1 className="titlePages">CONTACTO</h1>
                        </div>
                        
                
                        <p className="textContact center-align">▶ ¿Te gustaría que trabajemos juntos? ¿Tienes alguna duda o comentario?</p>
                        <p className="textContact textContactTop center-align">▶ Escribeme, con gusto te responderé.</p>
                        

                        <div className="container contactBox">

                            <div className="row center-xs ">
                                <div class="col s3">
                                    <a href="#"><img className="imgContact" src={whatsApp} alt="whatsapp" /></a>
                                </div>

                                <div class="col s3">
                                    <a href="#"><img className="imgContact" src={eMail} alt="mail" /></a>
                                </div>

                                <div class="col s3">
                                    <a href="#"><img className="imgContact" src={linkedIn} alt="linkedin" /></a>
                                </div>

                                <div class="col s3">
                                    <a href="#"><img className="imgContact" src={github} alt="github" /></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;