import Vue from 'vue'
import App from './App.vue'

import { Dialog } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import HzqZtree from 'hzq-ztree'

Vue.use(HzqZtree)
Vue.use(Dialog)


new Vue({
  el: '#app',
  render: h => h(App)
})
