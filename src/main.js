import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import htmlToPdf from './utils/htmlToPdf.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(htmlToPdf)

new Vue({
  render: h => h(App),
}).$mount('#app')
