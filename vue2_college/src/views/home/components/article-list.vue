<template>
  <div class="article-list">
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
    <!-- <van-cell
    v-for="(article, index) in articles"
    :key="index"
    :title="article.title"
    /> -->
    </van-list>
  </div>
</template>
  
<script>
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
        type: Object,
        require: true
    }
  },
  data () {
    return {
      list: [], // 数据列表
      loading: false, // 控制加载中的 loading 状态
      finished: false, // 控制加载结束的状态，当加载结束，不再触发加载更多
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // async onLoad () {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);       
    // }
  }
}
</script>

<style scoped lang="less">
</style>