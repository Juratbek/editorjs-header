module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    clean: true,
    libraryTarget: "umd",
    libraryExport: "default",
    library: "Header",
    publicPath: "/",
  },
};
