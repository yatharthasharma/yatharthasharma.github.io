import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="nav navbar-nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
