const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    //   assetModuleFilename:  pathData => {
    //     const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
    //     return `${filepath}/[name][ext]`;
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({ extensions: 'ts' }),
    // new CopyPlugin({
    //   patterns: [
    //     // {
    //     //   from: path.resolve(__dirname, './src/assets/images/bikes'),
    //     //   to: path.resolve(__dirname, './dist/assets/images/bikes'),
    //     // },
    //     // {
    //     //   from: path.resolve(__dirname, './src/assets/images/brands'),
    //     //   to: path.resolve(__dirname, './dist/assets/images/brands'),
    //     // },
    //   ],
    // }),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'production';
  // eslint-disable-next-line global-require
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
