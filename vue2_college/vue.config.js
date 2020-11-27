// vue.config.js

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

 module.exports = {
    // 基本路径
    publicPath: "./",
    // 构建时的输出目录
    outputDir: "dist",
    // 放置生成的静态资源目录
    assetsDir: "static",
    // 指定html输出路径
    indexPath: "index.html",
    // 设置语法检查
    lintOnSave: false,
    // 设置是否需要sourceMap
    productionSourceMap: false,
    // vuecli4 开启gzip压缩配置
    configureWebpack: {
      // plugins: [
      //       new CompressionWebpackPlugin({
      //         filename: '[path].gz[query]',   // 提示compression-webpack-plugin@3.0.0的话asset改为filename
      //     algorithm: 'gzip',
      //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      //     threshold: 10240,
      //     minRatio: 0.8
      //   }),
      // ],
      
      //警告 webpack 的性能提示
        performance: {
          hints:'warning',
          //入口起点的最大体积
          maxEntrypointSize: 50000000,
          //生成文件的最大体积
          maxAssetSize: 30000000,
          //只给出 js 文件的性能提示
          assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
          }
        }

    },

    // 第三方插件的选项
    pluginOptions: {}
}

