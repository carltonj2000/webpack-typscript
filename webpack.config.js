const path = require("path");
const webpack = require("webpack");

const inProduction = !process.env.NODE_DEBUG;

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "public", // for dev server
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  mode: inProduction ? "production" : "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "eval-source-map",
};
