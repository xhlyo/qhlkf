<template>
  <div class="message-container">
  <van-nav-bar class="nav-header">
    <slot slot="left"  name="left"></slot>
    <slot slot="title" name="title">消息</slot>
    <slot slot="right" name="right"><van-icon name="chat-o" to="/" class="icon_chat" /></slot>
  </van-nav-bar>

    <van-grid class="nav-grid mb-6" :column-num="3">
      <van-grid-item
        class="nav-grid-item" 
        icon-prefix="Guali"
        icon="xihuan"
        text="赞和收藏" 
      />
      <van-grid-item
        class="nav-grid-item" 
        icon-prefix="Guali"
        icon="faxian" 
        text="新增关注" 
      />
      <van-grid-item
        class="nav-grid-item"      
        icon-prefix="Guali"
        icon="pinglun" 
        text="评论和 @ " 
      />
    </van-grid>

    <van-cell
      class="footer mb-4"
      icon-prefix="Guali"
      icon="shoucang" 
      center
      to="/" 
    >校园消息</van-cell>

    <van-cell
      center
      to="/" 
    >测试</van-cell>

  </div>
</template>
  
<script>
export default {
  name: 'MessageIndex',
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
  methods: {
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<style scoped lang="less">
.message-container  {
  .nav-header {  
    .icon_chat {
      font-size: 22px;      
    }
  }

  /deep/  .nav-grid {
    .nav-grid-item {
      height: 70px;
    }
    .Guali {
      font-size: 22px;
    }
    .Guali-xihuan {
        color: #eb5253;
    }
    .Guali-faxian {
        color: #ff9d1d;
    }
    .Guali-pinglun {
        color: #ff9d1d;
    }
    .van-grid-item__text {   // 改图标下面字体的大小
        font-size: 10px;
        color: #333333;
    }
  }
  .footer {
    font-size: 16px;
  }
  .mb-4 {  // 下边距为 4
    margin-bottom: 4px;
  }
  .mb-6 {  // 下边距为 6
    margin-bottom: 6px;
  }    
}
</style>