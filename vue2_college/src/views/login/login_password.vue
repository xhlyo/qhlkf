<template>
  <div class="loginpasswd-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="用户名密码登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- / 导航栏 -->

    <!-- 登录表单 --> 
    <van-form  
      :show-error="false"
      :show-error-message="false"
      @submit="onRegist"
      @failed="onFailed"
    >
       <van-field name="用户名" label="用户名" placeholder="请输入用户名" v-model="loginpasswd.username" :rules="LoginPasswdRules.username"/>
       <van-field type="password" name="密码" label="密码" placeholder="请输入密码" v-model="loginpasswd.password" :rules="LoginPasswdRules.password"/>
       <div style="margin: 16px;">
        <van-button class="loginpasswd-btn" block type="info" native-type="submit">登录</van-button>
        <div class="loginphone-btn">
          <van-button to="/login">手机验证码登录</van-button>
        </div>
       </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login_password',
  components: {},
  props: {},
  data () {
    return {
      loginpasswd: {
        username: '', // 用户名
        password: ''  // 密码
      },
      LoginPasswdRules: {
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
.loginpasswd-container {
  .loginpasswd-btn {
    background-color: #6db4fb;   // 按钮颜色  去掉边框(有颜色)
    border: none;    
  }
  .loginphone-btn {
    text-align: center;
  }
}
</style>