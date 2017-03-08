<style lang="less" scoped>
  @import "./style.less";
</style>
<template>
  <div class="user_edit">
    修改用户
  </div>
</template>

<script>
  import actions from "./action"
  import getters from "./getter"
  export default {
    name: 'user_edit',
    components: {},
    computed: {...getters},
    methods: {...actions},
    created: () => this.init(),
    destroyed: () => this.clear()
  }
</script>
