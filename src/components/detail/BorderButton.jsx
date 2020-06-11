import React from "react";
import { Link } from "react-router-dom"

const BorderButton = (props) => {
  return props.borders.map((border) => {
    return (
      <span key={border.alpha3Code}>
        <Link to={`/country/${border.alpha3Code.toLowerCase()}`}>
          <button>{border.name}</button>
        </Link>
      </span>
    );
  });
};

export default BorderButton;
