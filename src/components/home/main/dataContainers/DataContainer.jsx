import React from "react";
import CountryContainer from "./CountryContainer.jsx";
import { withRouter } from "react-router-dom";

const DataContainer = (props) => {
  const countryData = (e, code) => {
    code = code.toLowerCase();
    props.history.push("/country/" + code);
  };

  return (
      <div className="container d-flex justify-content-between flex-wrap align-items-center mb-3 mt-3">
        {props.countries.map((country, index) => {
          return (
            <CountryContainer
              name={country.name}
              code={country.alpha3Code}
              key={country.alpha3Code}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
              countryData={countryData}
            />
          );
        })}
      </div>
  );
};

export default withRouter(DataContainer);
