<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar">
      <van-button
        slot="title"
        class="search-btn"
        icon="search"
        type="info"
        round
        size="small"
        to="/search"
      >搜索</van-button>
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 文章频道列表 -->
    <!--
      标签页组件有一个功能，只有你第1次查看标签页的时候才会渲染里面的内容
     -->
    <van-tabs class="channel-tabs" v-model="active">
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
      <!-- 文章列表 -->
      
      <!-- /文章列表 -->
      </van-tab>
    </van-tabs>
    <!-- /文章频道列表 -->
  </div>

</template>
  
<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'

export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
  },
  props: {},
  data () {
    return {
      active: 0, // 控制被激活的标签   
      channels: [], // 频道列表
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      // 请求获取频道数据 
      const { data } = await getUserChannels()
      // console.log(data)
      this.channels = data.data.channels
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: none;
  }  // 搜索按钮 父元素没那么大 没有显示完全 .search-btn 按钮宽度
    //  通过 改变 .van-nav-bar__title 样式实现完全显示宽度
  .search-btn {
    width: 277px;
    height: 32px;  
    background: #5babfb;
    border: none;
    .van-icon {
      font-size: 16px;  // 里面的图标大小
    }
    .van-button__text {
      font-size: 14px;  
    }
  }

  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {
      bottom: 20px;
      width: 15px !important;
      height: 3px;
      background: #3296fa;
    }
  }

}

</style>