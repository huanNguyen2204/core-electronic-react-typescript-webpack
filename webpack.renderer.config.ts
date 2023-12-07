import path from "path";
import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/i,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
});

rules.push({
  test: /\.less$/i,
  use: ["style-loader", "css-loader", "less-loader"],
});

rules.push({
  test: /\.s[ac]ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
});

rules.push({
  test: /\.(png|jpg|gif|jpeg)$/i,
  type: "asset/resource",
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".less", ".sass", ".png", ".jpeg", ".jpg", ".gif"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
