import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "./Country";
import Header from "./Header";
import Home from "./Home";
/**
 * TODO
 * 1. Make fetch generic
 * 2. Adding error boundary
 * 3. Typography is an issue at the moment.
 */

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:name" component={Country}></Route>
      </Switch>
    </Router>
  );
}

export default App;
