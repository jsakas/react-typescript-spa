const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { DefinePlugin } = require('webpack');


module.exports = {
  mode: process.env.WEBPACK_ENV === 'production' ? 'production' : 'development',
  watch: process.env.WEBPACK_ENV === 'production' ? false : true,
  devtool: process.env.WEBPACK_ENV === 'production' ? 'source-map' : 'eval',
  stats: 'errors-only',
  devServer: {
    host: '0.0.0.0',
    port: 5280,
    historyApiFallback: true,
    disableHostCheck: true,
    index: path.join(__dirname, 'build', 'index.html'),
    contentBase: path.join(__dirname, 'build'),
  },
  entry: {
    main: './src/main.tsx',
    sentry: './src/integrations/Sentry.ts',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build', 'static'),
    publicPath: '/static/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'html', 'base.html'),
      filename: '../index.html',
      chunks: ['sentry', 'main'],
      inject: false,
      head: ['sentry'],
      body: ['main'],
      alwaysWriteToDisk: true,
    }),
    new DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.APP_ENV),
      'SENTRY_DSN': JSON.stringify(''),
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@history': path.resolve(__dirname, 'src', 'history'),
      '@icons': path.resolve(__dirname, 'src', 'icons'),
      '@images': path.resolve(__dirname, 'src', 'images'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.md$/,
        use: [
          'babel-loader',
          'markdown-to-react-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|wav|mp3)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
};
