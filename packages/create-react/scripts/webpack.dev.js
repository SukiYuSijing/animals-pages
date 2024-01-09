const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const BASE_PORT = require('./utils/constant');
const portfinder = require('portfinder');
const path = require('path');
const devConfig = {
  mode: 'development', // 开发模式
  devServer: {
    open: ['/home.html'],
    port: BASE_PORT,
    compress: false,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
};

module.exports = async function () {
  try {
    // 端口被占用时候 portfinder.getPortPromise 返回一个新的端口(往上叠加)
    const port = await portfinder.getPortPromise();
    devConfig.devServer.port = port;
    return merge(base, devConfig);
  } catch (e) {
    throw new Error(e);
  }
};
