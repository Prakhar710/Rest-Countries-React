import React, { Component } from "react";

import Toolbar  from "../toolbar/Toolbar.js"
import DataContainer from "../main/dataContainers/DataContainer.jsx"

import {withRouter} from 'react-router-dom'

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
        <DataContainer countries={this.state.countries}></DataContainer>
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

export default withRouter(Main)
