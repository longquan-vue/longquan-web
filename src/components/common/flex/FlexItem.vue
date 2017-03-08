<style lang="less" scoped>
</style>

<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'FlexItem',
    props: {
      order: null,
      flexGrow: null,
      flexShrink: null,
      flexBasis: null,
      flex: null,
      alignSelf: null,
    },
    computed: {
      styles () {
        const {order, flexGrow, flexShrink, flexBasis, flex, alignSelf} = this
        return {order, flexGrow, flexShrink, flexBasis, flex, alignSelf}
      }
    },
  }
</script>

