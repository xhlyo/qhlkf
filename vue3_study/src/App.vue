<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">      // ref computed 两个新API  响应式对象
import {computed,reactive,toRefs} from 'vue';
interface DataProps{
  count: number;
  double: number;
  increase: () => void;
}

export default ({
  name:'App',
  setup(){
    // import {ref} from 'vue';
    // const count = ref(0)
    // const double = computed( () => {
    //   return count.value * 2 
    // })
    // const increase = () => {  count.value++  }
    const data: DataProps = reactive({
      count: 0,
      increase: () => {data.count++},
      double: computed(() => data.count * 2)
    })
    const refData = toRefs(data)
    return{
      // count,
      // increase,
      // double
      ...refData   
      /*   == data   
          <h1>{{data.count}}</h1>  
          <h1>{{data.double}}</h1>   
      <button @click="data.increase"></button>
          */
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
