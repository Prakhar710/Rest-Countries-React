import React from "react";

const CountryContainer = (props) => {
  return (
    <div
      key={props.code}
      className="cursor"
      onClick={(e) => {
        props.countryData(e, props.code);
      }}
    >
      <div className="image-container">
        <img
          src={props.flag}
          alt={props.code}
          className="img-fluid rounded flag-image border"
        />
      </div>
      <div>
        <h5>{props.name}</h5>
        <div>
          <div>
            <p>
              <b>Population</b>:&nbsp;{props.population}
            </p>
          </div>
          <div>
            <p>
              <b>Region</b>:&nbsp;{props.region}
            </p>
          </div>
          <div>
            <p>
              <b>Capital</b>:&nbsp;{props.capital}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryContainer;
