<template>
  <div class="qa-container">
    <van-tabs class="channel-tabs" v-model="active">
      <van-tab title="关注">
        <van-cell class="follow-info">
          <div slot="title" class="name">气泡弹出框
            <van-button
              round
              class="more"
              icon="ellipsis"
              size="small" />
          </div>
          <van-image
            slot="icon"
            round
            fit="cover"
            class="avatar"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <div slot="label" class="pubdate">几个月前</div>
          <div class="markdown-body" ref="article-content">
            《蝶恋花·海燕双来归画栋》
            海燕双来归画栋。帘影无风，花影频移动。半醉腾腾春睡重。绿鬟堆枕香云拥。
            翠被双盘金缕凤。忆</div>
          <div class="follow-bottom">
            <van-icon
              class="good-job" 
              name="good-job" 
              color="#777777">点赞</van-icon>
            <van-icon
              class="comment"
              name="comment" 
              color="#777777">评论</van-icon>
            <van-icon
              class="share" 
              name="share" 
              color="#777777">分享</van-icon>  
          </div> 
        </van-cell>
      </van-tab>
      <van-tab title="推荐">
        <van-cell class="recom-info">
          <div slot="title" class="name">测试内容
            <van-button 
              class="follow-btn"
              round
              size="small">关注</van-button>
          </div>
          <van-image
            slot="icon"
            round
            fit="cover"
            class="avatar"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <div slot="label" class="pubdate">几个月前</div>
          <div class="markdown-body" ref="article-content">
            《红楼梦十二曲——终身误》
            都道是金玉良缘，俺只念木石前盟。
            空对着山中高士晶莹雪，终不忘世外仙姝寂寞林。
            叹人间美中不足今方信。纵然是齐眉举案，到底意难平。
          </div>
          <div class="follow-bottom">
            <van-icon
              class="good-job" 
              name="good-job" 
              color="#777777">点赞</van-icon>
            <van-icon
              class="comment"
              name="comment" 
              color="#777777">评论</van-icon>
            <van-icon
              class="share" 
              name="share" 
              color="#777777">分享</van-icon>  
          </div>      
        </van-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>
  
<script>
import { Toast } from 'vant';
import '../article/github-markdown.css' // 引入 github 的 markdown 样式来写问答模块

export default {
  name: 'QaIndex',
  components: {

  },
  props: {},
  data () {
    return {
      active: 0,
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    matters() {
      Toast('文件不能大于50M 大文件不能大于2GB');
    }
  }
}
</script>

<style scoped lang="less">
.qa-container {
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
}

.follow-info {
  left: 0;   // 左右撑开
  right: 0;
  .avatar {  
    // 头像
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .name {
    // 名字          
    font-size: 15px;
    color: #333333;
  }
  .more {
    color: red;
    margin-left: 180px;
  }
  .pubdate {
    // 发布时间      
    font-size: 11px;
    color: #b4b4b4;
  }
  .markdown-body { // 文章内容 
    padding: 14px;    // 上下边距
    background-color: rgba(235, 234, 238, 0.89);
  }
  .follow-bottom { // 底部评论
    position: fixed;
    padding-top: 20px;
    width: 344px;
  }
}

.recom-info {
  left: 0;   // 左右撑开
  right: 0;
  .avatar {  
    // 头像
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .name {
    // 名字          
    font-size: 15px;
    color: #333333;
  }
  .pudate {
    // 发布时间      
    font-size: 11px;
    color: #b4b4b4;
  }
  .markdown-body {
    padding: 14px;  // 上下边距
    background-color: rgba(235, 234, 238, 0.89);
  }
  .follow-btn {
    color: #ff4500;
    // 关注按钮
    width: 75px;
    height: 29px;
    font-size: 14px;
    margin-left: 150px;
  }
  .follow-bottom { // 底部评论
    position: fixed;
    padding-top: 20px;
    width: 344px;
  }
}

.van-cell__value {
  position: fixed;
  margin: 60px 15px 20px 0;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
    background-color: #39a9ed;
}
.mb-4 {  // 下边距为 4
    margin-bottom: 4px;
} 
</style>