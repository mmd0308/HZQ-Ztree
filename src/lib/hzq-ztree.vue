<template>
    <div class="hzq-ztree">
        <div class="tree-box">
            <div class="zTreeDemoBackground left">
                <ul id="treeContent" class="ztree"/>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'hzq-ztree',
    data(){
        return{
            setting: this.initSetting(),
            treeData: [
                {id:1, name:"无右键菜单 1", open:true, noR:true,
                    children:[
                        {id:11, name:"节点 1-1", noR:true},
                        {id:12, name:"节点 1-2", noR:true}

                    ]},
                {id:2, name:"右键操作 2", open:true,
                    children:[
                        {id:21, name:"节点 2-1"},
                        {id:22, name:"节点 2-2"},
                        {id:23, name:"节点 2-3"},
                        {id:24, name:"节点 2-4"}
                    ]},
                {id:3, name:"右键操作 3", open:true,
                    children:[
                        {id:31, name:"节点 3-1"},
                        {id:32, name:"节点 3-2"},
                        {id:33, name:"节点 3-3"},
                        {id:34, name:"节点 3-4"}
                    ]}
            ]
        }
    },
    created() {
        this.ztree()
    },
    methods: {
        initSetting() {
            var set = {
               view: {
                    dblClickExpand: false
                },
                check: {
                    enable: true
                }
            }
            return set
        },
        ztree(){
            $.fn.zTree.init($('#treeContent'), this.setting, this.treeData)
        }
    }
}


</script>

<style>
.hzq-ztree{
    background: red;
}
</style>
