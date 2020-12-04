const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const X_VERSION = require('./utils/git_repo_info');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// Ken 2020-03-01 15:11 prevent from crash by websocket proxy error over Node 10
if (process.env.NODE_ENV === 'development') {
  process.on('uncaughtException', function (err) {
    console.error(err.stack);
  });
}

module.exports = {
  lintOnSave: true,

  devServer: {
    // key: fs.readFileSync('./ssl/dev.nextop.cn+5-key.pem'),
    // cert: fs.readFileSync('./ssl/dev.nextop.cn+5.pem'),
    // proxy: {
    //   '/rest': {
    //     // target: 'http://uat-lev-admin.nextop.asia:8081',
    //     target: 'http://dev-noldor.nextop.cn:8081',
    //     changeOrigin: true,
    //     ws: true,
    //   },
    // },
  },

  configureWebpack: () => {
    return {
      devtool: 'source-map',
      plugins: [
        new LodashModuleReplacementPlugin({
          shorthands: true,
          cloning: true,
          currying: true,
          caching: true,
          collections: true,
          exotics: true,
          guards: true,
          metadata: true,
          deburring: true,
          unicode: true,
          chaining: true,
          memoizing: true,
          coercions: true,
          flattening: true,
          paths: true,
          placeholders: true,
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({ X_VERSION: `"${X_VERSION}"` }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|ja|en-au/),
      ],
    };
  },

  chainWebpack: config => {
    config.resolve.alias.set('@base', resolve('src/components/base'));
    config.module
      .rule('js')
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        plugins: ['lodash'],
      })
      .end();
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  //
  // transpileDependencies: [
  //   'vue-echarts',
  //   'resize-detector'
  // ],
};
