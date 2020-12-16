<template>
  <div class="register-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="注册"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- / 导航栏 -->

    <!-- 注册表单 --> 
    <van-form  
      :show-error="false"
      :show-error-message="false"
      @submit="onRegist"
      @failed="onFailed"
    >
       <van-field name="用户名" label="用户名" placeholder="请输入用户名" v-model="regist.username" :rules="RegistRules.username"/>
       <van-field type="password" name="密码" label="密码" placeholder="请输入密码" v-model="regist.password" :rules="RegistRules.password"/>
       <div style="margin: 16px;">
        <van-button class="regist-btn" block type="info" native-type="submit">提交</van-button>
       </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterIndex',
  components: {},
  props: {},
  data () {
    return {
      regist: {
        username: '', // 用户名
        password: ''  // 密码
      },
      RegistRules: {
        username: [
          { required: true, message: '用户名不能为空'}
        ],
        password: [
          { required: true, message: '密码不能为空'}
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onRegist() {

    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: 'top' // 防止手机键盘太高看不见提示消息
        })
      }
    },
    
  }
}
</script>

<style lang="less">
.register-container {
  .regist-btn {
    background-color: #6db4fb;   // 按钮颜色  去掉边框(有颜色)
    border: none;    
  }
}

</style>