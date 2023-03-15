const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "is-pseudo-class": true,
        "has-pseudo-class": true,
      },
    }),
  ],
};
