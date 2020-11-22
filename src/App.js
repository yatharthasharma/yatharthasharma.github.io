import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Router>
        <Header />
        <div className="app-body smooth-scroll">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
