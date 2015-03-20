var Path = require("path");
var webpackConfig = require("./webpack.config");

webpackConfig.output = {
  path: Path.resolve(__dirname, "./"),
  filename: "server-bundle.js",
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

module.exports = webpackConfig;
