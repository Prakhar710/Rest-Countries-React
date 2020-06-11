import React, { Component } from "react";

import{Link} from "react-router-dom"

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
        <h3>Where in the world?</h3>
        </Link>
        <div>
        <i className="far fa-moon"></i>
        <span>Dark Mode</span>
        </div>
      </header>
    );
  }
}

export default Header;
