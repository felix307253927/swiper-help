/**
 * @author Created by felix on 17-12-4.
 * @email   307253927@qq.com
 */
'use strict';

/**
 * @author Created by felix on 17-8-30.
 * @email   307253927@qq.com
 */
'use strict';

const path               = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin     = require('webpack/lib/optimize/UglifyJsPlugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const ManifestPlugin     = require('./webpack-manifest')
const fs                 = require("fs");
const appDirectory       = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const config   = {
  watchOptions: {
    ignored: [/node_modules/, /opus/, /dist/, /app/, 'src/resources/**/*'],
  },
  entry       : {
    main  : ['./src/index.js'],
    vendor: './src/vendor.js'
  },
  output      : {
    path             : resolveApp('app'),
    filename         : 'js/[name].[hash].js',
    chunkFilename    : 'js/[name].[hash].js',
    sourceMapFilename: 'js/[name].[hash].map',
    publicPath       : ''
  },
  resolve     : {
    alias  : {
      'vue': 'vue/dist/vue.min.js', //解决 import vue from  指向的是dist/vue.common.js 而不是我们想要的dist/vue.js
    },
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  module      : {
    rules: [
      {
        test  : /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        //'style', 'css?importLoaders=1&-autoprefixer!postcss'
        use : ExtractTextPlugin.extract({
          fallback: "style-loader",
          use     : "css-loader",
        })
      },
      {
        test   : /\.scss$/,
        exclude: /node_modules/,
        use    : ExtractTextPlugin.extract({
          fallback: "style-loader",
          use     : ["css-loader", "sass-loader"],
        }),
      },
      {
        test  : /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        query : {
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test  : /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query : {
          name: '../images/[name].[ext]?[hash]',
        }
      }
    ]
  },
  plugins     : [
    new CleanWebpackPlugin(['app']),
    new CommonsChunkPlugin({
      name: ["main", 'vendor']
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new HtmlWebpackPlugin({
      template      : 'src/index.html',
      // chunks        : ['main', 'vendor'],
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      {context: 'src', from: 'images/**/*'},
      {context: 'src', from: '*.html'},
      {context: 'src', from: '*.ico'}
    ], {
      ignore        : [
        'index.html',
        '*.txt',
        '**/libs/**/*'
      ],
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: true
    }),
    new ManifestPlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  devServer   : {
    historyApiFallback: true,
    host              : '0.0.0.0',
    port              : '8001',
  }
}
module.exports = config
