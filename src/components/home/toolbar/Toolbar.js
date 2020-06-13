import React from "react";

import { Searchbar } from "./Searchbar.jsx";
import { Filter } from "./Filter.jsx";

const Toolbar = (props) => {
  return (
    <div className="d-flex container justify-content-between align-items-center mb-3 mt-3">
      <Searchbar search={props.search} searchFunction={props.searchFunction} />
      <Filter filterFunction={props.filterFunction} />
    </div>
  );
};

export default Toolbar;
