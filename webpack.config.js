const webpack = require("webpack");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// The webpack-dev-server is for live development.
const dist = path.resolve(__dirname, "dist");

module.exports = (env, args) => {
  const isProductionMode = args.mode === "production"; // Similar to release mode

  return {
    entry: "./web/index.js",
    output: {
      path: dist,
      filename: "[name].js",
      // filename: isProductionMode
      //   ? "[name].[contenthash].js"
      //   : "[name].[chunkhash].js",
    },
    devServer: {
      contentBase: dist,
    },
    experiments: {
      asyncWebAssembly: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./web/index.html",
      }),
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "."),
      }),
      new webpack.ProvidePlugin({
        TextDecoder: ["text-encoding", "TextDecoder"],
        TextEncoder: ["text-encoding", "TextEncoder"],
      }),
    ],
  };
};
