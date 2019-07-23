import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$axios = axios
Vue.prototype.$config = {
  backendHost: 'http://localhost:9000'
}
