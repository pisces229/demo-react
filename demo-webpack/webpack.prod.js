const fs = require('fs');
const path = require('path');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  target: ['browserslist'],
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash].js',
  },
  // devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
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
              "@babel/preset-env"
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
          name: '[name].[contenthash].[ext]',
          outputPath: 'static/media',
        },
      },
    ],
  },
  optimization: {
    // Tree Shaking
    // usedExports: true,
    // SplitChunksPlugin
    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       name: 'main',
    //       test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //       chunks: 'all'
    //     }
    //   }
    // },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      process: {
        env: {
          ENVIRONMENT: '"production"',
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
      minifyJS: true,
      templateParameters: {
        ENVIRONMENT: 'Porduction',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
    // new CompressionPlugin({
    //   algorithm: 'gzip',
    //   test: /.js$|.css$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    new CleanWebpackPlugin(),
    // new Webpack.optimize.ModuleConcatenationPlugin(),
    // new BundleAnalyzerPlugin({ analyzerPort: 7788 }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
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
};
