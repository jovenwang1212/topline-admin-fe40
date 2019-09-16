import Vue from 'vue'
import App from './App.vue'
// 优先查看文件，如果文件找不到优先找到目录。
// 如果找到目录， 优先找目录中的index.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
