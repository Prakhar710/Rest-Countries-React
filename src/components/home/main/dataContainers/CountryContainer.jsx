import React from "react";

const CountryContainer = (props) => {
  return (
    <div className="w-25 p-2">
      <div className="image-container">
        <img src={props.flag} alt={props.code} className="img-fluid rounded flag-image"/>
      </div>
      <div>
        <h5>{props.name}</h5>
        <div>
          <div>{props.population}</div>
          <div>{props.region}</div>
          <div>{props.capital}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryContainer;
