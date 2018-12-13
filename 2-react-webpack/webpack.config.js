"use strict";

const path = require("path");

// objeto que o webpack precisa para fazer a leitura do arquivo e gerar o bundle
module.exports = {
  // Arquivo de entrada onde o webpack irá ler
  entry: path.join(__dirname, "src", "index"),
  output: {
    // O arquivo bundle o webpack irá salvar neste diretorio
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    // Utilizando comando webpack-dev-server o arquivo de bundle estara em memória e qualquer alteração no "index.js" o servidor irá realizar o bundle novamente
    publicPath: "/static/"
  }
};
