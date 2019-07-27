import Vue from 'vue'
import App from './App.vue'

import HzqZtree from 'hzq-ztree'

Vue.use(HzqZtree)

new Vue({
  el: '#app',
  render: h => h(App)
})
