<style lang="less">
  .fileBox {
    padding: 40px 0;
  }

  .fileList {
    margin-bottom: 30px;
  }

  .fileListHead {
    overflow: hidden;
    border-bottom: 1px solid #E7E7E7;
    padding-bottom: 5px;
    line-height: 20px;;

  span {
    font-size: 16px;
    color: #BC0000;
    border-bottom: 2px solid #BC0000;
    padding-bottom: 6px
  }

  a {
    float: right;
    cursor: pointer;
    color: #999
  }

  }
  .fileListCont {
    padding: 20px;height: 196px;;
    border: 1px solid #E7E7E7;
    border-top: none;
  }
</style>
<template>
  <div class="wzzyLaborUnion" style="padding-top:20px;">
    <div class="pagewrap">
      <div class="wzzy-content">
        <el-row :gutter="30">
          <el-col :span="24">
            <div class="grid-left">
              <div class="the-place" style="">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>文件·资料</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="fileBox">
                <el-row :gutter="20">
                  <el-col :span="8" v-for="(val,key) in articleType.file" :key="key">
                    <div class="fileList">
                      <div class="fileListHead">
                        <span><i class="iconfont icon-xinwendongtai"></i> {{val}}</span>
                        <a @click="toUrl({path:'/view/wzzy/filesList/'+key})">更多 ></a>
                      </div>
                      <div class="fileListCont">
                        <pubListA v-for="(item,index) in newsList[key]" :key="index" :item="item"></pubListA>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {findArticleApi} from '../../../api/articleApi'
  import filters from '../../../filters'
  import pubListA from '../components/lista.vue'
  export default{
    data(){
      return {
        newsList: {}
      }
    },
    components: {
      pubListA
    },
    computed: {
      ...mapGetters(['page', 'list', 'articleType']),
    },
    watch:{
      articleType(){
         this.getNews()
      }
    },
    methods: {
      ...mapActions(['toUrl', 'clear', 'getMine', 'changePage']),
      ...filters,
      getNews(){
          if(!this.articleType.file){
              return;
          }
        const keys = Object.keys(this.articleType.file);
        keys.map((key) => {
          findArticleApi({
            page: 1,
            pageSize: 5,
            filed: ['subType'],
            keyWord: [key]
          }, 0, 4).then((data) => this.$set(this.newsList, key, data.list));
        })
      }
    },
    created () {
      this.getNews()
    },
    destroyed(){

    }
  }
</script>
