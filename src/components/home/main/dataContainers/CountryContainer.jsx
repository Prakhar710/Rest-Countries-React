import React from "react";

const CountryContainer = (props) => {

  const numberWithCommas=(num) =>{
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}
  return (
    <div
      key={props.code}
      className="cursor country-container mb-2 mt-2 align-self-stretch"
      onClick={(e) => {
        props.countryData(e, props.code);
      }}
    >
      <div className="image-container">
        <img
          src={props.flag}
          alt={props.code}
          className="img-fluid rounded flag-image"
        />
      </div>
      <div className="country-details p-1">
        <h5>{props.name}</h5>
        <div>
            <div>
              <b>Population</b>:&nbsp;{numberWithCommas(props.population)}
            </div>
            <div>
              <b>Region</b>:&nbsp;{props.region}
            </div>
            <div>
              <b>Capital</b>:&nbsp;{props.capital}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CountryContainer;
