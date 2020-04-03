import React from "react";
import "./App.css";

import CurrentRate from "./Component/CurrentRate";
import PastRate from "./Component/PastRates";
function App() {
  return (
    <div className="App">
      <CurrentRate />
      {/* <PastRate /> */}
    </div>
  );
}

export default App;
