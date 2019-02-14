module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-aspect-ratio-mini": {},
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    }
  }
};
