// see val-loader
// https://github.com/webpack/webpack.js.org/issues/1268

const Module = require("module");

function loadModule(code, loaderContext) {
  const filename = loaderContext.resource;
  const module = new Module(filename, loaderContext);
  module.paths = Module._nodeModulePaths(loaderContext.context);
  module.filename = filename;
  module._compile(code, filename);
  return module.exports;
}

module.exports = async function (complileTimeModule) {
  const loaderContext = this;
  const codeGenerator = loadModule(complileTimeModule, loaderContext);

  const generatedRuntimeModule = await codeGeneration;
  return generatedRuntimeModule.code;
};
