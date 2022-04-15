import React from "react";

function Icons(icon, title, description) {
  return (
    <>
      <i className={icon} aria-hidden="true"></i>
      <div className="topic">{title}</div>
      <div className="text-two">{description}</div>
    </>
  );
}

export default Icons;
