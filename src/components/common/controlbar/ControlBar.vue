<style lang="less">
  @import "ControlBar.less";
</style>

<template>
  <flex-container :class="['my-control-bar',{'my-control-bar-border':border}]" justify-content="space-between">
    <!--default-->
    <slot>
    </slot>
    <!--left-->
    <flex-item class="my-control-bar-left-item">
      <slot name="left">
      </slot>
    </flex-item>
    <!--center-->
    <flex-item class="my-control-bar-center-item">
      <slot name="center">
      </slot>
    </flex-item>
    <!--right-->
    <flex-item class="my-control-bar-right-item">
      <slot name="right">
      </slot>
    </flex-item>
  </flex-container>
</template>

<script type="text/babel">
  import FlexContainer from '../flex/FlexContainer.vue'
  import FlexItem from '../flex/FlexItem.vue'

  export default {
    name: 'ControlBar',
    components: {
      FlexContainer,
      FlexItem,
    },
    props: {
      border: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {}
    },
    mounted () {
    },
    created () {
    }
  }
</script>

