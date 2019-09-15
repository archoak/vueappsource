import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

new Vue({
  router,   //注册 router
  render: (h) => h(App)

}).$mount("#app")