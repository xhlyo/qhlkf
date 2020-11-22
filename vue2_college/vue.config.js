// vue.config.js
module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '广州理工学院校园社交平台'
          return args
        })
    }
  }