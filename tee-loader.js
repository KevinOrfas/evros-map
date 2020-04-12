module.exports = (source) => {
  console.groupCollapsed(`tee-loader ${this.resource}`);
  console.log("tee-loader");
  console.groupEnd();
  return source;
};
