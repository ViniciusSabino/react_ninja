import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "./webpack.config";

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, erro => console.log(erro));

console.log("Front is running on http://localhost:3000");
