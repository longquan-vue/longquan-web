<style lang="less">
</style>
<template>
  <div class="laborUnionIntro ql-snow">
    <div class="ql-editor" v-html="decode(setting.introduce)"></div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  export default{
    computed: {
      ...mapGetters(['setting']),
    },
    methods: {
      ...filters,
    },
  }
</script>
