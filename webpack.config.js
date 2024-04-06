const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require("path");
const mode = process.env.NODE_ENV || "production";

// package json shared
const pkg = require("./package.json");
const name = pkg.name;
const deps = pkg.dependencies;

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath: "auto", // New
  },
  target: "web",
  optimization: {
    minimize: mode == 'production',
  },

  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name,
      filename: "remoteEntry.js",
      exposes: {
        "./rate": "./src/rate/Rate",
      },
      remotes: {
        billingApp: "billingApp@http://localhost:3001/remoteEntry.js",
        lib: "lib@http://localhost:3000/remoteEntry.js",
      },
      shared: {
        ...deps,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
