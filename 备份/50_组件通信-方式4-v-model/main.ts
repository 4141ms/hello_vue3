import {createApp} from 'vue'
import App from './App.vue'
//第一步：引入pinia
import router from './router'
const app = createApp(App)
app.use(router)

app.mount('#app')