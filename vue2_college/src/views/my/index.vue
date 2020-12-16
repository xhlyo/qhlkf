<template>
  <div class="my-container">
     <van-cell-group v-if="user" class="my-info">
      <van-cell
        class="base-info"
        center
        :border="false"
      >
        <van-image 
          class="avatar"
          slot="icon"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg" 
        />
        <div class="name" slot="title">昵称</div>
        <van-button
          class="update-btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell> 
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">999</div>
            <div class="text">文章</div>
          </div>        
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">5</div>
            <div class="text">关注</div>
          </div>        
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">30000</div>
            <div class="text">粉丝</div>
          </div>        
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="text-wrap" slot="text">
            <div class="count">700</div>
            <div class="text">获赞</div>
          </div>        
        </van-grid-item>
      </van-grid>
     </van-cell-group>

    <div v-else class="not-login">
      <div @click="$router.push({
        name: 'login',
        query: {
          redirect: '/my'
        }
      })">
        <img class="not-logo" src="./not_login.png">
      </div>
    </div>


      <van-grid class="nav-grid mb-4" :column-num="2">
        <van-grid-item 
          class="nav-grid-item"
          icon-prefix="Guali"
          icon="shoucang" 
          text="收藏" />
        <van-grid-item 
          class="nav-grid-item"
          icon-prefix="Guali"
          icon="lishi" 
          text="历史记录" 
        />
      </van-grid>

      <van-cell title="消息通知" is-link to="/" />
      <van-cell
          class="mb-4"
          title="登录"
          is-link
          to="/login"
      />
      <van-cell
          class="mb-4"
          title="注册"
          is-link
          to="/register"
      /> 
     <van-cell
          class="mb-4"
          title="广理图灵"
          is-link
          to="/user/chat"
     />
     <van-cell
          v-if="user"
          class="logout-cell"
          title="退出登录"
          @click="onLogout"
     />   
  </div>
</template>
  
<script>
import { mapState } from 'vuex'
import { getCurrentUser } from '@/api/user'

export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      currentUser: {} // 当前登录用户信息
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    // this.loadCurrentUser()
  },
  mounted () {},
  methods: {
    async loadCurrentUser () { // 输出 data
      const { data } = await getCurrentUser()
      this.currentUser = data.data
    },

    onLogout () {
      // 提示用户确认退出
      // 确认 -> 处理退出
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
      .then(() => {  // 确认执行这里
        // 清除用户登录状态
        this.$store.commit('setUser', null)
      })
      .catch(() => { // 退出执行这里
        // on cancel   
      })
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url("./banner.jpeg") no-repeat;
    background-size: cover;   // 背景填充
    .base-info {
      box-sizing: border-box;
      height: 115px;
      background-color: unset;
      // 上边距38  下边距11
      padding-top: 38px;
      padding-bottom: 11px;
      .avatar {    //  头像
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px solid #fff;  // 一个白环边框
        margin-right: 11px;
      }
      .name {  // 昵称
        font-size: 15px;
        color: #fff;
      }
      .update-btn {  // 编辑资料 按钮
        height: 16px;
        font-size: 10px;  // 文字
        color: #666666;
      }
    }
    .data-info {  // 数据信息
      .data-info-item {
        height: 65px;
        color: #fff;
        .text-wrap {   
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }
    }
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }

  .not-login {
    height: 180px;
    background: url("./GL_banner.jpg") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .not-logo {   //  未登录时的头像
      width: 66px;
      height: 66px;
    }
    .text {  //  文字
      font-size: 14px;
      color: #fff;
    }
  }

  /deep/ .nav-grid {
    .nav-grid-item {
      height: 70px;
      .Guali {
        font-size: 22px;
      }
      .Guali-shoucang {
        color: #eb5253;
      }
      .Guali-lishi {
        color: #ff9d1d;
      }
      .van-grid-item__text {
        font-size: 14px;
        color: #333333;
      }
    }
  }

  .logout-cell {  // 退出登录 
    text-align: center;
    color: #d86262;
  }
  .mb-4 {  // 下边距为 4
    margin-bottom: 4px;
  }
}
</style>