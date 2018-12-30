import React from "react";

const Square = ({ color }) => (
  <div
    style={{
      height: "100px",
      width: "100px",
      backgroundColor: color
    }} // Adicionando estilo diretamente aos componentes
  />
);

// Setando propriedades padrões para o componente
Square.defaultProps = {
  color: "red"
};

export default Square;
