<template>
  <div id="app">
    <div>
      标题: <input />
    </div>
    <div class="test-ztree">
      <hzq-ztree treeState="edit"  :treeData="treeData" @onRightClickToAdd="toAddZtree"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        treeData: [
          {id:1, name:"无右键菜单 1",
              children:[
                  {id:11, name:"节点 1-1"},
                  {id:12, name:"节点 1-2"}
              ]},
          {id:2, name:"右键操作 2",
              children:[
                  {
                      id:21, name:"节点 2-1",
                        children:[
                          {id:31, name:"节点 3-1"},
                          {id:32, name:"节点 3-2"},
                          {id:33, name:"节点 3-3"},
                          {id:34, name:"节点 3-4"}
                      ]
                  },
                  {id:22, name:"节点 2-2"},
                  {id:23, name:"节点 2-3"},
                  {id:24, name:"节点 2-4"}
              ]},
          {id:3, name:"右键操作 3",
              children:[
                  {id:31, name:"节点 3-1",isParent: true},
                  {id:32, name:"节点 3-2"},
                  {id:33, name:"节点 3-3"},
                  {id:34, name:"节点 3-4"}
              ]}
      ]
    }
  },
  methods: {
    toAddZtree(){
      alert('ll')
    }
  }
}
</script>

<style>
.test-ztree{
  width:290px;
}
</style>
