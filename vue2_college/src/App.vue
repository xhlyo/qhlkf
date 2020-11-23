<template>
  <div id="app">
      <h1>Gua!州理工</h1>
      <router-view/>   <!-- 路由出口 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box{
  width: 200px;
  height: 100px;
  background-color: rebeccapurple;
}
</style>
