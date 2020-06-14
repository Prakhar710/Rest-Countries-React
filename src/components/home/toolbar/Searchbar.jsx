import React, { Component } from "react";

export class Searchbar extends Component {
  render() {
    return (
      <div className="search-wrapper d-flex align-items-center mt-2 mb-2">
        <i className="fas fa-search fa-sm"></i>&nbsp;
        <input
          type="text"
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
