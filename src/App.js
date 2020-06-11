import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/common/Header.js";
import { Main } from "./components/home/main/Main.js";
import { Detail } from "./components/detail/Detail.js";
import NoPageFound from "./components/common/404.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/country/:code" exact component={Detail} />
        <Route component={NoPageFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
