# hlkf  
小鸿亮的开发    2020.11.22  6:04

#### 实战项目
[**vue2_college**](./vue2_college/)  

1. 安装了Vant (Vue移动端组件库)
2. 安装了amfe-flexible(rem适配) 与 postcss-pxtorem (将px 转为 rem)
3. 在项目根目录有postcss配置文件 postcss.config.js 
4. 阿里巴巴矢量图标库 在 styles 的 icon.less  可以引用  (是黑白的 暂时未弄好彩色和位置)
5. 路由页面已经配置 在views 下  

6. 注册登录已经基本实现布局与功能  Vant可以显示组件的使用 和配置验证规则  验证码倒计时也完成了
7. **未解决:** 发送验证码的接口 和 本地存储 手机号的接口过期   
8. 忽略了npm run build 后超过推荐打包文件大小的警告 只给出 js 文件的性能提示 
9. 当前进度: **登录注册 功能  下面导航栏"我的" 72% =======**
10.  **首页 功能  35% =======**   现在 接口很缺
11.  问答和消息页面写了15% 剩下都是逻辑和文章动态内容          **vue还没实现未登录自动跳转**
12.  首页 频道模块  编辑频道完成
13.  增加了lodash第三方库 进行函数防抖