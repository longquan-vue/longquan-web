<style lang="less">

</style>
<template>
  <div class="wzzyLaborUnion page" style="padding-top:20px;">
    <div class="the-place">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: (articleType.advanced && Object.keys(articleType.advanced)[0]) }">先进人物</el-breadcrumb-item>
        <el-breadcrumb-item>{{articleType.advanced && articleType.advanced[params.type].name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{articleType.advanced && articleType.advanced[params.type].name}}</a></div>
    <div class="wzzy-sub-content">
      <transition name="move" mode="out-in">
        <div v-for="(type,key) in articleType.advanced" :key="key" v-if="key == params.type">
          <advancedWorker v-if="type.type == 0" :list="newsList[key]"></advancedWorker>
          <advancedModel v-if="type.type == 1" :list="newsList[key]"></advancedModel>
        </div>
      </transition>
    </div>
    <MyPagination :method="getNews" style="margin:30px 0"/>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {findArticleApi} from '../../../api/articleApi'
  import advancedModel from './model.vue'
  import advancedWorker from './worker.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  export default{
    components: {
      advancedModel, advancedWorker, MyPagination
    },
    data(){
      return {
        newsList: {}
      }
    },
    computed: {
      ...mapGetters(['page', 'articleType', 'params']),
    },
    methods: {
      ...mapActions(['changePage']),
      getNews(){
        const type = this.params.type;
        findArticleApi({
          ...this.page,
          filed: ['subType'],
          keyWord: [type]
        }, 0, 1).then((data) => {
          this.$set(this.newsList, type, data.list)
          delete data.list;
          this.changePage(data)
        });
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
