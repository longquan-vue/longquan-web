<style lang="less">
  .newsAct {
    .newsAct-card {
      position: relative;
      margin-bottom: 20px;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      &:hover {
        -webkit-box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
        -moz-box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
        box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
      }
      img {
        width: 100%;
        height: 160px;
        z-index: 2;
      }
      .newsAct-card-box {
        padding: 20px;
        background-color: #ffffff;
        -webkit-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
        h2 {
          font-size: 16px;
          color: #333333;
          margin-bottom: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        div {
          font-size: 14px;
          color: #999999;
          margin-bottom: 15px;
          height: 60px;
          overflow: hidden;
          text-align: justify;
        }
        p {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
</style>
<template>
  <div class="wzzyLaborUnion" style="padding-top:20px;">
    <div class="pagewrap">
      <div class="wzzy-content">
        <el-row :gutter="30">
          <el-col :span="17">
            <div class="grid-left">
              <div class="the-place">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
                  <el-breadcrumb-item>{{articleType.activity && articleType.activity[params.type]}}</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{articleType.activity && articleType.activity[params.type]}}</a></div>
              <div class="wzzy-sub-content">
                <div class="newsAct">
                  <el-row :gutter="15">
                    <el-col :span="8" :key="index" v-for="(item,index) in newsList[params.type]">
                      <div class="newsAct-card">
                        <img :src="item.picUrl">
                        <div class="newsAct-card-box">
                          <h2>{{item.title}}</h2>
                          <div v-html="limitFilter(strFilter(decode(item.content)),45)"></div>
                          <p>{{date3Filter(item.created)}}</p>
                        </div>
                        <router-link to="" class="block-link"></router-link>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-right grid-right-sub">
              <tip></tip>
              <lastDynamic></lastDynamic>
              <someIcon></someIcon>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  import tip from '../components/tips.vue'
  import someIcon from '../components/someIcon.vue'
  import lastDynamic from '../components/lastDynamic.vue'
  import {findArticleApi} from '../../../api/articleApi'
  export default{
    data(){
      return {
        newsList: {}
      }
    },
    components: {
      tip, someIcon, lastDynamic
    },
    computed: {
      ...mapGetters(['page', 'list', 'articleType', 'params']),
    },
    methods: {
      ...mapActions(['go', 'clear', 'getMine', 'changePage']),
      ...filters,
      getNews(){
        const type = this.params.type
        findArticleApi({
          page: 1,
          pageSize: 10,
          filed: ['subType'],
          keyWord: [type]
        }, 0, 7).then((data) => this.$set(this.newsList,type,data.list));
      }
    },
    beforeRouteUpdate (to, from, next) {
      next();
      this.getNews()
    },
    created () {
      this.getNews();
    },
    destroyed(){

    }
  }
</script>
