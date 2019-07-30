import hzq_ztree from './hzq-ztree.vue'


import $ from '../assets/jquery/jquery-vendor.js'
import '../../plugins/ztree/js/jquery.ztree.core.js'
import '../../plugins/ztree/js/jquery.ztree.excheck.min.js'
import '../../plugins/ztree/js/jquery.ztree.exedit.min.js'
import '../../plugins/ztree/css/zTreeStyle.css'


const hzqZtree = {
    install(Vue,options){
        Vue.component(hzq_ztree.name,hzq_ztree)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(hzqZtree)
}
// 导出
export default hzqZtree 
