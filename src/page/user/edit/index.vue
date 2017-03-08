<style type="text/less" scoped>
  @import "index.less";
</style>
<template>
  <div class="user_edit">
    修改用户
  </div>
</template>

<script>
  import actions from "./action.js"
  import getters from "./getter.js"
  export default {
    name: 'hello',
    computed: {...getters},
    methods: {...actions},
    created: () => this.init(),
    destroyed: () => this.clear()
  }
</script>
