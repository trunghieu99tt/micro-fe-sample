const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.vue$/i,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};