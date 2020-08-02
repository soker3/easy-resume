import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import htmlToPdf from './utils/htmlToPdf.js'
import Bmob from "hydrogen-js-sdk"
import config from './config/config'
import store from './store/store'

Bmob.initialize(config.bmob.secretKey, config.bmob.restApiKey)

Vue.prototype.$Bmob = Bmob
Vue.prototype.$Store = store
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(htmlToPdf)


new Vue({
  render: h => h(App),
}).$mount('#app')
