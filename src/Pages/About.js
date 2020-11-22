import React from "react";
import "./About.css";
import GraduationPic from "../assets/Graduation.png";
import Node from "../assets/nodejs.svg";
import Mongo from "../assets/mongodb.svg";
import AWS from "../assets/aws.svg";
import Java from "../assets/java.svg";
import Android from "../assets/android-icon.svg";
import ReactLogo from "../assets/react.svg";
import JavaScript from "../assets/javascript.svg";
import HTML from "../assets/html-5.svg";
import MySQL from "../assets/mysql.svg";
import Dynamo from "../assets/aws-dynamodb.svg";
import S3 from "../assets/aws-s3.svg";
import Lambda from "../assets/aws-lambda.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page-content">
      <div className="title">
        <div className="image">
          <img src={GraduationPic} alt="" className="profileImage"></img>
        </div>
        <div className="description">
          <h5>
            Hello there, I am Yathartha. I am a Computer Science graduate from
            Newcastle University and have been working at Accenture for the past
            2 years. <br />
            <br />I am skilled in REST API Development and working on the Cloud,
            specifically AWS. I aspire to become a Full-Stack Developer and to
            achieve this goal, I am currently building specialisation in React
            by working on this portfolio website.
            <br />
            <br />I also have a diverse range of working and living experience –
            have grown up & lived in India, studied & currently working in the
            UK and undertaken an internship in Japan.
          </h5>
        </div>
      </div>
      <div className="experience">
        <h2>
          Experience <br />
          <br />
        </h2>
        <div className="work-exp">
          <h4>Technology Architecture Delivery Analyst | Full Time</h4>
          <h4> Accenture (Sep 2019 - Present)</h4>
          <h4> London, UK</h4>
          <ul className="work-experience-list">
            <li>
              I joined Accenture on a Graduate scheme in September 2019 after
              graduating from Newcastle University. Since joining, I have worked
              for a wide variety of clients (Banking, Conversational AI, Public
              Sector) to build highly scalable Microservices deployed on the
              Cloud.
            </li>
            <li>
              Skilled in Back-end Development, building specialisation in
              Front-end frameworks such as React.
            </li>
          </ul>
        </div>
        <div className="work-exp">
          <h4>Software Developer | Summer Intern</h4>
          <h4>Newcastle University (Jun 2019 - Aug 2019)</h4>
          <h4>Newcastle upon Tyne, UK</h4>
          <ul className="work-experience-list">
            <li>
              Spent the summer after graduating from university working as a
              Software Developer on a research project supervised by my
              Dissertation Supervisor.
            </li>
            <li>
              Designed, developed, tested and documented REST APIs, using
              technologies such as Node/Express.js and Postman. Designed and
              implemented Relational DB tables in MySQL using Sequelize ORM for
              Nodejs.
            </li>
            <li>
              Basic Android development in Xamarin and Web Development in
              Vue/JavaScript, scripting work in C#/Node.js.
            </li>
          </ul>
        </div>
        <div className="work-exp">
          <h4>Application Development Associate | Industrial Placement</h4>
          <h4>Accenture (Jul 2017 - Jul 2018)</h4>
          <h4>London, UK</h4>
          <ul className="work-experience-list">
            <li>Something something</li>
            <li>
              Designed, developed, tested and documented REST APIs, using
              tSomething something
            </li>
            <li>
              Basic AndrSomething something Designed, developed, tested and
              documented REST API
            </li>
          </ul>
        </div>
      </div>
      <div className="tech-stack">
        <h2>
          Tech Stack <br />
          <br />
        </h2>
        <div className="card-columns">
          <div className="card card-custom">
            <img src={Node} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">Node</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={ReactLogo} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">React</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={AWS} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">AWS</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={Java} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">Java</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={HTML} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">HTML</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={Android} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">Android</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={Dynamo} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">DynamoDB</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={JavaScript} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">JavaScript</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={MySQL} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">MySQL</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={Mongo} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">MongoDB</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={S3} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">S3 Buckets</h5>
            </div>
          </div>
          <div className="card card-custom">
            <img src={Lambda} alt="" className="logo"></img>
            <div className="card-body">
              <h5 className="card-text">Lambda Functions</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h2> Contact me</h2>
        <h4 className="homepage-link">
          Please contact me by selecting any of my handles available on the
          <Link to="/">homepage</Link>
          .
          <br />
          <br />
        </h4>
      </div>
    </div>
  );
}

export default About;
