import React, { Component } from "react";

export class Searchbar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          style={{ width: "35vw" }}
          placeholder="Search a Country"
          value={this.props.search}
          onChange={(e) => this.props.searchFunction(e.target.value)}
        ></input>
      </div>
    );
  }
}

export default Searchbar;
