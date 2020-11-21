<template>
  <img :src="result && result.message">
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  async setup() {    // async 相当于 Promise    DogAPI的url
    const rawData = await axios.get('https://dog.ceo/api/breeds/image')
    return {
      result: rawData.data
    }
  }
})
</script>
