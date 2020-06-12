import React from "react";

import { Searchbar } from "./Searchbar.jsx";
import { Filter } from "./Filter.jsx";

const Toolbar = () => {
    return (
        <div className="d-flex container justify-content-between align-items-center mb-2">
      <Searchbar />
      <Filter />
    </div>
  )
};

export default Toolbar;