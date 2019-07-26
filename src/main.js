import Vue from 'vue'
import App from './App.vue'
import hzqztree from './lib/index'

Vue.use(hzqztree)

var Icon = require('vue-awesome')
Vue.component('icon', Icon)


import './icons/index.js' // icon

import $ from './assets/jquery/jquery-vendor.js'
import '../plugins/ztree/js/jquery.ztree.core.js'
import '../plugins/ztree/js/jquery.ztree.excheck.js'
import '../plugins/ztree/js/jquery.ztree.exedit.js'
import '../plugins/ztree/css/zTreeStyle.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
