// Entrada principal da Aplicação

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
// Tudo que estiver sendo renderizado dentro desse componente será feito a atualização com base no hot-loader

import App from "./app";

const renderApp = NextApp => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

// Trecho que o hot-loader irá executar sempre que um arquivo for alterado
if (module.hot)
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    renderApp(NextApp);
  });
