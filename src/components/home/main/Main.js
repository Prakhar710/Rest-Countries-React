import React, { Component } from "react";

import  Toolbar  from "../toolbar/Toolbar.js"

export class Main extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.allCountriesData();
  }

  render() {
    return (
      <div>
        <Toolbar></Toolbar>
        {/* <DataContainer></DataContainer> */}
      </div>
    );
  }

  allCountriesData = () => {
    const url = "https://restcountries.eu/rest/v2/all";
    return fetch(url, {
      method: "GET"
    })
    .then(res => {
    return res.json()
    })
    .then((data) => {
    this.setState({countries:data})
    })
    .catch(err => { throw err });
  };
}

export default Main;
