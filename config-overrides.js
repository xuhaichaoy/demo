const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: "css"
  }),
//   addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { "@primary-color": "#1DA57A" }
//   })
);

