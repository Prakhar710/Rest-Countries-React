import React, { Component } from "react";

export class Searchbar extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <i className="fas fa-search fa-sm"></i>&nbsp;
        <input
          type="text"
          style={{ width: "35vw" }}
          placeholder="Search a Country"
          className="search-bar"
          value={this.props.search}
          onChange={(e) => this.props.searchFunction(e.target.value)}
        ></input>
      </div>
    );
  }
}

export default Searchbar;
