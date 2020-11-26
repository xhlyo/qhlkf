<template>
  <div class="my-container">
    <div class="not-login">
        <div @click="$router.push({
          name: 'login',
          query: {
            redirect: '/my'
          }
        })">
        </div>
        <div class="text">登录 / 注册</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'MyIndex',
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
.my-container {
  .not-login {
    height: 180px;
    // background: url("./banner.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mobile {
      width: 66px;
      height: 66px;
    }
    .text {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>