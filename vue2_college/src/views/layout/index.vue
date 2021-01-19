<template>
  <div class="layout-container">
    <!-- layout 的子路由出口, 或者说是二级路由 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- /子路由出口 -->

    <!-- 底部导航栏 Vant组件库的tab组件 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.$store.commit('addCachePage', 'LayoutIndex') // 渲染之后 再次给他缓存起来    
  },
  methods: {}
}
</script>

<style scoped lang="less">
/deep/ .van-tabbar-item__text {
  font-size: 16px;    // 设置下边导航栏的字体大小
}
</style>
