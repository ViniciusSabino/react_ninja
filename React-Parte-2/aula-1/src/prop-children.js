import React from "react";

const PropChildren = props => (
  <button onClick={props.handleClick}>{props.children}</button>
);

export default PropChildren;
