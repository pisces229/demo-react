const path = require('path');
const fs = require('fs');
const Webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@appSrc': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript', 
              ['@babel/preset-react', { runtime: 'automatic' }], 
              '@babel/preset-env',
            ],
            plugins: ["@babel/plugin-transform-runtime"],
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 25000,
      //   },
      // },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: '/static/media',
          name: '[name].[ext]',
          outputPath: 'static/media',
        },
      },
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      process: {
        env: {
          ENVIRONMENT: '"development"',
          PUBLIC_URL: '""',
          ENDPOINT: '""',
        },
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'favicon.ico'),
          to: path.resolve(__dirname, 'dist', 'favicon.ico'),
        },
        {
          from: path.resolve(__dirname, 'public', 'robots.txt'),
          to: path.resolve(__dirname, 'dist', 'robots.txt'),
        },
      ],
    }),
    new HtmlWebPackPlugin({
      // favicon: path.join(__dirname, 'public', 'favicon.ico'),
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      templateParameters: {
        ENVIRONMENT: 'DEVELOPMENT',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
    }),
    new ESLintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      eslintPath: require.resolve('eslint'),
      failOnError: true,
      failOnWarning: false,
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    port: 9900,
    http2: true,
    https: {
      key: fs.readFileSync('c:/workspace/mkcert/localhost+2-key.pem'),
      cert: fs.readFileSync('c:/workspace/mkcert/localhost+2.pem'),
    },
    hot: true,
    open: true,
  },
};
