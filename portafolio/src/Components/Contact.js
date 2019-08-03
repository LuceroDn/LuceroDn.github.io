import React, { Component } from "react";

import "./Style.css/Contact.css"



class Contact extends Component {
    render() {
        return (
            <div className="container-fluid backgroundContact">
                <div className="row">
                    <div className="col">

                        <div>
                            <h1 className="titlePages contactTitle">CONTACTO</h1>
                        </div>
                        
                
                        <p className="textContact center-align">¿Te gustaría que trabajemos juntos? ¿Tienes alguna duda o comentario?</p>
                        <p className="textContact textContactTop center-align">Escríbeme, con gusto te responderé.</p>
                        

                        <div className="container contactBox">

                                <div class="col s4">
                                <a href="mailto:lucero_dn@hotmail.es"><img className="email" src="https://img.icons8.com/ios-glyphs/30/000000/secured-letter.png"/></a>
                                </div>

                                <div class="col s4">
                                <a href="https://www.linkedin.com/in/lucerodn/"><img className="linkedin" src="https://img.icons8.com/ios-glyphs/50/000000/linkedin-2.png"/></a>
                                </div>

                                <div class="col s4">
                                <a href="https://github.com/LuceroDn"><img className="github" src="https://img.icons8.com/windows/64/000000/github.png"/></a>
                                </div>
                    

                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;