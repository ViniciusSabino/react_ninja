import React from "react";

// Opção 1

const Title2 = props => <h1>Olâ {`${props.nome} ${props.lastName}`}</h1>;

// Opção 2

const Title = ({ nome, lastName }) => <h1>Olâ {`${nome} ${lastName}`}</h1>;

// Propriedades default funcionarão da mesma maneira
Title.defaultProps = {
  nome: "Desconhecido"
};

export default Title;
