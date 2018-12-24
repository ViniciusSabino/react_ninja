1 - Passando Props

Utilizado quando se deseja passar um atributo para o componente que está sendo criado

Exemplo: <Title nome="Vinicius Rocha"></Title>

No Componente Title => <h1>{this.props.nome}</h1>

2 - Atributos HTML

Exemplos

<h1 className=teste> 
<label htmlFor='input'>Input</label>
<input type='text' id='input' />

    *

No React className = class do HTML \*
No React htmlFor = atributo for do html

3 - getDefaultProps

Usando React.Component

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

4 - Passando outros tipos de dados via props

Exemplos:

Passando um número = <Title nome='Vinicius' idade={23}></Title> => Resultado = 23
Passando um array = <Title nome='Vinicius' idade={[1,2,3]}></Title> => Resultado = 1,2,3
Passando um objeto = <Title nome='Vinicius' idade={ { lastName: 'Vinicius' } }></Title>

5 - Renderizando componentes com funções puras

    *

React.createClass(); - ECMAScript5
_
Funções Puras
_
Classes (ES2015)

Sobre Funções puras

Funções puras vem do conceito de programação funcional onde uma função para ser pura, ele irá sempre retornar o mesmo valor quando os
mesmos parâmetros forem passados.

Exemplo:

import React from "react";

// Opção 1

// const Title = props => <h1>Olâ {`${props.nome} ${props.lastName}`}</h1>;

// Opção 2

const Title = ({ nome, lastName }) => <h1>Olâ {`${nome} ${lastName}`}</h1>;

export default Title;
