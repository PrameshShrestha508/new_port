import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Works.css";
import Cards from "./Cards";

const Works = () => {
  const [projDetails, setProjectDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/PrameshShrestha508/repos?per_page=6")
      .then((res) => {
        setProjectDetails(res.data);
      });
  }, []);
  return (
    <>
      <React.Fragment>
        <div className="card-container">
          {projDetails.map((project, index) => {
            return <Cards key={index} project={project} />;
          })}
        </div>
      </React.Fragment>
    </>
  );
};

export default Works;
