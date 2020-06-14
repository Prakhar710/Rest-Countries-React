import React from "react";
import { Link } from "react-router-dom";

const BorderButton = (props) => {
  if (props.borders.length>0) {
    return props.borders.map((border) => {
      return (
        <div key={border.alpha3Code} style={{margin:"1% 3%"}}>
          <Link to={`/country/${border.alpha3Code.toLowerCase()}`}>
            <button className="border-buttons-btn">{border.name}</button>
          </Link>
        </div>
      );
    });
  } else {
    return (<div>No border country</div>);
  }
};

export default BorderButton;
