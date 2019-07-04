import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import {
  unregister as unregisterServiceWorker
} from '@/registerServiceWorker'


import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
