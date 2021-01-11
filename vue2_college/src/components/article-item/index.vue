<template>
  <!-- 首页 文章列表项 -->
  <van-cell
    class="article-item"
    :to="{
      name: 'article',
      params: {
        articleId: article.art_id
      }
    } "
  >
    <div slot="title" class="title  van-multi-ellipsis--l3">{{ article.title }}</div>
    <div slot="label">
      <div
        v-if="article.cover.type === 3"
        class="cover-wrap"
      >
        <div
          class="cover-wrap-item"
          v-for="(img, index) in article.cover.images"
          :key="index"
        >
          <van-image
            class="cover-image"
            fit="cover"
            :src="img"
          />
        </div>
      </div>
      <div class="label-wrap">
        <span>{{article.aut_name}}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate | relativeTime }}</span>
      </div>
    </div>
    <!-- 默认插槽的名字叫 default , 可以省略 -->
    <van-image
      v-if="article.cover.type === 1"
      class="right-cover"
      fit="cover"
      :src="article.cover.images[0]"
    />
  </van-cell>
</template>

<script>
  // 在组件中获取动态路由参数:
  //   方式一: this.$route.params.articleId
  //   方式二: props 传参, 推荐
  //   this.articleId
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
   }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
//  公共组件
</script>

<style scoped lang="less">
.article-item {
  .title {
    font-size: 16px;
    color: #3a3a3a;
  }
  /deep/ .van-cell__value {
    flex: unset;   // 图片的 flex 不生效 让文字平分区域
    width: 116px;
    height: 73px;
    margin-left: 12px;
  }
  .right-cover {
    width: 116px;
    height: 73px;
  }

  .cover-wrap {
    padding: 15px 0;   // 上下 15 左右为 0
    display: flex;
    .cover-wrap-item {
      flex: 1;
      height: 73px;
      &:not(:last-child) {  // 排除掉最后一个元素的 cover-item
        padding-right: 4px;    
      }
      .cover-item {
        width: 100%;
        height: 73px;
      }
    }
  }
  //  底部信息
  .label-wrap {
    font-size: 11px;
    color: #b4b4b4;
  }
  .label-wrap span {  
    margin-right: 12px;
  }
}
</style>