import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import { globalRegister } from './global'
import { setupStore } from './store'
//全局导入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus)
setupStore()
app.use(globalRegister)
app.mount('#app')
