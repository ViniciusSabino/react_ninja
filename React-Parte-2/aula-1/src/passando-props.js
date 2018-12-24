import React from "react";

class PassandoProps extends React.Component {
  render() {
    return <h1>Meu Nome é {this.props.nome}</h1>;
  }
}

// Definindo uma propriedade padrão chamada 'nome' que quando não passada no momento que o componente for
// criado irá receber esse valor igual á 'Desconhecido'
PassandoProps.defaultProps = {
  nome: "Desconhecido"
};

export default PassandoProps;
