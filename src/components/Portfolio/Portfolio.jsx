import React, { useEffect, useState } from "react";
import axios from "axios";
import CoffeeImg from "../../images/coffee.PNG";

const Portfolio = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.github.com/users/PrameshShrestha508/repos?per_page=6")
      .then((res) => {
        setIsLoading(false);
        setPost(res.data);
      });
  }, []);
  return (
    <>
      {isLoading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {!isLoading &&
        post.map((curElem) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={CoffeeImg}
                height="400px"
                width="100%"
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">{curElem.name}</h5>
                <p className="card-text">{curElem.pushed_at}</p>
                <a
                  href={curElem.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live Preview
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Portfolio;
