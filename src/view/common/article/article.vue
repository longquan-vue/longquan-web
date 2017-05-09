<style lang="less" scoped>
</style>
<template>
  <div class="fwh-article" style="background-color: #F0F0F0;height: 100%;overflow: scroll">
    <articleDetail :data="data"/>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  import articleDetail from './messDetail.vue'
  export default{
    data(){
      return {}
    },
    components: {
      articleDetail
    },
    computed: {
      ...mapGetters(['data', 'articleType']),
    },
    methods: {
      ...mapActions(['go', 'clear', 'getArticle']),
      ...filters,
    },
    created () {
      this.getArticle();
    },
    destroyed(){
      this.clear()
    }
  }
</script>
