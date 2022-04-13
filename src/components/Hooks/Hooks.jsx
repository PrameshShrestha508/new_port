import React, { useEffect, useState } from "react";
import axios from "axios";

export const Hooks = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/PrameshShrestha508/repos?per_page=6")
      .then((res) => setPost(res.data));
  }, []);
  return (
    <>
      <h2>List of Github Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {post.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.avatar_url}
                        className="rounded"
                        alt="person"
                      />
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{curElem.name}</h4>
                        <span className="textLeft">Web developer</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-around rounded text-white status">
                          <div className="d-flex flex-column">
                            <span className="articles">Articles</span>
                            <span className="number1">38</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="articles">Followers</span>
                            <span className="number1">38</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="articles">Rating</span>
                            <span className="number1">38</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
