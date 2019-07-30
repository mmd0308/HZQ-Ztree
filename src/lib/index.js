import hzq_ztree from './hzq-ztree.vue'

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
