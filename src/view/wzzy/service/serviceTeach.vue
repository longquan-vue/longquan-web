<style lang="less">

</style>
<template>
  <div class="wzzyLaborUnion">
    <div class="pagewrap">
      <div class="wzzy-content">
        <div class="grid-left">
          <div class="the-place" style="">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/view/wzzy/service/1/0' }">工会服务</el-breadcrumb-item>
              <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>{{name}}</a></div>
          <transition-group name="move" mode="out-in">
            <serviceRecruit v-if="'1' == params.idx" :newsList="newsList[params.type]" key="0"></serviceRecruit>
            <service v-for="(v,k) in articleType.service" :key="k" v-if="k == params.type" :newsList="newsList[k]"/>
          </transition-group>
          <MyPagination :method="getNews" style="margin:30px 0;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {findArticleApi} from '../../../api/articleApi'
  import {findRecruitApi} from '../../../api/recruitApi'
  import service from './service.vue'
  import serviceRecruit from './serviceRecruit.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  export default{
    data(){
      return {
        newsList: {}
      }
    },
    components: {service, MyPagination,serviceRecruit},
    computed: {
      ...mapGetters(['page', 'articleType', 'params']),
      name(){
        if (this.params.idx == '1') {
          return '招聘信息'
        }
        return this.articleType.service && this.articleType.service[this.params.type].name
      }
    },
    methods: {
      ...mapActions(['changePage']),
      getNews(){
        const type = this.params.type;
        const success = (data) => {
          this.$set(this.newsList, type, data.list)
          delete data.list;
          this.changePage(data)
        }
        if (this.params.idx == '1') {
          findRecruitApi({...this.page}).then(success)
        } else {
          findArticleApi({...this.page, filed: ['subType'], keyWord: [type]}, 0, this.params.idx).then(success);
        }
      }
    },
    // beforeRouteUpdate (to, from, next) {
    //   next();
    //   this.getNews()
    // },
    created () {
      // this.getNews();
    },
  }
</script>
