import React, { useState } from "react";
import Type from "./Type";
// import "./Banner.css";
const Banner = () => {
  const [name, setName] = useState("Bandhu");

  return (
    <>
      <section className="banner" id="banner">
        <div className="content">
          <h2 className="content_head">Pramesh {name}</h2>
          <p>
            Hi I am
            <span>
              <Type />
            </span>
            based in Butwal, Rupandehi.
          </p>
          {/* <a className="button" href="#contacts">
            <span>Hire Me</span>
          </a> */}
          <button className="button" onClick={() => setName("Shrestha")}>
            Click
          </button>
          {console.log(name)}
        </div>
        <div className="hero_image"></div>
        <div id="right_circle"></div>
        <div className="icon">
          <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
          <i className="fa fa-dribbble fa-lg" aria-hidden="true"></i>
          <i className="fa fa-behance fa-lg" aria-hidden="true"></i>
        </div>
      </section>
    </>
  );
};

export default Banner;
