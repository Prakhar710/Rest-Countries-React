import React from "react";

import { Searchbar } from "./Searchbar.jsx";
import { Filter } from "./Filter.jsx";

const Toolbar = () => {
    return (
        <div>
      <Searchbar />
      <Filter />
    </div>
  )
};

export default Toolbar;