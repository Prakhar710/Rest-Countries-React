import React from "react";
import "./App.css";

import { Header } from "./components/common/Header.js";
import {Main} from "./components/home/main/Main.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;


