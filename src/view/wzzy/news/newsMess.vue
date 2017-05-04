<style lang="less">
    .newsMess{
        li{ overflow: hidden;padding: 20px 0;border-bottom: 1px solid #E7E7E7;}
    }
    .newsMessImg{ width: 240px;height: 136px;position: relative;float: left;margin-right: 20px;}
    .newsMessCont{
        h2{ font-size: 18px;color: #333333;margin-bottom: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
            a{ color: #333;}
            a:hover{ color: #BC0000;}
        }
        p{ color: #999;margin-bottom: 15px;font-size: 14px;}
        div{ color: #999;font-size: 14px;line-height: 25px;text-align: justify}
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
                                    <el-breadcrumb-item>{{articleType.info && articleType.info[params.type]}}</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-xinwendongtai"></i>{{articleType.info && articleType.info[params.type]}}</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="newsMess">
                                    <li v-for="(item,index) in newsList[params.type]" :key="index">
                                        <div class="newsMessImg">
                                            <router-link to="" class="block-link" >
                                                <img :src="item.picUrl">
                                            </router-link>
                                        </div>
                                        <div class="newsMessCont">
                                            <h2><router-link to="">{{item.title}}</router-link></h2>
                                            <p>{{date3Filter(item.created)}}</p>
                                            <div v-html="limitFilter(strFilter(decode(item.content)),100)"></div>
                                        </div>
                                    </li>
                                </ul>
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
    import { mapGetters, mapActions } from 'vuex'
    import {findArticleApi} from '../../../api/articleApi'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    export default{
        data(){
            return{
              newsList: {}
            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','list','articleType', 'params']),
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
            }, 0, 5).then((data) => this.$set(this.newsList,type,data.list));
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
