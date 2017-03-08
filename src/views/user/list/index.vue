<style lang="less" scoped>
  @import "./style.less";
</style>
<template>
  <div class="user_list">
    用户列表
  </div>
</template>

<script>
  import actions from "./action"
  import getters from "./getter"
  export default {
    name: 'user_list',
    components: {},
    computed: {...getters},
    methods: {...actions},
    created: () => this.init(),
    destroyed: () => this.clear()
  }
</script>
