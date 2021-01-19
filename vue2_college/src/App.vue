<template>
  <div id="app">
    <!-- 一级路由的出口, 路由表中所有的顶层路由都是一级路由
      因为 router-view 是一级路由出口
      keep-alive 仅对该路由出口渲染的组件有效  Gua!州理工 路由出口 动态组件 
    -->
    <keep-alive :include="cachePages">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['cachePages']) // 从 /src/store/index.js 里面拿
  }
}
</script>

<style lang="less">
</style>
