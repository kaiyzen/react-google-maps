var Path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

webpackConfig.entry = "./client/scripts/server.js",

webpackConfig.output = {
  path: Path.resolve(__dirname, "./"),
  filename: "server-bundle.js",
  library: true,
  libraryTarget: "commonjs2",
};

webpackConfig.target = "node";

webpackConfig.externals = [
  {
    "react": true,
    "react/addons": true,
  },
];

webpackConfig.module.loaders.forEach(function (module, index) {
  if (0 !== index) {
    module.loader = "null-loader";
  }
});

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    "window": false,
  })
);

module.exports = webpackConfig;
