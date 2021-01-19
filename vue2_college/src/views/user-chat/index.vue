<template>
  <div class="user-chat">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="广理图灵"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- / 导航栏 -->

    <!-- 消息列表 -->
    <van-cell-group class="message-list" ref="message-list">
      <van-cell 
        :title="item.msg"
        v-for="(item, index) in messages"
        :key="index"
      />
    </van-cell-group>    
    <!-- / 消息列表 -->

    <!-- 发送消息 -->
    <van-cell-group class="send-message-wrap">
      <van-field
        v-model="message"
        placeholder="请输入消息"
        :border="false"
      />
      <van-button
        type="primary"
        size="small"
        @click="onSend"
      >发送</van-button>
    </van-cell-group>
    <!-- / 发送消息 -->
  </div>
</template>

<script>
import io from 'socket.io-client'
import { getItem, setItem } from '@/utils/storage'
// 发送消息
// socket.emit('消息类型', 消息内容)
// socket.on('消息类型', function (data) { data消息 })
    // const socket = io('http://ttapi.research.itcast.cn/') // io('接口')

export default {
  name: 'UserChat',
  components: {
      
  },
  props: {},
  data () {
    return {
      message: '',
      socket: null, // WebSocket 通信对象
      messages: getItem('chat-messages') || [] // 消息列表                
    }
  },
  computed: {},
  watch: { // 监视 messages 存储在本地 
    messages () {
      setItem('chat-messages', this.messages)
      // 如果你要在操作数据之后立即操作数据影响的视图 DOM, 那么最好把代码放到 nextTick 函数中
      // 数据改变影响视图更新这件事儿不是立即的
      this.$nextTick(() => {
        this.scrollToBottom() // 调用方法 列表滚动到最底部 查看最新聊天消息
      })
    }          
  },
  created () {
    const socket = io('')
    this.socket = socket
    // 建立连接
    socket.on('connect', () => {
      console.log('连接建立成功了')
    })
    // 断开连接了
    socket.on('disconnect', () => {
      console.log('断开连接了')
    })
    // 监听 message 事件, 接收服务端消息  代码获取消息
    socket.on('message', data => {
      // 把对方发给我的消息放到数组中
      this.messages.push(data)
    })
  },
  mounted () { // 一上来就调用一下
    this.scrollToBottom()      
  },
  methods: {
    onSend () {
      // 请求发送消息
      const data = {
        msg: this.message, // 输入框中的内容
        timestamp: Date.now() // 时间戳
      }
      this.socket.emit('message', data)

      // 把用户发出去的消息存储到数组中

      // 清空输入框
      this.message = ''                  
    },
    scrollToBottom () { // 混动到最底部
      const list = this.$refs['message-list'] // 拿到 dom 的 list
      list.scrollTop = list.scrollHeight // 它的顶 = 它的高
    }      
  }
}
</script>

<style scoped lang="less">
.message-list { // 固定消息列表
  position: fixed;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 44px;
  overflow-y: auto; // 滚动条
}
.send-message-wrap { // 下面4行都是定位在底部
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0; 
  display: flex; // 按钮和输入框同一行
  padding: 0 14px; // 左右边距
  align-items: center; // 内容垂直居中
  .van-button {
    width: 51px;
    font-size: 14px;
  }
}
</style>