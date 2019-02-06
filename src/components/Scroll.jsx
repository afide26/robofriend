import React from "react";

const Scroll = props => {
  const scrollStyles = {
    height: "600px",
    overflowY: "scroll",
    border: "5px solid black",
    maxWidth: "80vw",
    margin: "0 auto"
  };
  return <div style={scrollStyles}>{props.children}</div>;
};

export default Scroll;
