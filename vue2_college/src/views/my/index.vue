<template>
  <div class="my-container">
     <van-cell-group class="my-info">
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

      <van-grid :column-num="2">
        <van-grid-item 
          icon-prefix="Guali"
          icon="shoucang" 
          text="收藏" />
        <van-grid-item 
          icon-prefix="Guali"
          icon="lishi" 
          text="历史记录" 
        />
      </van-grid>

     <van-cell title="消息通知" is-link to="/" />
     <van-cell
          class="mb-4"
          title="小智同学"
          is-link
          to="/user/chat"
     />
     <van-cell
          class="logout-cell"
          title="退出登录"
     />
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
  .my-info{
    background: url("./banner.jpg") no-repeat;
    background-size: cover;   // 背景填充
    .base-info{
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
    .logout-cell {
    text-align: center;
    color: #d86262;
  }
}
</style>