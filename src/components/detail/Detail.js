import React, { Component } from "react";
import { withRouter } from "react-router";

export class Detail extends Component {
  state = {
    country: [],
    currencies:[]
  };

  countryData = () => {
    const { code } = this.props.match.params;
    const url = `https://restcountries.eu/rest/v2/alpha/${code}`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          if(data){
        this.setState({ country: data });
        this.setState({currencies:data.currencies})
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  componentDidMount() {
    this.countryData();
  }

  render() {
    let { country } = this.state;
    return (
      <div>
        <div>butttofghjk</div>
        <div>
          <div>
            <div>
              <img src={country.flag} alt={country.alpha3Code} />
            </div>
          </div>
          <div>
            <div>
              <h5>{country.name}</h5>
            </div>
            <div>
              <div>
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
              <div>
                <p>
                  <b>Top Level Domain:</b>&nbsp;
                  {country.topLevelDomain
                  ? country.topLevelDomain.map((domain) => { return (<span key={domain}>{domain}</span>)}) 
                  : null}
                </p>
                <p>
                  <b>Currencies:</b>&nbsp;
                  {this.state.currencies.map((currency,i)=>{
                    return (<span key={currency.code}>
                        {this.state.currencies.length=== i + 1 ? currency.name : currency.name + ', '}
                    </span>)
                  })}
                </p>
                <p>
                  <b>Languages:</b>&nbsp;
                  {country.languages
                  ? country.languages.map((language,i) => 
                  { return (<span key={language.iso639_2}>
                      {country.languages.length=== i + 1 ? language.name : language.name + ', '}
                      </span>)})
                  : null}
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
