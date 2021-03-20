import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mediaList from './assets/plexdata.json'

let data = {
    media: mediaList
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
