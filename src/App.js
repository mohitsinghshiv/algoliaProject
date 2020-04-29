import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Index from "./component/GoogleDrive/Index";

import "../src/css/style.css";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
