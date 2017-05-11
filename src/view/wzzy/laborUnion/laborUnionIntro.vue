<style lang="less">
  .laborUnionIntro img{ max-width: 100%;}
</style>
<template>
  <div class="laborUnionIntro">
    <div class="ql-editor" style="font-size:16px;" v-html="decode(setting.introduce)"></div>
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
