import React from "react";
import HomePagePicture from "../assets/Graduation.JPG";
import "./Crap.css";
/**
 * THIS FILE IS NOT BEING USED
 */
function Crap() {
  return (
    <div className="home vh-100">
      <div className="vh-35 d-flex p-2">
        <div className="flex-grow-1 text-center intro-text">
          <h3>I'm Yathartha Sharma.</h3>
          <h3>A Software Developer, Consultant and a Netflix watcher.</h3>
        </div>
        <div className="ml-auto">
          <img src={HomePagePicture} alt="" style={{ width: "400px" }}></img>
        </div>
      </div>
      <div className="d-flex p-2 text-center">
        <h4>Tech Stack</h4>
      </div>
    </div>
  );
}

export default Crap;
