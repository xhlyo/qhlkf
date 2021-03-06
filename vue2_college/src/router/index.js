import Vue from 'vue'
import VueRouter from 'vue-router'
import { Dialog } from 'vant' // 弹出框
import store from '@/store/'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/login_password',
    name: 'login_password',
    component: () => import('@/views/login/login_password.vue'),
    meta: { requiresAuth: false }
  },
  // 一级路由渲染到根组件中的 router-view
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [ // 子路由渲染到父路由的 router-view 中
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/'),
        meta: { requiresAuth: false }
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/'),
        meta: { requiresAuth: false }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message/'),
        meta: { requiresAuth: true }
      },
      { // message 下的 组件
        path: '/keep/praise',
        name: 'mes_keep_praise',
        component: () => import('@/views/mes_own/keep_praise.vue'),
        meta: { requiresAuth: true }
      },
      { // message 下的 组件
        path: '/new/follow',
        name: 'mes_new_follow',
        component: () => import('@/views/mes_own/new_follow.vue'),
        meta: { requiresAuth: true }
      },
      { // message 下的 组件
        path: '/call/comment',
        name: 'mes_call_comment',
        component: () => import('@/views/mes_own/call_comment.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/'),
        meta: { requiresAuth: false }
      }
    ]
  },

  {
    path: '/send',
    name: 'send',
    component: () => import('@/views/layout/components/sendItem.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/'),
    meta: { requiresAuth: true }
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article/'), 
    // props 传参, 推荐
    // 将动态路由参数映射到组件的 props 中, 无论是访问还是维护性都很方便
    props: true,
    meta: { requiresAuth: true }
  },
  { // 一级路由 编辑资料
    path: '/user/profile',
    name: 'user-profile',
    component: () => import('@/views/user-profile'),
    meta: { requiresAuth: false }
  },
  { // 一级路由 广理图灵
    path: '/user/chat',
    name: 'user-chat',
    component: () => import('@/views/user-chat'),
    meta: { requiresAuth: true }
  },
  { // 我的文章
    path: '/my/article',
    name: 'my-article',
    component: () => import('@/views/my_fun/my_article.vue'),
    meta: { requiresAuth: true }
  },
  { // 我的关注
    path: '/my/follow',
    name: 'my-follow',
    component: () => import('@/views/my_fun/my_follow.vue'),
    meta: { requiresAuth: true }
  },
  { // 我的粉丝
    path: '/my/fans',
    name: 'my-fans',
    component: () => import('@/views/my_fun/my_fans.vue'),
    meta: { requiresAuth: true }
  },
  { // 我的所有赞
    path: '/my/praise',
    name: 'my-praise',
    component: () => import('@/views/my_fun/my_praise.vue'),
    meta: { requiresAuth: true }
  },

  { // 我的收藏
    path: '/my/keep',
    name: 'my-keep',
    component: () => import('@/views/my_fun/my_keep.vue'),
    meta: { requiresAuth: true }
  },
  { // 历史记录
    path: '/history',
    name: 'my-history',
    component: () => import('@/views/my_fun/my_history.vue'),
    meta: { requiresAuth: true }
  },
  { // 积分商城
    path: '/shop',
    name: 'my-shop',
    component: () => import('@/views/my_fun/my_shop.vue'),
    meta: { requiresAuth: true }
  },
  
]

const router = new VueRouter({
  routes
})

// to: 要访问的页面路由信息
// from: 来自哪个页面的路由信息
// next：放行的标记
router.beforeEach((to, from, next) => {
  // 判断页面是否需要登录才能访问  
  if (to.meta.requiresAuth) {
    // 如果已登录, 则直接通过
    if (store.state.user) {
      return next()
    }
    // 没有登录, 提示是否登录
    Dialog.confirm({
      title: '访问提示',
      message: '该功能需要登录才能访问, 确认登录吗'      
    }).then(() => { // 确认执行这里
      router.replace({
        name: 'login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })      
    }).catch(() => { // 取消执行这里
      // 取消了,中断路由导航
      next(false)
    })
  } else {
    // 不需要登录状态的页面, 直接过去
    next()
  }  
})

export default router
