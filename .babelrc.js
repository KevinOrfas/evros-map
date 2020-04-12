module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        debug: true,
        modules: false,
        targets: { browsers: [">1%"] },
        // useBuiltIns: "usage",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-tranform-runtime",
      { helpers: true, polyfill: true, generator: true },
    ],
  ],
};
