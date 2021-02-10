/**
 * Cookies 封装模块
 */
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

const day = this.$cookies.config('30d')  // 30天过期

this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX",day)   // 三个参数  第二个参数要对应后端的 cookies值

export default new VueCookies