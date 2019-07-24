import Vue from 'vue'
import App from './App.vue'
import hzqztree from './lib/index'

Vue.use(hzqztree)


import $ from './assets/jquery/jquery-vendor.js'
import '../plugins/ztree/js/jquery.ztree.core.min.js'
import '../plugins/ztree/js/jquery.ztree.excheck.min.js'
import '../plugins/ztree/js/jquery.ztree.exedit.min.js'
import '../plugins/ztree/css/zTreeStyle.css'


new Vue({
  el: '#app',
  render: h => h(App)
})
