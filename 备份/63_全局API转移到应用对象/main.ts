import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

// 将Hello组件挂到全局
app.component('Hello',Hello)
app.config.globalProperties.x = 99
// 要声明一下，否则 ts会报错。最好不要使用
declare module 'vue' {
  interface ComponentCustomProperties {
    x:number
  }
}

// 定义了一个 v-beauty 指令
app.directive('beauty',(element,{value})=>{
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')

// 两s后卸载
setTimeout(() => {
  app.unmount()
}, 2000);