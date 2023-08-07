import React from "react";
import './About.css';



export default function About() {

  return (
    <div>
      <div className="container aboutBody">
        <div className="row mt-3 bg-warning-subtle">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <h1 className="text-success "> About Me</h1>

            <ul className="mt-3 fs-4 fst-italic text-white-50 ">
              <li>
                I'm a{" "}
                <span className="text-warning">MERN Full Stack Developer</span>{" "}
                with a passion for developing interactive web applications.
              </li>
              <li className="mt-3 ">
                Entry level experience in developing full stack applications
                using the MERN stack{" "}
                <span class="text-warning">
                  (MongoDB, Express, React, Node.js)
                </span>
              </li>
              <li className="mt-3">
                Familiarity with software development best practices such as
                version control[Git] and continuous integration.
              </li>
              <li className="mt-3">
                Experience developing RESTful APIs using Node.js and Express 
                
              </li>

              <li className="mt-3">
                Proficiency in HTML5, CSS3, and JavaScript
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12  "
            align="center"
          >
            <h1 className="text-success  ">Technical Skills</h1>

            <h3 className="mt-3 text-danger">Languages</h3>
            <p className="mt-3 revealSkills ">
              {" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                title="JavaScript"
             

              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  className="skillsImg"
                
                />{" "}
              </a>{" "}
              </p>
           
            <h3 className="mt-3 text-danger">Front End Development</h3>
            <p className="mt-3 revealSkills">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  title="React"
                  className="skillsImg"
                />{" "}
              </a>
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  title="HTML5"
                  className="skillsImg"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
               
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  title="CSS"
                  className="skillsImg"
                />{" "}
              </a>{" "}
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  title="Bootstrap"
                  className="skillsImg"
                
                />{" "}
              </a>{" "}
            </p>
            <h3 className="mt-3 text-danger">Back End Development</h3>
            <p className="mt-3 revealSkills">
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                {" "}
              
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  title="NodeJS"
                  className="skillsImg"
                />{" "}
              </a>
            </p>
            <h3 className="mt-3 text-danger">Database</h3>
            <p className="mt-3 revealSkills">
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                  alt="mongoDB"
                  title="MongoDB"
                  className="skillsImg"
                />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
