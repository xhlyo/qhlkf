<template>
  <div class="search-suggestion">
    <van-cell
      icon="search"
      v-for="(str , index) in suggestions"
      :key="index"
      @click="$emit('search',str)"
    > 
      <div slot="title" v-html="highlight(str)"></div>
    </van-cell>
  </div>  
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
import { debounce } from 'lodash'

// 函数防抖

export default {
 name: 'SearchSuggestion',
  components: {},
  props: {    //  声明的组件
    searchText: {
      type: String,
      required: true,   // true 表示这个数据是 必须的 
    }
  },
  data () {
    return {    
      suggestions: [],  // 联想建议数据列表
      htmlStr: 'Hello <span style="color: red">World</span>' // 搜索关键词高亮
    }
  },
  computed: {},
  // watch 详细的使用语法参考:  https://cn.vuejs.org/v2/api/#watch
  watch: {
    // 属性名：要监视的数据的名称 (监视数据的变化)
    // searchText () {
    //   console.log('hello ')
    // }

    // 这才是监视的完整写法
    searchText: {
      // 当数据发生变化则会执行 handler 处理函数
      handler: debounce (async function () {
        const { data } = await getSearchSuggestions(this.searchText) 
        this.suggestions = data.data.options 
      }, 200),  // 200 ms
      // async handler () {
      // // 找到数据接口
      // // 请求获取数据      
      // // 模板绑定展示
      //   const { data } = await getSearchSuggestions(this.searchText) 
      //   this.suggestions = data.data.options 
      // }, // 定制功能  初始化的时候直接调用一下
      immediate: true  // 该回调将会在侦听开始之后被立即调用
    }
  },
  created () {},
  mounted () {},
  methods: {
    highlight (str) {
      // str.replace(正则表达式,`${高亮字符}`) 搜索 a 就高亮 a
      // a /a/gi、vue /vue/gi
      // 正则表达式 /中间的内容/ 都会当作正则匹配模式字符来对待
      // 错误的写法： /this.searchText/gi
      // RegExp 是正则表达式的构造函数
      //  参数1：字符串
      //  参数2：匹配模式
      //  返回值：正则对象  
      return str.replace(
        new RegExp(this.searchText, 'gi'),
        `<span style="color: red">${this.searchText}</span>`
      )

    }
  }
}
</script>

<style scoped lang="less">
    
</style>