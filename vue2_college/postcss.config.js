/** 
 * PostCSS的配置文件
 * PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具
 * 所以它的配置文件需要导出一个对象
 */ 

module.exports = {
    // 配置要使用的相关插件
    plugins: {
        // 自动添加浏览器厂商声明前缀,用来兼容不同浏览器
        // VueCLI 已经在内部默认配置了 autoprefixer
          autoprefixer: {
            /** 旧版(有警告) browsers: ['Android >= 4.0', 'iOS >= 8'],
             *  用来配置要兼容到的系统(浏览器)环境
             *  VueCLI 通过 项目中的 .browserslistrc 文件来兼容 环境信息 
             *  要么在  .browserslistrc配置 或 使用新版 overrideBrowserslist  */

             // 新版 overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8'], 
          },

          // 把 px 转为 rem 
          'postcss-pxtorem': {
            // 转换的根元素的基准值 
            // 正常情况下按照你的设计稿来  ⚠️这里是设计稿的1/10
            // 750 宽 的设计稿： 750 / 10 = 75
            // 375 宽 的设计稿： 375 / 10 = 37.5
            // Vant 组件库是基于 375 宽写的
            // 移动端页面一般都是以 iphone 6/7/8 为原型设计的
            // Vant 组件库是基于逻辑像素 375 写的
            // 设计稿都是基于物理像素 750 宽设计的
            // 所以如果设置成 75，那么我们就可以在设计稿中测量多少就写多少，但是 Vant 的样式就会变得很小，小了一半
            // 所以我们还必须设置成 37.5，但是在测量我们的设计稿的时候我们必须让你的测量单位 / 2 
            rootValue: 37.5,    
            // 需要转换的 CSS 属性, * 是所有属性都要转换
            propList: ['*'],
            mediaQuery: true
          },
    },
}