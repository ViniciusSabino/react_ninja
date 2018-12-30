// Esse arquivo irá chamar todos os outros componentes que serão utilizados pela aplicação

import React from "react";
import PassandoProps from "./passando-props"; // Parte 2 React - Aula 1 - Passando Props
import FuncaoPura from "./render-funcao-pura"; // Parte 2 React - Aula 5 - Renderizando componentes com funções puras
import RenderClasse from "./render-com-classes"; // Parte 2 React - Aula 6 - Renderizando componentes com classes do ES6 2015
import AulaPropKey from "./prop-key.js"; // Parte 2 React - Aula 7 - Conheçendo a Prop Key
import AulaPropChildren from "./prop-children"; // Parte 2 React - Aula 10 - A Prop Children
import AulaComposicao from "./composicao"; // Parte 2 React - Aula 11 - Composição de Componentes

class App extends React.Component {
  constructor() {
    super();
    // Estado inicial do componente
    this.state = {
      text: "Vinicius Sabino da Rocha"
    };
  }
  render() {
    return (
      <div className="container">
        {/* <PassandoProps nome="Vinicius Rocha" /> */}

        {/* <PassandoProps /> */}

        {/* <PassandoProps nome={undefined} /> */}

        {/* <FuncaoPura lastName="Rocha" /> */}

        {/* <RenderClasse nome="Vinícius" /> */}

        {/* {["blue", "red", "green"].map(square => (
          <AulaPropKey color={square} key={square} />
        ))} */}

        {/* <div className="container" onClick={e => alert("Cliquei na Div")}>
          <AulaPropKey />
        </div> */}

        {/* <AulaPropChildren>Botão</AulaPropChildren> */}

        {
          <AulaComposicao
            handleClick={() =>
              this.setState({
                text: 'Alterei o "text" do estado inicial'
              })
            }
          />
        }

        {this.state.text}
      </div>
    );
  }
}

export default App;
