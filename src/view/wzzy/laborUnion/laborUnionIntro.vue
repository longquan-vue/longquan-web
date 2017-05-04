<style lang="less">
</style>
<template>
  <div class="laborUnionIntro" v-html="decode(setting.introduce)"></div>
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
