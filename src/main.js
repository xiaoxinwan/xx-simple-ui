import Vue from 'vue'
import App from './App.vue'
import ToastPlugin from './components/toast/toastPlugin'

Vue.config.productionTip = false
Vue.use(ToastPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
