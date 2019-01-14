import Vue from 'vue'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://xxx.xxx.xxx.xxx:94'
Vue.http.headers.common['Access-Control-Request-Method'] = '*'
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
