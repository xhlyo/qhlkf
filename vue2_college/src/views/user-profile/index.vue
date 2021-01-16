<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- <input
      type="file"
      hidden
    > -->
    <van-cell title="昵称" is-link value="鸿亮">
      <van-image
        width="30"
        height="30"
        round
        fit="cover"
        src="../my/banner.jpeg"
      />        
    </van-cell>
    <van-cell title="头像" is-link></van-cell>
    <van-cell title="签名" is-link value="不告诉你"></van-cell>
    <van-cell title="性别" is-link value="男"></van-cell>
    <van-cell title="生日" is-link value="1998-02-14"></van-cell>
    <van-cell title="学校" is-link value="广州理工学院"></van-cell>
    <van-cell title="院系" is-link value="计算机科学与工程学院"></van-cell>
    <van-cell title="专业" is-link value="计算机科学与技术"></van-cell>
    <van-cell title="年级" is-link value="2018"></van-cell>
    <van-cell title="班级" is-link value="18计科1班"></van-cell>
    <!-- / 导航栏 -->    
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  components: {
      
  },
  props: {},
  data () {
    return {
          
    }
  },
  computed: {
      
  },
  watch: {
      
  },
  created () {
      
  },
  mounted () {
      
  },
  methods: {
      
  }
}
</script>

<style scoped lang="less">
.van-popup {
  background-color: #f5f7f9;
}
.update-photo-popup {
  background-color: #000;
}
</style>