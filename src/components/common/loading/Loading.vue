<style lang="less" scoped>
  @import "loading.less";
</style>

<template>
  <!-- 路由外链 -->
  <div class="all" v-if="false">
    <div class="loadding">
      <span class="loadding-text">正在加载</span>
    </div>
  </div>
</template>

<script type="text/babel">
  import getters from '../../../store/getters/loading.js'
  export default {
    name: 'Loading',
    vuex: {
      getters
    },
    data () {
      return {
        isShow: false
      }
    },
    watch: {
      loadingNum (val, oldVal) {
        if (val === 1 && oldVal === 0) {
          this.showTimeoutId = setTimeout(() => {
            this.isShow = true
          }, 300)
        } else if (val === 0) {
          clearTimeout(this.showTimeoutId)
          this.isShow = false
        }
      }
    }
  }
</script>
