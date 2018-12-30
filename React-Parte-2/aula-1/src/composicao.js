import React from "react";
import Button from "./prop-children";

const LikeButton = props => (
  <Button handleClick={props.handleClick}>Curtir</Button>
);

export default LikeButton;
