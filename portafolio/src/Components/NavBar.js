import React, { Component } from "react";
import M from "materialize-css";

class NavBar extends Component {
componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }


  render() {
    return (
     <header>
        <nav>
    <div className="nav-wrapper">
      <a href="cvv" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>

     </header>
    );
  }
}


export default NavBar;
