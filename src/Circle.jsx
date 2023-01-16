import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className={`btn Circle ${props.active ? "active" : ""}`}
      onClick={props.clickHandler}
    >
      {/* <h2>{props.id}</h2> */}
    </div>
  );
};

export default Circle;
