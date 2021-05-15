const webpack = require("webpack");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// The webpack-dev-server is for live development.

module.exports = (env, args) => {
  const isProductionMode = args.mode === "production"; // Similar to release mode

  return {
    entry: "./web/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProductionMode
        ? "[name].[contenthash].js"
        : "[name].[chunkhash].js",
    },
    experiments: {
      asyncWebAssembly: true,
      // syncWebAssembly: true,
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
