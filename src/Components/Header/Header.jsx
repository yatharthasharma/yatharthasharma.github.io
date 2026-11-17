import React from "react";
import NavigationMenu from "./NavigationMenu.jsx";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="">
      <nav className="navbar navbar-light navbar-expand-sm navbar-custom fixed-top bg-light">
        {/* Toggler/collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavigationMenu />
      </nav>
    </div>
  );
};

export default Header;
