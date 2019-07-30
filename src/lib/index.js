import hzq_ztree from './hzq-ztree.vue'

const HzqZtree = {
    install(Vue,options){
        Vue.component(hzq_ztree.name,hzq_ztree)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(HzqZtree)
}
// 导出
export default HzqZtree 
