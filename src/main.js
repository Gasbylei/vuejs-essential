import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './directives'
import './components'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'

Vue.use(Message)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
