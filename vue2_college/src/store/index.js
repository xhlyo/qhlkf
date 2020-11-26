import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('user'),
    //  getItem封装   当前登录用户的登录状态(token等数据)  
    //  user: JSON.parse(window.localStorage.getItem('user')) 
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 为了防止页面刷新数据丢失,我们还需要把数据放到本地存储中,这里仅仅是为了持久化数据
      // setItem(USER_KEY, state.user)
      window.localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
  actions: {
  },
  modules: {
  }
})
