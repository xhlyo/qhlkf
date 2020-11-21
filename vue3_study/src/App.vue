<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <h1>{{greetings}}</h1>     <!--  常量   按钮="触发函数" -->
  <p>{{error}}</p>
  <Suspense>   <!-- 使用异步组件 -->
    <template #default>    <!-- default 节点 -->
      <div>
        <async-show />     <!-- 加载完成后显示AsyncShow 内容 -->
        <dog-show />
      </div>
    </template>            
    <template #fallback>
        <h1>Loading !...</h1>    <!-- 未加载完成前 -->
    </template>
  </Suspense>
  <button @click="openModal">Open Modal</button><br/>
  <modal :isOpen="modalIsOpen" @close-modal="onModalClose"> My Modal !!!!</modal>
  <h1 v-if="loading">Loading! ...</h1>
  <img v-if="loaded" :src="result[0].url" >
  <!-- DogAPI： <img v-if="loaded" :src="result.message"> -->
  <h2>X: {{x}},Y: {{y}}</h2>   <!-- 显示跟踪到的鼠标坐标 -->
  <button @click="increase">👍+1</button><br/>
  <button @click="updateGreeting">Update Title</button>
  </div>
</template>

<script lang="ts">      // ref computed 两个新API  响应式对象
import {ref,computed,reactive,toRefs,watch,onErrorCaptured} from 'vue'
import useMountPosition from './hooks/useMousePosition'  // 使用导出的函数
import useURLLoader from './hooks/useURLLoader'
import Modal from './components/Modal.vue'  // 引入Modal.vue
import AsyncShow from './components/AsyncShow.vue'  // 将异步组件引入 
import DogShow from './components/DogShow.vue'   
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
  components: {
    Modal,
    AsyncShow,
    DogShow
  },
  setup(){
    const error = ref(null)
    onErrorCaptured((e: any) =>{
      error.value = e
      return true
    })
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
    const { x,y } = useMountPosition()  // 使用函数
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
    const modalIsOpen = ref(false)
    const openModal = () => {   // 触发函数
      modalIsOpen.value = true
    }   // 添加事件
    const onModalClose = () => {
      modalIsOpen.value = false
    }
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
      loaded,
      modalIsOpen,
      openModal,
      onModalClose,
      error
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
