<template>
  <div class="update-photo">
    <img class="image" :src="image" ref="image">
    <van-nav-bar
      class="toolbar"
      left-text="取消"
      right-text="确认"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
  </div>
</template>

<script>
import { updateUserPhoto } from '@/api/user'
import 'cropperjs/dist/cropper.css' // 加载 cropper 的样式
import Cropper from 'cropperjs' // 引入 cropper 的核心

export default {
  name: 'UpdatePhoto',
  components: {
      
  },
  props: {
    file: {
      // type: Object,
      required: true
    }
  },
  data () {
    return { // image 使用时转成 blob 数据
      image: window.URL.createObjectURL(this.file),
      cropper: null // 裁切器实例           
    }
  },
  computed: {
          
  },
  watch: {
      
  },
  created () {
      
  },
  mounted () {
    // 获取需要裁切的图片 DOM
    const image = this.$refs.image
    this.cropper = new Cropper(image, {
      viewMode: 1,
      dragMode: 'move',
      aspectRatio: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      background: false, // 没有背景
      movable: true // 图片可以移动
    })      
  },
  methods: {
    getCroppedCanvas () {
      return new Promise(resolve => {
        this.cropper.getCroppedCanvas().toBlob((file) => {
          resolve(file)
        })        
      })      
    },
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidclick: true,
        duration: 0 // 展示时间, 0 表示持续展示
      })
      const file = await this.getCroppedCanvas() // 调用一下 上面返回一个 Promise
      const fd = new FormData()
      fd.append('photo', file)      
      /** 如果要求 Content-Type 是 multipart/form-data, 则一定要提交 FormData 数据对象
       *  专门用于文件上传的, 不能提交 {}, 没用,   fd.append('photo', 文件对象)
       *  const fd = new FormData()
          fd.append('photo', this.file)
       */
      await updateUserPhoto(fd)
      
      // 更新父组件中的用户头像  window.URL.createObjectURL(file)是裁切后的数据
      this.$emit('update-photo', window.URL.createObjectURL(file)) 

      // 关闭弹出层
      this.$emit('close')
      
      this.$toast.success('保存成功')
    }      
  }
}
</script>

<style scoped lang="less">
.toolbar {
  position: fixed; // 将 toolbar 选择器放到下面
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000; // 黑色背景
}

/* Ensure the size of the image fit the container perfectly */
.image { // 图片包装到块元素里面 确保图片大小完全填充在 盒子里面
  display: block;
  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
</style>