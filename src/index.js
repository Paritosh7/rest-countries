import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./components/GlobalStyles/GobalStyles";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
