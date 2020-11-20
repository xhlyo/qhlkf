import {ref,onMounted,onUnmounted} from 'vue' 
function useMousePosition() {
    const x = ref(0)   // 跟踪鼠标的位置
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
      x.value = e.pageX
      y.value = e.pageY
    }
    //  添加事件
    onMounted(() =>{
      document.addEventListener('click',updateMouse)
    })

    onUnmounted(() =>{
      document.removeEventListener('click',updateMouse)
    })
    return {x,y}
}

export default useMousePosition   // 导出自定义函数