const merge = require('webpack-merge')
const minifyJs = require('babel-minify-webpack-plugin')
const commonConfig = require('./webpack.common.js')

let config = merge(commonConfig, {
  plugins: [new minifyJs()],
})

module.exports = config
