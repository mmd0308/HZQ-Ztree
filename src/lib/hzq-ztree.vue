<template>
    <div class="hzq-ztree">
        <div class="tree-box">
            <div class="zTreeDemoBackground left">
                <ul id="treeContent" class="ztree"/>
            </div>
        </div>
        <div id="rMenu">
        <ul>
            <li id="m_add"> <button class="m_button" @click="onRightClickToAdd">添加文档</button></li>
            <li id="m_edit"> <button class="m_button" @click="onRightClickToEdit">编辑</button></li>
            <li id="m_del"> <button class="m_button" @click="onRightClickDeleted">删除</button></li>
        </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'hzq-ztree',
    data(){
        return{
            setting: this.initSetting()
            // treeData: [
            //     {id:1, name:"无右键菜单 1",
            //         children:[
            //             {id:11, name:"节点 1-1"},
            //             {id:12, name:"节点 1-2"}
            //         ]},
            //     {id:2, name:"右键操作 2",
            //         children:[
            //             {
            //                 id:21, name:"节点 2-1",
            //                  children:[
            //                     {id:31, name:"节点 3-1"},
            //                     {id:32, name:"节点 3-2"},
            //                     {id:33, name:"节点 3-3"},
            //                     {id:34, name:"节点 3-4"}
            //                 ]
            //             },
            //             {id:22, name:"节点 2-2"},
            //             {id:23, name:"节点 2-3"},
            //             {id:24, name:"节点 2-4"}
            //         ]},
            //     {id:3, name:"右键操作 3",
            //         children:[
            //             {id:31, name:"节点 3-1",isParent: true},
            //             {id:32, name:"节点 3-2"},
            //             {id:33, name:"节点 3-3"},
            //             {id:34, name:"节点 3-4"}
            //         ]}
            // ]
        }
    },
    props: {
        treeData: {
           type: Array,
           required: true
        },
        // 树的状态  编辑模式:edit  预览模式:preview 默认edit
        treeState:{ 
            type: String,
            default: 'edit'
        },
        treeDrag:{ 
            type: Boolean,
            default: false
        },
        layerContent:{
            type: String
        }
    },
    mounted() {
        this.ztree()
    },
    methods: {
        initSetting() {
            var set = {
               view: {
                    showLine: false,
                    // 不显示图标
                    showIcon: false,
                    selectedMulti: false,
                    dblClickExpand: false
                },
                edit: {
                    enable: true,
                    showRemoveBtn: false,
                    showRenameBtn: false
                },
                callback: {
                    beforeDrag: this.beforeDragMethod, // 取消拖拽
                    onClick: this.onClickNode,
                    onRightClick: this.onRightClickMethod
                }
            }
            return set
        },
        ztree(){
            $.fn.zTree.init($('#treeContent'), this.setting, this.treeData)
            const zTree_Menu = $.fn.zTree.getZTreeObj('treeContent')
        },
        beforeDragMethod(treeId, treeNodes) {
            return this.treeDrag
        },
        onRightClickMethod(event, treeId, treeNode) {
            if (this.treeState == 'preview') return // 只有进入编辑模式,才能右击操作
            // 没有选中node时候,默认是添加最高级node节点
            if (!treeNode && event.target.tagName.toLowerCase() !== 'button' && $(event.target).parents('a').length === 0) {
            // 取消所有的节点选中状态。
            $.fn.zTree.getZTreeObj('treeContent').cancelSelectedNode() 
            this.showRMenu(treeNode, 'root', event.clientX, event.clientY)
        } else if (treeNode && !treeNode.noR) {
            // 选中右击点击的节点
            $.fn.zTree.getZTreeObj('treeContent').selectNode(treeNode)
            this.showRMenu(treeNode, 'node', event.clientX, event.clientY)
            }
        },
        showRMenu(treeNode, type, x, y) {
            $('#rMenu ul').show()
            // 表示添加最高级别节点
            if (type === 'root') {
                $('#m_del').hide()
                $('#m_edit').hide()
            // 表示在指定node下面添加子级节点
            } else {
                $('#m_edit').show()
                $('#m_add').show()
                // 没有子元素,可以显示删除按钮
                if (!treeNode.children) {
                    $('#m_del').show()
                } else {
                    // 有子元素,禁止删除
                    $('#m_del').hide() 
                }
            }
            console.log(x + '-' + y)
            y += document.body.scrollTop
            x += document.body.scrollLeft
            $('#rMenu').css({ 'top': y + 'px', 'left': x + 'px', 'visibility': 'visible' })

            $('body').bind('mousedown', this.onBodyMouseDown)
        },
        onBodyMouseDown(event) {
            if (!(event.target.id === 'rMenu' || $(event.target).parents('#rMenu').length > 0)) {
                this.cancelRMenu()
            }
        },
        cancelRMenu() {
            $('#rMenu').css({ 'visibility': 'hidden' })
        },
        onClickNode(e,treeId, treeNode){
            var zTree = $.fn.zTree.getZTreeObj("treeContent");
            zTree.expandNode(treeNode);
            // 修改图标
            var icon_bottom = 'hzq-tree-right-icon-bottom-' + treeNode.tId;
            var icon_right = 'hzq-tree-right-icon-right-' + treeNode.tId; 
            $('#' + icon_bottom ).css('display','block')
            $('#' + icon_right ).css('display','none')
            
        },
        onRightClickToAdd(){
            this.cancelRMenu()
            this.$emit('onRightClickToAdd');
        },
        onRightClickToEdit(){
            this.cancelRMenu()
            this.$emit('onRightClickToAdd');
        },
        onRightClickDeleted(){
            this.cancelRMenu()
            this.$emit('onRightClickDeleted');
        }
    }
}
</script>
<!-- <style rel="stylesheet/scss" lang="scss"> -->
<style>
.hzq-ztree{
}
.ztree li  {
    line-height: 30px;
}
.ztree li  a{
    height: 30px;
}
.ztree li a.curSelectedNode {
    height: 30px;
}

#rMenu {
  position:absolute;
  visibility:hidden;
  z-index: 9999;
  top:0;
  text-align: left;
  padding: 2px;
  }
#rMenu ul {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}
#rMenu ul li{
    margin: 0px;
    padding: 0px;
    cursor: pointer;
    list-style: none outside none;
    background-color: #fff;
  }
#rMenu button{
    display: inline-block;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    margin: 0;
      outline:none;
}
#rMenu button:hover{
    background:  powderblue;
}
#rMenu ul .m_button{
    width: 80px;
    border-radius: 0px;
  }
</style>
