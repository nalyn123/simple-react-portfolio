const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const BASE_URL = "/simple-react-portfolio/";

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: process.env.NODE_ENV === "development" ? "/" : BASE_URL,
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      assert: require.resolve("assert/"),
    },
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@template": path.resolve(__dirname, "./src/template/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
    fullySpecified: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
              esModule: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: process.env.NODE_ENV === "development" ? "/" : BASE_URL,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env": JSON.stringify(process.env),
      BASE_URL: JSON.stringify(
        process.env.NODE_ENV === "development" ? "/" : BASE_URL
      ),
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/favicon.ico", to: "favicon.ico" },
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/logo192.png", to: "logo192.png" },
        { from: "dist/index.html", to: "404.html" },
      ],
    }),
  ],
  devServer: {
    static: "./public",
    hot: true,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: "/",
    },
  },
};
