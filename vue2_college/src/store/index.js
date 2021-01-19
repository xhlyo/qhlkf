import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const USER_KEY = 'Guali-user'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY),
    //  getItem封装   当前登录用户的登录状态(token等数据)  
    //  user: JSON.parse(window.localStorage.getItem('user'))
    cachePages: ['LayoutIndex'] 
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // setItem封装 为了防止页面刷新数据丢失,我们还需要把数据放到本地存储中,这里仅仅是为了持久化数据
      setItem(USER_KEY, state.user)
      // window.localStorage.setItem('user', JSON.stringify(state.user))
    },

    // 添加缓存页面
    addCachePage (state, pageName) {
      if (!state.cachePages.includes(pageName)) { // 如果不包含 pageName了
        state.cachePages.push(pageName)
      }
    },
    // 移除缓存页面 
    removeCachePage (state, pageName) {
      const index = state.cachePages.indexOf(pageName)
      if (index !== -1) { // 如果有 pageName了就 splice 移除掉 
        state.cachePages.splice(index, 1)        
      }      
    }
  },
  actions: {
  },
  modules: {
  }
})
