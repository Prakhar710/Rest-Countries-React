import React, { Component } from "react";
import { withRouter } from "react-router";
import BorderButton from "./BorderButton.jsx";
import BackButton from "./BackButton.jsx";
export class Detail extends Component {
  state = {
    country: [],
    currencies: [],
    borders: [],
  };

  countryData = () => {
    if (this.props.match.params.code) {
      if (this.state.country.status !== 400) {
        if (
          this.state.country.length === 0 ||
          (this.state.country.length !== 0 &&
            this.state.country.alpha3Code.toLowerCase() !==
              this.props.match.params.code)
        ) {
          const { code } = this.props.match.params;
          const url = `https://restcountries.eu/rest/v2/alpha/${code}`;

          fetch(url, {
            method: "GET",
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              if (data) {
                this.setState({ country: data });
                this.setState({ currencies: data.currencies });
              }
            })
            .then(() => {
              this.getTheData();
            })
            .catch((err) => {
              throw err;
            });
        }
      }
    }
  };

  getTheData = () => {
    let { country } = this.state;
    let borderCountriesString = "";
    country.borders.map((border) => {
      return (borderCountriesString = borderCountriesString + border + ";");
    });
    if (borderCountriesString) {
      this.fetchBorderCountry(borderCountriesString);
    }
  };

  fetchBorderCountry = (countries) => {
    const url = "https://restcountries.eu/rest/v2/alpha?codes=" + countries;
    // console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ borders: data });
      })
      .catch((err) => {
        throw err;
      });
  };

  componentDidMount() {
    this.countryData();
  }

  componentDidUpdate() {
    this.countryData();
  }

  render() {
    let { country } = this.state;
    return (
      <div>
        <BackButton />
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="custom-width d-flex justify-content-center">
              <div className="image-container-details">
                <img
                  src={country.flag}
                  alt={country.alpha3Code}
                  className="flag-image"
                />
              </div>
            </div>
            <div className="d-flex-column custom-width p-4">
              <div className="ml-5 mb-4">
                <h4><b>{country.name}</b></h4>
              </div>
              <div className="d-flex justify-content-between mb-4 ml-5" style={{fontSize:"1.2vw"}}>
                <div className="">
                  <p>
                    <b>Native Name:</b>&nbsp;{country.nativeName}
                  </p>
                  <p>
                    <b>Population:</b>&nbsp;{country.population}
                  </p>
                  <p>
                    <b>Region:</b>&nbsp;{country.region}
                  </p>
                  <p>
                    <b>Sub Region:</b>&nbsp;{country.region}
                  </p>
                  <p>
                    <b>Capital:</b>&nbsp;{country.capital}
                  </p>
                </div>
                <div className="">
                  <p>
                    <b>Top Level Domain:</b>&nbsp;
                    {country.topLevelDomain
                      ? country.topLevelDomain.map((domain) => {
                          return <span key={domain}>{domain}</span>;
                        })
                      : null}
                  </p>
                  <p>
                    <b>Currencies:</b>&nbsp;
                    {this.state.currencies.map((currency, i) => {
                      return (
                        <span key={currency.code}>
                          {this.state.currencies.length === i + 1
                            ? currency.name
                            : currency.name + ", "}
                        </span>
                      );
                    })}
                  </p>
                  <p>
                    <b>Languages:</b>&nbsp;
                    {country.languages
                      ? country.languages.map((language, i) => {
                          return (
                            <span key={language.iso639_2}>
                              {country.languages.length === i + 1
                                ? language.name
                                : language.name + ", "}
                            </span>
                          );
                        })
                      : null}
                  </p>
                </div>
              </div>
              <div className="d-flex ml-5" style={{fontSize:"1.2vw"}}>
                <div style={{width:"50%"}}>
                <b>Border Countries:</b>
                </div>
                <div className="border-buttons">
                <BorderButton borders={this.state.borders} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
