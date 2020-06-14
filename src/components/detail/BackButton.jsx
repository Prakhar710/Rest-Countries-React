import React from 'react'
import { Link } from "react-router-dom";

const BackButton=()=>{
    return (
        <div className="container mb-4 mt-4">
        <Link to="/">
          <button className="back-btn">
            <i className="fas fa-arrow-left"></i>Back
          </button>
        </Link>
      </div>
    )
}

export default BackButton;
