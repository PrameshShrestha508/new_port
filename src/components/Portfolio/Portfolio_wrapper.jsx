import React from "react";
// import "./Portfolio.css";
import Portfolio from "./Portfolio";
// import CoffeeImg from "../../images/coffee.PNG";
// import CurlinaryImg from "../../images/culinary.PNG";
// import TruthImg from "../../images/truthdare.png";

const PortfolioWrapper = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="projects_title">My Projects</h2>
        <p className="projects_subtitle">
          Here are a few design projects I've worked on recently. Want to see
          more? Check my github.
        </p>
        <div className="projects_box">
          <Portfolio />
          {/* <Portfolio
            img={CurlinaryImg}
            title="Curlinary Templete"
            desc="This is simple templete of Curlinary Templete"
          />
          <Portfolio
            img={TruthImg}
            title="Truth and Dare Templete"
            desc="This is Truth and dare templete"
          /> */}
        </div>
      </section>
    </>
  );
};

export default PortfolioWrapper;
