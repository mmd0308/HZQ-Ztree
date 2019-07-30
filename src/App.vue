<template>
  <div id="app">
    <div class="test-ztree">
      <hzq-ztree treeState="edit"  :treeData="treeData" @onRightClickToAdd="toAddZtree" />
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

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
      ],
       dialogVisible: false
    }
  },
  methods: {
    toAddZtree(){
      this.dialogVisible =  true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style>
.test-ztree{
  width:290px;
}
</style>
