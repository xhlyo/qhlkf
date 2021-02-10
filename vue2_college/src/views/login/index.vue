<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <!-- <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    /> -->

    <van-tabs class="channel-tabs" >
      <van-tab title="登录">
      <!-- 登录表单 -->
      <van-form 
        :show-error="false"
        :show-error-message="false"
        validate-first
        ref="login-form"
        @submit="onLogin"
        @failed="onFailed"
      >
      <div class="imageBox">
        <img src="./normal.png" alt="" class="active">
        <img src="./greet.png" alt="">
        <img src="./blind.png" alt="">
        <img src="" alt="">
      </div>
        <van-field
          v-model="user.mobile"
          icon-prefix="Guali"
          left-icon="shouji"
          center
          placeholder="请输入手机号"
          name="mobile"
          :rules="formRules.mobile"
        />  
        <van-field
          v-model="user.code"
          clearable
          icon-prefix="Guali"
          left-icon="yanzhengma"
          center
          placeholder="请输入验证码" 
          name="code"
          :rules="formRules.code">
          <template #button>
            <van-count-down
              v-if="isCountDownShow"
              :time="1000 * 60"
              format="ss s"
              @finish="isCountDownShow = false"
            />
            <van-button 
              v-else
              class="send-btn" 
              size="mini" 
              round 
              :loading="isSendSmsLoading"
              @click.prevent="onSendSms"
            >发送验证码</van-button>
          </template>
        </van-field>
        <div class="login-btn-wrap">
          <van-button class="login-btn" type="info" block @click="onLogin">登录</van-button>
        </div>
        <div class="other_login">
          <div class="other_text">
            <van-cell title="其他登录方式" size="15px" />
          </div>
          <van-button to="/login_password">用户名密码登录</van-button>
        </div>
      </van-form>
      <!-- / 登录表单 -->
      </van-tab>

      <van-tab title="注册">
      <!-- 注册表单 -->
        <van-form  
          :show-error="false"
          :show-error-message="false"
          @submit="onRegist"
          @failed="onFailed"
        >
        <van-field name="用户名" label="用户名" placeholder="请输入用户名" v-model="regist.username" :rules="RegistRules.username"/>
        <van-field type="password" name="密码" label="密码" placeholder="请输入密码" v-model="regist.password" :rules="RegistRules.password"/>
        <van-field type="password" name="确认密码" label="确认密码" placeholder="确认密码" v-model="regist.t_password" :rules="RegistRules.t_password"/>  
        <van-field type="txts" name="手机号码" label="手机号码" placeholder="请输入手机号码" v-model="regist.phone" :rules="RegistRules.phone"/>  
          
          <div style="margin: 16px;">
            <van-button class="regist-btn" block type="info" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </van-tab>
      <!-- / 注册表单 -->
    </van-tabs> 
    <!-- / 导航栏 -->
    <!--
      基于 Vant 的表单验证：
      1、使用 van-form 组件包裹所有的表单项 van-field
      2、给 van-form 绑定 submit 事件
         当表单提交的时候会触发 submit 事件
         提示：只有表单验证通过，它才会调用 submit
      3、使用 Field 的rules属性定义校验规则
     -->   

    <!-- / 多种登录方式 还没有写 我是傻x -->  
  </div>
</template>

<script>
import { login , sendSms , regist } from '@/api/user'

export default {
    name: 'LoginIndex',
    components: {},
    props: {},
    data () {
    return {
      user: {
        mobile: '17090086870', // 手机号
        code: '246810' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' },
          // 1开头 第2位:3或5或7或9  后面9位 
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      },
      isCountDownShow: false, // 控制倒计时和发送按钮的显示状态
      isSendSmsLoading: false, // 发送验证码按钮的 loading 状态
      regist: {
        username: '', // 用户名
        password: '',  // 密码
        phone: ''
      },
      RegistRules: {
        username: [
          { required: true, message: '用户名不能为空'}
        ],
        password: [
          { required: true, message: '密码不能为空'}
        ],
        t_password:[
          { required: true, message: '请确认密码'},
          

        ],
        phone: [
          { required:true,message: '电话号码不能为空'},
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // Toast.loading({
      this.$toast.loading({
        message: '登录中...', // 提示文本
        forbidClick: true, // 禁止背景点击  其他内容不许点击
        duration: 0 // 展示时长(ms), 值为 0 时, toast 不会消失
      })
      // 1. 找到数据接口
      // 2. 封装请求方法
      // 3. 请求调用登录
      try {
        const { data } = await login(this.user)
        // 4. 处理响应结果
        console.log(data)
        this.$toast.success('登录成功')

        // 将后端返回的用户登录状态(token等数据)放到 Vuex 容器中
        this.$store.commit('setUser', data.data)

        // 清除 layout 的缓存, 让它重新渲染
        this.$store.commit('removeCachePage', 'LayoutIndex')        
        
        // 登录成功, 跳转回原来页面
        // this.$router.back() // 有缺陷
        this.$router.push(this.$route.query.redirect || '/') // 默认有就跳转到默认路径 没有就跳转首页

      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
    },
    async onRegist () {
      try {
        const { data } = await regist(this.regist)
        console.log(data)
        this.$toast.success('注册成功')
        this.$router.push(this.$route.query.redirect || '/') // 默认有就跳转到默认路径 没有就跳转首页
      } catch (err) {
        console.log(err)
        this.$toast.fail('注册失败')
      }
      // let registerInfo = {
      //   username:this.regist.username,
      //   password:this.regist.password,
      //   phone:this.regist.phone
      // };
      // this.$api.regist(registerInfo).then((result) => {
      //   console.log(result)
      //   this.$toast.success('注册成功')
      // }).catch((err) => {
      //   console.log(err)
      //   this.$toast.fail('注册失败')
      // });

      // const that = this
      // // 校验成功向后端发送请求
      // this.axios.post("http://localhost:88/api/consumer/register",{
      //   username:this.regist.username,
      //   password:this.regist.password,
      //   phone:this.regist.phone

      // }).then(function(resp){
      //     // console.log(resp.data.code)
      //     if(resp.data.code===1){
      //       console.log(resp.data.code)
      //       // this.$router.push(this.$route.query.redirect || '/') // 默认有就跳转到默认路径 没有就跳转首页
      //       that.$router.push('/')
      //     }
      // }) .catch(function(resp){
			// 		console.log(resp);
      //   });
        
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: 'top' // 防止手机键盘太高看不见提示消息
        })
      }
    },

    /* 校验手机号码
       验证通过 , 请求发送验证码 -> 用户接收短信 -> 输入验证码 -> 请求登录 
       短信发出去了, 隐藏发送按钮 , 显示倒计时
       倒计时结束 -> 隐藏倒计时, 显示发送按钮(监视倒计时的 finish 事件处理) */

    async onSendSms () {
      try {
        // 校验手机号码
        await this.$refs['login-form'].validate('mobile')
        // 验证通过 , 请求发送验证码
        this.isSendSmsLoading = true // 展示按钮的 loading 状态，防止网络慢用户多次点击触发发送行为
        await sendSms(this.user.mobile)
        // 短信发出去了, 隐藏发送按钮 , 显示倒计时
        this.isCountDownShow = true
        // 倒计时结束 -> 隐藏倒计时, 显示发送按钮(监视倒计时的 finish 事件处理)
        } catch (err) {
        // try 里面任何代码的错误都会进入 catch
        // 不同的错误需要有不同的提示, 那就需要判断了
        let message = ''
        if (err && err.response && err.response.status === 429) {
          // 发送短信失败的错误提示
          message = '发送太频繁了, 请稍后重试'
        } else if (err.name === 'mobile') {
          // 表单验证失败的错误提示
          message = err.message
        } else {
          // 未知错误
          message = '发送失败 , 请稍后重试'
        }

        // 提示用户
        this.$toast({
          message,
          position: 'top'
        })
      }

    // 无论发送验证码成功还是失败，最后都要关闭发送按钮的 loading 状态
    this.isSendSmsLoading = false
    }

  }
}
</script>

<style scoped lang="less">
.login-container {
  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {
      bottom: 20px;
      width: 15px !important;
      height: 3px;
      background: #3296fa;
    }
  }
  img {
    height: 100px;
  }
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;    //  上下26px 左右16px
    .login-btn {
      background-color: #6db4fb;   // 按钮颜色  去掉边框(有颜色)
      border: none;
      .van-button__text {   // 子节点的 按钮文字
        font-size: 15px;
      }
    }
  }
  .other_login {
    text-align: center;
    .other_text {
      text-align: center;
      span {
        color: rgb(66, 112, 197);
      }
    }  
  } 
}
</style>