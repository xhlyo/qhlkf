<template>
  <div class="my-container">
     <van-cell-group>
      <van-cell
        class="base-info"
        title="neirong"
        value="内容"
        center
      >
        <van-image 
          slot="icon"
          width="50" 
          height="50" 
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg" 
        />
        <div slot="title">昵称</div>
        <van-button
          size="small"
          round
        >编辑资料</van-button>
      </van-cell> 
      <van-grid>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">文章</div>
          </div>        
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">关注</div>
          </div>        
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">粉丝</div>
          </div>        
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">获赞</div>
          </div>        
        </van-grid-item>
      </van-grid>

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
     </van-cell-group>

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