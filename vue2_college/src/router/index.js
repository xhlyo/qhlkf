import Vue from 'vue'
import VueRouter from 'vue-router'

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
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/'),
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
        meta: { requiresAuth: false }
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
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/'),
    meta: { requiresAuth: false }
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article/'), 
    // props 传参, 推荐
    // 将动态路由参数映射到组件的 props 中, 无论是访问还是维护性都很方便
    props: true,
    meta: { requiresAuth: false }
  },
  { // 一级路由
    path: '/user/profile',
    name: 'user-profile',
    component: () => import('@/views/user-profile'),
    meta: { requiresAuth: false }
  },

]

const router = new VueRouter({
  routes
})

export default router
