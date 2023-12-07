/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    "postcss-preset-env",
    tailwindcss,
    autoprefixer
  ],
};