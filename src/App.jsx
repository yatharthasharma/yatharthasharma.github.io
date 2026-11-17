import React from "react";
import Header from "./Components/Header/Header.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Router>
        <Header />
        <div className="app-body smooth-scroll">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
