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
      <article-list :channel="channel" />
      <!-- /文章列表 -->
      </van-tab>
      <!-- 汉堡按钮定位把列表最后的位置给挡住了，解决办法的就是在这里添加一个占位元素 -->
      <div
        slot="nav-right"
        class="wap-nav-placeholder"
      ></div>
      <div
        slot="nav-right"
        @click="isChannelEditShow = true"
        class="wap-nav-wrap"
      >
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <!-- /文章频道列表 -->

    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      closeable
      close-icon-position="top-left"
      get-container="body"
      style="height: 100%"
    >
      <!--
        模板中的 $event 表示事件参数
       -->
      <channel-edit 
        :userChannels="channels"
        :active="active"
        @close="isChannelEditShow = false"
        @update-active = "active = $event"
      />
    </van-popup>
  </div>

</template>
  
<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'  // 引入封装组件: 文章列表
import ChannelEdit from './components/channel-edit'  // 引入封装组件: 频道编辑

export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
    ChannelEdit,
  },
  props: {},
  data () {
    return {
      active: 0, // 控制被激活的标签   
      channels: [], // 频道列表
      isChannelEditShow: false // 控制编辑频道的显示状态      
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
    },

    // onUpdateActive (index) {
    //   this.active = index 
    // }
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
    /deep/ .van-tabs__line {  //  标签页下面
      bottom: 20px;  // 高度
      width: 15px !important;
      height: 3px;
      background: #3296fa;
    }
  }

  .wap-nav-placeholder {
    width: 33px;
    flex-shrink: 0;  // 其他元素平分所有空间
  }
  //  汉堡按钮
  .wap-nav-wrap {
    position: fixed;
    right: 0;   // 固定在右侧了
    width: 33px;
    height: 43px;
    background-color: #fff;
    display: flex;   // (display justify align-items) 里面内容水平垂直居中
    justify-content: center;
    align-items: center;
    opacity: .9;   // 透明度
    .van-icon {         // 图标
      padding-bottom: 2px;
      font-size: 24px;
    } // &:before 伪元素 引入条的图片 line.png
    &:before {
      content: '';
      width: 1px;
      background: url("./line.png") no-repeat;
      background-size: contain;
      position: absolute; // 绝对定位
      left: 0;
      top: 0;
      bottom: 0;
    }
  }

}
</style>