import React, {Component} from "react";
import WhatsApp from "../img/whatsapp.png";
import Github from "../img/git.png";
import LinkedIn from "../img/linkedin.png";
import EMail from "../img/mail.png"



class Contact extends Component {
    render(){
        return(
            <div>
                <h1 className="titlePages">CONTACTO</h1>

                <p>¿Te gustaría que trabajemos juntos? ¿Tienes alguna duda o comentario? Escribeme, con gusto te responderé.</p>

                <a href="#"><img className="imgContact" src={WhatsApp} alt="whatsapp" /></a>
                <a href="#"><img className="imgContact" src={EMail} alt="mail" /></a>
                <a href="#"><img className="imgContact" src={LinkedIn} alt="linkedin" /></a>
                <a href="#"><img className="imgContact" src={Github} alt="github" /></a>
            </div>
        )
    }
}

export default Contact;