import React from "react";
import "./App.css";

import CurrentRate from "./Component/CurrentRate";
import PastRate from "./Component/PastRates";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={CurrentRate} />
          <Route path="/pastRate" exact component={PastRate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
