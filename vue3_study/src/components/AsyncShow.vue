<template>
  <h1>{{result}}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {  // 定义一个异步组件  Suspense(Vue3内置组件)  需要返回一个Promise
    return new Promise((resolve) => {  // 回调函数
      setTimeout(() => {
        return resolve({
          result: 42   // 显示内容为42
        })
      }, 3000)  // 3s
    })
  }
})
</script>
