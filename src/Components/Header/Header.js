import React from "react";
import NavigationMenu from "./NavigationMenu";
import { useLocation, withRouter } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  if (useLocation().pathname === "/") {
    return null;
  }
  return (
    <div className="">
      <nav className="navbar navbar-light navbar-expand-sm navbar-custom fixed-top bg-light">
        {/* Toggler/collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavigationMenu />
      </nav>
    </div>
  );
};

export default withRouter(Header);
