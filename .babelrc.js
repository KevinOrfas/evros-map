module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        debug: false,
        modules: false,
        targets: { browsers: [">1%"] },
        // useBuiltIns: "usage",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: true,
        regenerator: true,
      },
    ],
  ],
};
