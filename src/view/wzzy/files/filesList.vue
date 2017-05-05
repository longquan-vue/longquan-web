<style lang="less">

</style>
<template>
  <div class="wzzyLaborUnion page" style="padding-top:20px;">
    <div class="the-place">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '1' }">文件资料</el-breadcrumb-item>
        <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{name}}</a></div>
    <div class="wzzy-sub-content">
      <transition name="move" mode="out-in">
        <filesComponents :newsList="newsList[params.type]"/>
      </transition>
    </div>
    <MyPagination :method="getNews"/>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {findArticleApi} from '../../../api/articleApi'
  import filesComponents from './filesComponents.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  export default{
    data(){
      return {
        newsList:{}
      }
    },
    components:{
      filesComponents,MyPagination
    },
    computed: {
      ...mapGetters(['page','articleType', 'params']),
      name(){
        return this.articleType.file && this.articleType.file[this.params.type]
      }
    },
    methods: {
      ...mapActions(['toUrl', 'clear', 'changePage']),
      getNews(){
        const key =this.params.type;
        findArticleApi({
          ...this.page,
          filed: ['subType'],
          keyWord: [key]
        }, 0, 4).then((data) => {
          this.$set(this.newsList, key, data.list);
          delete data.list;
          this.changePage(data)
        });
      }
    },
    created () {
      this.getNews()
    },
    destroyed(){
      this.clear();
    }
  }
</script>
