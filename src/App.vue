<template>
  <div id="app">
    <div>
      标题: <input />
    </div>

    <div class="test-ztree">
      <hzq-ztree treeState="edit" @onRightClickToAdd="toAddZtree"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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
