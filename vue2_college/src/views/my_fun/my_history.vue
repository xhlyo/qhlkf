<template>
  <div class="history-container">
    <van-nav-bar
      class="app-nav-bar"
      title="历史记录"
      left-arrow
      @click-left="$router.back()"
    />
  </div>  
</template>

<script>
export default {
  name: 'My_history',
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