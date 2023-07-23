import React from "react";
import "./Projects.css";
import {images} from "./Project_Images"


export default function Projects(props) {
  return (
    <>
      <h1 className="text-success fontClass" align="center">
        {" "}
        Projects
      </h1>

      <div align="center" className="  mt-5">
        {images.map((image) => {
          const { src, href, target, rel, alt, front_end, back_end, database } =
            image;

          return (
            <div className={"flip-card"}>
              <div className={"flip-card-inner"}>
                <div className="flip-card-front">
                  <img
                    src={src}
                    alt={alt}
                    style={{ width: 300, height: 200 }}
                  ></img>
                </div>
                <div class="flip-card-back">
                  <a href={href} target={target} rel={rel}>
                    <h1>{alt}</h1>
                  </a>

                  <p>Front-End: {front_end}</p>
                  <p>{back_end}</p>
                  <p>{database}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
     
    </>
  );
}
