import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const dev = process.env.NODE_ENV !== "production";

const hmrPlugins = dev ? ["webpack-hot-middleware/client"] : [];

export default {
  mode: process.env.NODE_ENV,
  devtool: dev ? "inline-source-map" : undefined,
  entry: path.resolve(__dirname, "..", "ChristmasShop", "src", "main.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[contenthash].[ext]",
          },
        },
      },
      {
        test: /\.svg/,
        use: "@svgr/webpack",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "ChristmasShop", "index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
  },
};
