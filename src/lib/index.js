import hzqZtree from './hzq-ztree.vue'

const hzqztree = {
    install(Vue,options){
        Vue.component(hzqZtree.name,hzqZtree)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(hzqingTimeLine)
}
// 导出
export default hzqztree 
