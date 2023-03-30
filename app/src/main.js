import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // router对象需要挂载到vue实例中
  store,
  render: (h) => h(App)
}).$mount('#app')
