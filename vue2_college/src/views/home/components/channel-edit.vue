<template>
  <div class="channel-edit">
   <van-cell center :border="false">
      <div
        slot="title"
        class="channel-title"
      >我的频道</div>
      <van-button
        type="danger"
        plain
        round
        size="mini"
        @click="isEdit = !isEdit"
      >{{ isEdit ? '完成' : '编辑' }}</van-button>
   </van-cell>

   <van-grid :gutter="10">
    <van-grid-item 
      class="grid-item"
      :icon=" (isEdit && index !== 0) ? 'clear' : '' "
      v-for="(channel, index) in userChannels"
      :key="index"
      :text="channel.name"
      @click="onUserChannelClick(channel, index)"
    />
   </van-grid>

   <van-cell center :border="false">
      <div
        slot="title"
        class="channel-title"
      >频道推荐</div>
   </van-cell>

   <van-grid :gutter="10">
    <van-grid-item 
      class="grid-item"
      v-for="(channel, index) in recommendChannels"
      :key="index"
      :text="channel.name"
      @click="onAdd(channel)"
    />
   </van-grid>
 </div>
</template>

<script>
import { getAllChannels } from '@/api/channel'  

export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    userChannels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],  // 所有频道数据列表
      isEdit: false  // 控制编辑的显示状态
    }
  },
  computed: {
    // 推荐的频道列表
    // 计算属性会观测内部依赖数据的变化而重新求值
    recommendChannels () {
      // 思路:  所有频道 - 我的频道 = 剩下的推荐频道
      // filter 方法: 过滤数据 , 根据方法返回的布尔值 true 来收集数据
      // filter 方法查找满足条件的所有元素
      return this.allChannels.filter(channel => {
        // 判断 channel 是否属于用户频道
        // find 方法查找满足条件的单个元素
        return !this.userChannels.find(userChannel => {
          // 找到满足该条件的元素
          return userChannel.id === channel.id        
        })
      })
      
      // const arr = []
      // // 遍历所有频道
      // this.allChannels.forEach(channel => {
      //   let flag = false
      //   for (let i = 0; i < this.userChannels.length; i++) {
      //     if (this.userChannels[i].id === channel.id) {
      //       // 所有频道中的频道项属于用户频道
      //       flag = true
      //       break
      //     }
      //   }
      //   if (!flag) {
      //     arr.push(channel)
      //   }
      // })
      // return arr

    }
  },
  watch: {},
  created() {
    this.loadAllChannels ()  
  },
  mounted() {
      
  },
  methods: {
    async loadAllChannels () {
      const { data } = await getAllChannels()
      this.allChannels = data.data.channels
    },

    onAdd (channel) {
      this.userChannels.push(channel)
      // TODO: 数据持久化

    },

    onUserChannelClick (channel, index) {
      if (this.isEdit && index !== 0) {
        // 编辑状态，删除频道
        this.deleteChannel(channel, index)
      } else{
        // 非编辑状态，切换频道
        this.switchChannel(index)
      }
    },

    deleteChannel (channel, index) {
        console.log('删除频道')
        this.userChannels.splice(index, 1)
        // 数据持久化
    },

    switchChannel (index) {
        console.log('切换频道')
        // 切换频道
        this.$emit('update-active', index)
        
        // 关闭弹出层
        this.$emit('close')
    }

  }
}
</script>

<style scoped lang="less">
.channel-edit {
  padding-top: 54px;   //  距离顶部 54像素
  .channel-title {  //  频道标题
    font-size: 16px;
    color: #333333;
    margin-top: 0;
  }

  .grid-item {
    width: 80px;
    height: 43px;
    /deep/ .van-grid-item__content {
      background-color: #f4f5f6;  
      .van-grid-item__text {  // 里面的文字
        font-size: 14px;
        color: #222;
        margin-top: 0;
      }      
    }
    /deep/ .van-grid-item__icon {
      position: absolute;
      right: -5px;
      top: -5px;
      font-size: 20px;
      color: #ccc;
      z-index: 5;
    }

  }
}
</style>