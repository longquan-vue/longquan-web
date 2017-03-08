<style lang="less" scoped>
</style>

<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'FlexContainer',
    props: {
      display: {
        default: 'flex'
      },
      flexDirection: null,
      flexWrap: null,
      flexFlow: null,
      justifyContent: null,
      alignItems: null,
      alignContent: null,
    },
    computed: {
      styles () {
        const {display, flexDirection, flexWrap, flexFlow, justifyContent, alignItems, alignContent} = this
        return {display, flexDirection, flexWrap, flexFlow, justifyContent, alignItems, alignContent}
      }
    },
  }
</script>

