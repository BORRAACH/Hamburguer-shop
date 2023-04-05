const path = require("path"); // CommonJS

module.exports = {
  mode: "development",
  entry: ["./src/js/index.js", "./src/sass/style.scss"],
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "source-map",
};
