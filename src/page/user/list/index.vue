<style type="text/less" scoped>
  @import "index.less";
</style>
<template>
  <div class="user_list">
    用户列表
  </div>
</template>

<script>
  import actions from "./action.js"
  import getters from "./getter.js"
  export default {
    name: 'user_list',
    computed: {...getters},
    methods: {...actions},
    created: () => this.init(),
    destroyed: () => this.clear()
  }
</script>
