<style lang='less' scoped>
  @import "./MyNav.less";
</style>

<template>
  <div class="my-nav">
      <slot>{{title}}</slot>
  </div>
</template>

<script type='text/babel'>
  export default {
    name: 'MyNav',
    props: {
      title: {
        type: String
      }
    },
  }
</script>

