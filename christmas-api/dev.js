import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "./client/webpack.config";
config.mode = "development";

const compiler = webpack(config);

export const comp = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

export const hot = webpackHotMiddleware(compiler);
