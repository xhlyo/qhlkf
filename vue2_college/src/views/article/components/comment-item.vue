<template>
  <van-cell
    class="comment-item"
    title="123"
  >
    <van-image
      slot="icon"
      class="avatar"
      round
      fit="cover"
      :src="comment.aut_photo"
    />
    <div slot="title">
      <div class="title-wrap">
        <div class="name">{{ comment.aut_name }}</div>
        <div class="like-wrap" @click="onCommentLike">
          <van-icon
            class="like-icon"
            :class="{
              liked: comment.is_liking
            }"
            :name="comment.is_liking ? 'good-job' : 'good-job-o'"
          />
          <span class="like-count">{{ comment.like_count }}</span>
        </div>
      </div>
      <div class="content">{{ comment.content }}</div>
      <div>
        <span
          class="pubdate"
        >{{ comment.pubdate | datetime('YYYY.MM.DD HH:mm') }}</span>
        <van-button
          class="reply-btn"
          round
          size="mini"
        >{{ comment.reply_count }} 回复</van-button>
      </div>
    </div>
  </van-cell>
</template>

<script>
import { addCommentLike,deleteCommentLike } from '@/api/comment'

export default {
  name: 'CommentItem',
  components: {
      
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
      
  },
  watch: {
      
  },
  created () {
      
  },
  mounted () {
      
  },
  methods: {
    async onCommentLike () {
      const commentId = this.comment.com_id.toString()
      if (this.comment.is_liking) { // 判断是否点了赞 com_id 转为字符串
        // 已点赞, 取消点赞
        await deleteCommentLike(commentId)
        this.comment.like_count-- // 取消点赞 点完 计数减1   
      } else {
        // 没有点赞, 添加点赞
        await addCommentLike(commentId)
        this.comment.like_count++ // 添加点赞 点完 计数加1
      }
      // 更新视图
      this.comment.is_liking = !this.comment.is_liking      
    },

  }
  

}
</script>

<style scoped lang="less">
.comment-item { // 评论项
  .avatar {
    // 头像
    width: 36px;
    height: 36px;
    margin-right: 13px; // 设置元素的右外边距(右边距)
  }
  .name { // 名字
    font-size: 14px;
    color: #406599;
  }
  .content { // 评论内容
    font-size: 16px;
    color: #222222;
  }
  .pubdate { // 发布时间
    font-size: 10px;
    margin-right: 10px;
  }
  .title-wrap { // 标题这一行包裹
    display: flex; // 同一行
    justify-content: space-between; // 两端撑开
  }
  .like-wrap { 
    // 点赞按钮包裹 .title-warp 子元素
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .like-icon.liked { // 点赞后颜色改变
    color: #ff69b4;  
  }
}
</style>