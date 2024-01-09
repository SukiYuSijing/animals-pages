const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')
module.exports = merge(base, {
    mode: 'production', // 生产模式
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下
        filename: '[name].[hash:8].js', // 打包的文件名，
        clean: true
    },
})