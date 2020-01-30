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


function setScreen(name) {
  if (!name) {
    return;
  }

  if (window.android) {
    // Call Android interface
    window.android.setScreen(name);
  } else if (window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.firebase) {
    // Call iOS interface
    var message = {
      command: 'setScreen',
      name: name
    };
    window.webkit.messageHandlers.firebase.postMessage(message);
  } else {
    // No Android or iOS interface found
    console.log("No native APIs found. setScreen " + name);
  }
}


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.afterEach(( to, from ) => {
  setScreen(to.name);
});