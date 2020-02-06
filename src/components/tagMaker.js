import React from "react";
import "../App.css";

const Tag = props => {
  return (
    <div className="tagContainer">
      <div className="tag">{props.tags[0]}</div>
      <div className="tag">{props.tags[1]}</div>
    </div>
  );
};

export default Tag;
