import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <h3>Where in the world?</h3>
        <div>
        <i className="far fa-moon"></i>
        <span>Dark Mode</span>
        </div>
      </header>
    );
  }
}

export default Header;
