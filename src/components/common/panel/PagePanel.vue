<style lang="less" scoped>
  @import "style.less";
</style>

<template>
  <div class="panel panel-default" :style="boxStyle">
    <div class="panel-heading" v-if="!noHead">
      <slot name="head">
        <h3 class="panel-title">
          {{title}}
        </h3>
      </slot>
      <div class="panel-head-btn">
        <slot name="headBtn"></slot>
      </div>
    </div>
    <div class="panel-body" :style="bodyStyle">
      <slot></slot>
    </div>
    <div ref="footer" v-show="hasFooter" class="panel-footer">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'PagePanel',
    props: {
      title: {
        type: String
      },
      margin: {
        type: [String, Number],
        default: '10px 0'
      },
      padding: {
        type: [String, Number],
        default: 0
      },
      width: {
        type: [String, Number]
      },
      minWidth: {
        type: [String, Number]
      },
      maxWidth: {
        type: [String, Number]
      },
      noHead: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        hasFooter: false
      }
    },
    mounted () {
      if (this.$refs.footer.childElementCount > 0) {
        this.hasFooter = true
      }
    },
    created () {
      const {margin, width, minWidth, maxWidth, padding} = this
      this.boxStyle = {
        margin,
        width,
        minWidth,
        maxWidth
      }
      this.bodyStyle = {
        padding
      }
    }
  }
</script>

