<template>
  <div class="article-container">
    <van-nav-bar
      class="app-nav-bar"
      title="查看文章"
      left-arrow
      @click-left="$router.back()"
    />
  </div>  
</template>

<script>
export default {
  name: 'My_article',
  components: {}, 
  props: {}, 
  data () {
    return {
        
    }
  }, 
  computed: {}, 
  watch: {}, 
  created () {}, 
  mounted () {}, 
  methods: {}, 
}
</script>

<style scoped lang="less">

</style>