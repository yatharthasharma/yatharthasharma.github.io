import React from "react";
import "./Home.css";
import {
  MarkGithubIcon,
  MailIcon,
  TerminalIcon,
  // BrowserIcon,
} from "@primer/octicons-react";
import LinkedInLogo from "../assets/linkedinLogo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-content">
      <div className="name">
        <div className="firstname">Yathartha</div>
        <div className="firstname">Sharma</div>
      </div>
      <br />
      <div className="subtext">Welcome to my website!</div>
      <br />
      <div className="links">
        Check out what interests you...
        <br />
        <br />
        <a
          href="https://github.com/yatharthasharma"
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          GitHub&nbsp;
          <MarkGithubIcon size={25} />
        </a>
        <a
          href="mailto:yatharthasharma09@gmail.com"
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Email&nbsp;
          <MailIcon size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/yatharthasharma/"
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn&nbsp;
          <img src={LinkedInLogo} alt="" className="icon"></img>
          {/* <BrowserIcon size={25} /> */}
        </a>
        <Link to="/about" className="btn btn-light">
          Website!&nbsp;
          <TerminalIcon size={25} />
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Home;
