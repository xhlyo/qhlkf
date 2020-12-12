<template>
  <div class="register-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="注册"
      left-arrow
      @click-left="$router.back()"
    />  
  </div>
</template>

<script>
export default {
  name: 'RegisterIndex'
}
</script>

<style lang="less">
</style>