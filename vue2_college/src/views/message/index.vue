<template>
  <div class="message-container">
    <!-- <van-nav-bar v-if="user" class="nav-header">
      <slot slot="left"  name="left"></slot>
      <slot slot="title" name="title">消息</slot>
      <slot slot="right" name="right"><van-icon name="chat-o" to="/" class="icon_chat" /></slot>
    </van-nav-bar> -->

    <van-tabs class="channel-tabs">
      <van-tab title="提醒">
        <van-grid  class="nav-grid mb-4" :column-num="3">
          <van-grid-item
            class="nav-grid-item" 
            icon-prefix="Guali"
            icon="xihuan"
            text="赞和收藏" 
            to="/"
          />
          <van-grid-item
            class="nav-grid-item" 
            icon-prefix="Guali"
            icon="faxian" 
            text="新增关注"
            to="/" 
          />
          <van-grid-item
            class="nav-grid-item"      
            icon-prefix="Guali"
            icon="pinglun" 
            text="评论和 @ "
            to="/" 
          />
        </van-grid>
        
        <van-cell-group v-if="user" class="footer mb-4">
          <van-cell 
            icon-prefix="Guali"
            icon="xiaoxi" 
            to="/"
            title="校园通知"  
            label="一定要看哦" />
          <van-cell
            icon-prefix="Guali"
            icon="xiaoxi" 
            to="/"  
            title="最新消息" 
            label="最新的学校消息看了吗?" 
          />
          <van-cell
            icon-prefix="Guali"
            icon="xiaoxi" 
            to="/"  
            title="....." 
            label="你关注的人给你发来了消息" 
          />
        </van-cell-group>
        
      <div v-else>
        <div class="word">
            <van-cell value="登录后才可以查看消息提醒哦" size="large" />
        </div>
        <div class="button_center">
          <van-button round type="info">登录 / 注册 </van-button>
        </div>
      </div>
      </van-tab>

      <van-tab title="私信">
        <van-cell-group v-if="user" class="footer mb-4">
          <van-cell 
            icon-prefix="Guali"
            icon="xiaoxi" 
            to="/"
            title="校园通知"  
            label="一定要看哦" />
          <van-cell
            icon-prefix="Guali"
            icon="xiaoxi" 
            to="/"  
            title="最新消息" 
            label="最新的学校消息看了吗?" 
          />
          <van-cell
            icon-prefix="Guali"
            icon="xiaoxi" 
            to="/"  
            title="....." 
            label="你关注的人给你发来了消息" 
          />
        </van-cell-group>

      <div v-else>
        <div class="word">
            <van-cell value="登录后才可以查看消息提醒哦" size="large" />
        </div>
        <div class="button_center">
          <van-button round type="info">登录 / 注册 </van-button>
        </div>
      </div>

      </van-tab>
    </van-tabs>

  </div>
</template>
  
<script>
import { mapState } from 'vuex'
import { getCurrentUser } from '@/api/user'

export default {
  name: 'MessageIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0,
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {

  },
  mounted () {

  },
  methods: {
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

  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {  //  标签页下面
      bottom: 20px;  // 高度
      width: 15px !important;
      height: 3px;
      background: #3296fa;
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
        color: #925cc3;
    }
    .Guali-pinglun {
        color: #fb2c95;
    }
    .van-grid-item__text {   // 改图标下面字体的大小
        font-size: 10px;
        color: #333333;
    }
  }
  .footer {
    font-size: 16px;
  }
  .Guali-xiaoxi {
    color: #2f9de2;
  }
  .word {
    position: absolute; 
    padding-top: 150px;
    padding-left: 90px;
    .van-cell__value {
        color: #969799;
    }
  }
  .button_center {
    position: absolute; 
    padding-top: 200px;
    padding-left: 140px;
  }
  .mb-4 {  // 下边距为 4
    margin-bottom: 4px;
  }  
}
</style>