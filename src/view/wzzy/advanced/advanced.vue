<style lang="less">

</style>
<template>
  <div class="wzzyLaborUnion page" style="padding-top:20px;">
    <div class="the-place">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '1' }">先进人物</el-breadcrumb-item>
        <el-breadcrumb-item>{{articleType.advanced && articleType.advanced[params.type].name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{articleType.advanced && articleType.advanced[params.type].name}}</a></div>
    <div class="wzzy-sub-content">
      <transition name="move" mode="out-in">
          <advancedWorker v-if="articleType.advanced && articleType.advanced[params.type].type == 0" :list="newsList[params.type]"></advancedWorker>
          <advancedModel v-if="articleType.advanced && articleType.advanced[params.type].type == 1" :list="newsList[params.type]"></advancedModel>
      </transition>
    </div>
  </div>
</template>

<script type="es6">
  import { mapGetters,mapActions } from 'vuex'
  import filters from '../../../filters'
  import {findArticleApi} from '../../../api/articleApi'
  import advancedModel from './model.vue'
  import advancedWorker from './worker.vue'
  export default{
    components: {
      advancedModel,
      advancedWorker
    },
    data(){
      return {
        newsList: {}
      }
    },
    computed: {
      ...mapGetters(['page', 'list', 'articleType', 'params']),
    },
    methods:{
      ...mapActions(['go','clear','getMine','changePage']),
      ...filters,
      getNews(){
        const type = this.params.type
        findArticleApi({
          page: 1,
          pageSize: 10,
          filed: ['subType'],
          keyWord: [type]
        }, 0, 1).then((data) => this.$set(this.newsList,type,data.list));
      }
    },
    beforeRouteUpdate (to, from, next) {
      next();
      this.getNews()
    },
    created () {
      this.getNews()
    },
  }
</script>
