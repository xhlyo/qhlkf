<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <h1>{{greetings}}</h1>
  <h1 v-if="loading">Loading! ...</h1>
  <img v-if="loaded" :src="result.message">
  <h2>X: {{x}},Y: {{y}}</h2>   <!-- 显示跟踪内容 -->
  <button @click="increase">👍+1</button><br/>
  <button @click="updateGreeting">Update Title</button>
  </div>
</template>

<script lang="ts">      // ref computed 两个新API  响应式对象
import {ref,computed,reactive,toRefs,watch} from 'vue'
import useMountPosition from './hooks/useMousePosition'  // 使用导出的函数
import useURLLoader from './hooks/useURLLoader'
// import {computed,reactive,toRefs,onMounted,onUpdated,onRenderTriggered} from 'vue';
interface DataProps{
  count: number;
  double: number;
  increase: () => void;
}
interface DogResult{
  message: string;
  status: string;
}
interface CatResult{
  id: string;
  url: string;
  width: number;
  height: number;
}
export default ({
  name:'App',
  setup(){
    // const count = ref(0)
    // const double = computed( () => {
    //   return count.value * 2 
    // })
    // const increase = () => {  count.value++  }
            // onMounted(() => {
            //   console.log('mounted')
            // })
            // onUpdated(()=>{
            //    console.log('updated')
            // })
            // onRenderTriggered(()=>{
            //   console.log(event)  //   debug的对象
            // })
    const data: DataProps = reactive({
        count: 0,
        increase: () => { data.count++ },
        double: computed(() => data.count * 2),
      })
    const {x,y} = useMountPosition()  // 使用函数
    // const {result,loading,loaded} = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result,() => {      //  useURLLoader<DogResult> 就可以自动补全
      if(result.value)
        // console.log('value',result.value.message)     DogAPI内容
        console.log('value', result.value[0].url)
    })
    const greetings = ref('')
    const updateGreeting = () => {
      greetings.value += 'hello'
    } 
    //  侦听 data.count 
    watch([greetings,() => data.count],(newValue,oldValue) => {
      console.log('old',oldValue)
      console.log('new',newValue)
      document.title = 'updated' + greetings.value + data.count
    })
    document.title = 'updated' + greetings.value
    const refData = toRefs(data)
    return{
      // count,
      // increase,
      // double
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
      loaded
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
