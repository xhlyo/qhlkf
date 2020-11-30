<template>
  <div class="qa-container">
    <van-tabs v-model="active">
    <van-tab title="热门">
      <div class="trends">
        <van-cell-group>
          <van-cell title="单元格" value="内容" />
          <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
      </div>
    </van-tab>
    <van-tab title="关注">
    内容 2
    </van-tab>
    <van-tab title="资源分享">
    内容 3
    </van-tab>
    <van-tab title="不知道">
    内容 4
    </van-tab>
</van-tabs>
  </div>
</template>
  
<script>
export default {
  name: 'QaIndex',
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
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
</style>