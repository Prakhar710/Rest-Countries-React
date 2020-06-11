import React from "react";

import CountryContainer from "./CountryContainer.jsx";

const DataContainer = (props) => {
  return (
    <div className="container d-flex flex-wrap align-self-stretch">
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
            />
        );
      })}
    </div>
  );
};

export default DataContainer;
