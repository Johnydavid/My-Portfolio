import React from "react";
import './Home.css';
import './Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "react-scroll-to-top";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSsquareArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // const handleClick = ()=>{
  //   let alink = document.createElement("a");
  //   alink.href = "https://drive.google.com/file/d/1-bTCivS0W0rNT3LN7W_cbz9YLiwvGSu8/view?usp=drive_link";
  //   alink.target = "new"
  //   alink.click();
  // }
  return (
    
    <>
      <div className= "container">  

        <div className="nameClass text-start">
          <div>Hi,</div>
          <div>I'm,</div>
          <div>Johnson David</div>
        </div>

        <div className="typedOut text-center text-white-50">
          <h4>MERN Full Stack Developer</h4>
        </div>

        {/* <button  className="btn btn-secondary btn-lg text-dark mt-5" onClick={handleClick}>Download Resume</button> */}
       
        </div>

        <div className="buttonContainer">
        <a href = "https://drive.google.com/file/d/1-jfeyhSYAwovhuYyy4F0Bv73cig40aRt/view" target = "new">
            <span>Download Resume</span>
        </a>
       
        </div>


       
        <div className="container">
        <div className="row  p-3 ">

        <div className="col col-auto mt-5 me-3">
            <img
              src="https://i.pinimg.com/564x/c3/83/aa/c383aac9b5c231365451910306c6a341.jpg"
              alt="Gmail"
              className="logoImg"
            ></img>
            <span className="mt-3 text-white-50"> dropin2johny@gmail.com</span>
          </div>
          <div className="col col-auto  mt-5 " >
            <img
              src="https://i.pinimg.com/564x/e1/89/99/e18999d527d4825cbb92878d866e9417.jpg"
              alt="phone"
              className="logoImg"
            ></img>
            <span className="ms-3 mt-3 text-white-50">9841360216</span>
          </div>
          <div className="col col-auto mt-5" >
            <a
              href="https://linkedin.com/in/johnson-david-5b02ba221"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.pinimg.com/564x/85/f2/dc/85f2dcf8681c434ecbd5a3019e9ae86a.jpg"
                alt="LinkedIn"
                className="logoImg"
              ></img>
            </a>
          </div>
          <div className="col col-auto mt-5" align="center">
            <a
              href="https://github.com/Johnydavid"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Github"
                className="logoImg"
              ></img>
            </a>
          </div>
          <div className="col col-auto mt-5">
            <a
              href="https://app.netlify.com/teams/johnydavid/overview"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.pinimg.com/564x/95/e1/78/95e178f5b1dc1a2327595784442a866c.jpg"
                alt="Netlify"
                className="logoImg"
              ></img>
            </a>
          </div>
          </div>
          </div>

          <ScrollToTop
        smooth
        title="Move to Top"
        component={<FontAwesomeIcon icon={faAngleUp} />}
      />
        
  

    </>
  );
}
