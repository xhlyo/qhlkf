<template>
  <div class="article-list" ref="article-list">
    <!--
      List 组件通过 loading 和 finished 两个变量控制加载状态 ,
      当组件初始化或滚动到到底部时, 会触发 load 事件并将 loading 设置成 true, 此时可以发起异步操作并更新数据, 数据更新完毕后, 将 loading 设置成 false 即可。
      若数据已全部加载完毕, 则直接将 finished 设置成 true 即可 
      - `load 事件` :
      + List 初始化后会触发一次 load 事件, 用于加载第一屏的数据 
      + 如果一次请求加载的数据条数较少, 导致列表内容无法铺满当前屏幕, List 会继续触发 load 事件, 直到内容铺满屏幕或数据全部加载完成。
      - `loading 属性`: 控制加载中的 loading 状态
      + 非加载中, loading 为 false, 此时会根据列表滚动位置判断是否触发 load 事件 (列表内容不足一屏幕时 , 会直接触发)
      + 加载中, loading 为 true, 表示正在发送异步请求, 此时不会触发 load 事件
      - `finished 属性`: 控制加载结束的状态
      + 在每次请求完毕后, 需要手动将 loading 设置为 false, 表示本次加载结束
      + 所有数据加载结束, finished 为 true, 此时不会触发 load 事件
     -->
    <van-pull-refresh
      v-model="isRefreshLoading"
      :success-text="refreshSuccessText"
      :success-duration="1500"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <article-item
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
      <!--<van-cell
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
      /> -->
      </van-list>
    </van-pull-refresh>  
  </div>
</template>
  
<script>
import { getArticles } from '@/api/article'
import ArticleItem from '@/components/article-item' // 引入公共组件
import { debounce } from 'lodash' // 防抖处理 防止scrollTop 滚动条 滑动频繁

export default {
  name: 'ArticleList',
  components: {
    ArticleItem      // 注册组件
  },
  props: {
    channel: {
      type: Object ,
      require: true ,
    }
  },
  data () {
    return {
      articles: [], // 数据列表
      loading: false, // 控制加载中的 loading 状态
      finished: false, // 控制加载结束的状态, 当加载结束, 不再触发加载更多
      timestamp: null, // 获取下一页数据的时间戳
      isRefreshLoading: false, // 下拉刷新的 loading 状态
      refreshSuccessText: '', // 下拉刷新成功的提示文本
      scrollTop: 0 // 记录 列表滚动到顶部的距离       
    }
  },
  computed: {},
  watch: {},
  created () { // 只执行一次 因为你缓存了
  },
  mounted () { // 监听滚动事件
    const articleList = this.$refs['article-list']
    articleList.onscroll = debounce(() => { // articleList 注册滚动事件 
      this.scrollTop = articleList.scrollTop
    }, 50) // 50ms
  },
  activated () { // 从缓存中被激活 把记录的到顶部的距离重新设置回去(操作的是 DOM ) 
    this.$refs['article-list'].scrollTop = this.scrollTop    
  },
  methods: {
    async onLoad () {
      // 1. 请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道 ID
        timestamp: Date.now(), 
        // 为了大家方便学习, 只要你传递不同的时间戳就一定给你返回不一样的数据, 而且数据不为空
        with_top: 1
      })   // 里面传参数 参数传什么 看文档
      // 2. 把数据放到 list 数组中
      const { results } = data.data
      this.articles.push(...results)
      // 3. 设置本次加载状态结束, 它才可以判断是否需要加载下一次, 否则就会永远的停在这里
      this.loading = false
      // 4. 数据全部加载完成
       if (results.length) {
        // 更新获取下一页数据的页码
        this.timestamp = data.data.pre_timestamp
      } else {
        // 没有数据了, 把加载状态设置结束, 不再触发加载更多
        this.finished = true
      }
    },
    async onRefresh () {
      // 下拉刷新，组件自己就会展示 loading 状态
      // 1. 请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道 ID
        timestamp: Date.now(), 
        // 为了大家方便学习，只要你传递不同的时间戳就一定给你返回不一样的数据，而且数据不为空
        with_top: 1
      })

      // 2. 把数据放到数据列表中 (往顶部追加)
      const { results } = data.data
      this.articles.unshift(...results)

      // 3. 关闭刷新的状态 loading
      this.isRefreshLoading = false

      this.refreshSuccessText = `更新了${results.length}条数据`
    }
  }
}
</script>

<style scoped lang="less">
.article-list {
  position: fixed;
  left: 0;   // 左右撑开
  right: 0;
  bottom: 50px;  // 底部边距
  top: 90px;     // 顶部边距
  overflow-y: auto;
}
</style>