// Esse arquivo irá chamar todos os outros componentes que serão utilizados pela aplicação

import React from "react";
import PassandoProps from "./passando-props";
import FuncaoPura from "./render-funcao-pura";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <PassandoProps nome="Vinicius Rocha" /> */}
        {/* <PassandoProps /> */}
        {/* <PassandoProps nome={undefined} /> */}
        <FuncaoPura lastName="Rocha" />
      </div>
    );
  }
}

export default App;
