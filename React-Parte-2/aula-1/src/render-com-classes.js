import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1>{`${this.props.nome} ${this.props.lastName}`}</h1>;
  }
}

Title.defaultProps = {
  nome: "Desconhecido",
  lastName: "Sem sobrenome"
};

export default Title;
