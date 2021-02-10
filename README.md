# hlkf  
小鸿亮的开发    2021.2.10 最新 

#### 实战项目
[**vue2_college**](./vue2_college/)  

1. 安装了Vant (Vue移动端组件库)

2. 安装了amfe-flexible(rem适配) 与 postcss-pxtorem (将px 转为 rem)

3. 在项目根目录有postcss配置文件   postcss.config.js 

4. 阿里巴巴矢量图标库 在 styles 的 icon.less  可以引用  

   (是黑白的 暂时未弄好彩色和位置)

5. 路由页面已经配置 在views 下  

6. 注册登录已经基本实现布局与功能  

   Vant可以显示组件的使用 和 配置验证规则  

   验证码倒计时也完成了

7. **未解决:**  1. 发送验证码的接口 和 本地存储 

   2.手机号的接口过期   

8. 忽略了npm run build 后超过推荐打包文件大小的警告 

   只给出 js 文件的性能提示 

9. **首页 功能  50% =======**   现在 接口很缺

10. 问答和消息页面写了15% 剩下都是逻辑和文章动态内容   

    **vue还没实现未登录自动跳转**

11. 首页  频道模块  编辑频道完成

12. 增加了lodash第三方库 进行函数防抖   

13. 增加了本地删除历史记录的功能

14. 1.11  安装了json-bigint第三方包  解决了大整数问题 可以查看文章详情 

15. **可以预览图片和登录后关注用户了** 

    ( 但是刷新就 恢复原状 估计是接口问题或者是数据没有持久化 
    这个坑需要解决)       2021.1.12 1:02

16. **文章收藏和点赞功能** 完成    2021.1.15

    **文章评论 完成 **   **但接口不是我们的**  

17. **编辑个人资料  头像70% ---**   2021.1.18  

    头像裁切库 cropperjs 引入

18. **广理图灵 ------**   2021.1.19   安装了socket.io-client   

    跨域问题没有解决 

19. **组件缓存 功能优化 ---** ok 路由拦截未登录不能访问某些页面
20. **项目打包 √ ---**  /public/mainfest.json 出现错误是因为写了注释  可以忽略 是为了HBuilder打包成app用的
      
重写   2021.2.2  删除一些路由页面 而配置在同一页面里面

增加了 cookies.js 