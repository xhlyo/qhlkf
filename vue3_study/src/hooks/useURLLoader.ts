// 自定义库 axios
import {ref} from 'vue'
import axios from 'axios'

// function useURLLoader(url: string){
function useURLLoader<T>(url: string){     // 改造成泛型
    //  状态和结果声明
    const result = ref<T | null>(null)     //  改造前:  const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    //
    axios.get(url).then((rawData)=>{
        loading.value = false
        loaded.value = true
        result.value = rawData.data
    }).catch(e => {
        error.value = e
        loading.value = false
    })

    return {
        result,loading,error,loaded   
    }
}

export default useURLLoader