const isProduction = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// For styled-components debugging
const styledComponentsTransformer = require('typescript-plugin-styled-components').default();

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/public`,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],

    alias: {
      '~': `${__dirname}/src`,
    },
  },

  devtool: isProduction ? undefined : 'source-map',
};
