var Titulo = require("./app");
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  React.createElement(Titulo),
  document.querySelector('[data-js="app"]')
);
