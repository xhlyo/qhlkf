<template>
    <van-cell
      class="article-item"
    >
      <div slot="title">{{article.title}}</div>
      <div slot="label">
        <div
          v-if="article.cover.type === 3" 
          class="cover-wrap"
        >
          <div 
            class="cover-wrap-item"
          >
            <van-image 
              width="116"
              height="73"
              fit="cover"
              v-for="(img , index) in article.cover.images"
              :key="index"
              :src="img"
            />
          </div>
        </div>
        <div class="label-wrap">
          <span>{{article.aut_name}}</span>
          <span>{{ article.comm_count }}评论</span>
          <span>{{ article.pubdate }}</span>
        </div>
      </div>
      <!-- 默认插槽的名字叫 default , 可以省略 -->
      <van-image
        v-if="article.cover.type === 1"
        width="116"
        height="73"
        fit="cover"
        :src="article.cover.images[0]" 
      />
    </van-cell>
</template>

<script>
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

</style>