import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "./webpack.config.js";
webpackConfig.mode = "development";

const compiler = webpack(webpackConfig);

export const comp = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
});

export const hot = webpackHotMiddleware(compiler);
