import React, { Component } from "react";

import Toolbar from "../toolbar/Toolbar.js";
import DataContainer from "../main/dataContainers/DataContainer.jsx";

import { withRouter } from "react-router-dom";

export class Main extends Component {
  state = {
    countries: [],
    defaultCountries:[],
    searchString: "",
    filterParam: "",
  };

  searchText = async(text) => {
    if(text!==null){
      text=text.toLowerCase()
      await this.setState({ searchString: text });
    }
    if(this.state.searchString){
      const countryData=this.state.defaultCountries.filter(country => country.name.toLowerCase().includes(this.state.searchString));
      this.setState({countries:countryData})
    }else{
      this.setState({countries:this.state.defaultCountries})
    }
  };

  filterBy = async(filter) => {
    await this.setState({ filterParam: filter });
    this.allCountriesData(this.state.filterParam);
  };

  componentDidMount() {
    this.allCountriesData(this.state.filterParam);
  }

  render() {
    return (
      <div>
        <Toolbar
          search={this.state.searchString}
          searchFunction={this.searchText}
          filter={this.state.filterParam}
          filterFunction={this.filterBy}
        ></Toolbar>
        <DataContainer countries={this.state.countries}></DataContainer>
      </div>
    );
  }

  allCountriesData = (filter) => {
    let url='';
    if(filter){
        url="https://restcountries.eu/rest/v2/region/"+filter;
    }else{
      url = "https://restcountries.eu/rest/v2/all";
    }
    return fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data.status===404){
          this.setState({ countries: [] });
        }else{
          this.setState({defaultCountries:data})
          this.setState({ countries: data });
        }
         this.searchText(null)
      })
      .catch((err) => {
        throw err;
      });
  };
}

export default withRouter(Main);
