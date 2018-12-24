"use strict";

import path from "path";
import webpack from "webpack";

// Objeto que o webpack precisa para fazer a leitura do arquivo e gerar o bundle
export default {
  // Arquivo de entrada onde o webpack irá começar a compilar
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000", // Configurando para o webpack executar a aplicação na porta 3000,
    "webpack/hot/only-dev-server", // Irá utilizar o hot-loader somente quando o dev-server estiver executando
    path.join(__dirname, "src", "index")
  ],

  devtool: "source-map", // Source map irá mapear os arquivos originais da aplicação e disponibilizar em "Sources" no navegador, com isso
  // isso facilitará na hora de debuggar e qualquer erro que surgir, a linha será identificada no arquivo original, exatamente da forma como foi criado

  output: {
    // O arquivo bundle que o webpack irá gerar será salvo neste diretório
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"

    // Ao utilizar o comando webpack-dev-server o arquivo de bundle estará em memória e qualquer alteração
    //no "index.js" irá fazer com que o servidor gere o bundle novamente
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin() // Plugin que fará com que o hot-loader funcione corretamente
  ],

  // Modulos do webpack que serão utilizados
  module: {
    // diz ao webpack o que ele precisa fazer com cada tipo de arquivo do projeto
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ["babel-loader"]
      },
      {
        // Configurando o pre-loader 'standad-loader' que irá analisar erros de sintaxe no código antes do webpack gerar o bundle
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "standard-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          // config options to be passed through to standard e.g.
          parser: "babel-eslint"
        }
      }
    ]
  }
};
