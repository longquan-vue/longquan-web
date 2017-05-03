<style lang="less">

</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="pagewrap">
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="17">
                        <div class="grid-left">
                            <div class="the-place" style="">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>办事指南</el-breadcrumb-item>
                                    <el-breadcrumb-item>{{articleType.guide && articleType.guide[params.type].name}}</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-xinwendongtai"></i>{{articleType.guide && articleType.guide[params.type].name}}</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="newTips" v-for="(item,index) in newsList[params.type]" :key="index">
                                    <li><a><span>{{item.title}}</span> <i>{{date3Filter(item.created)}}</i></a></li>
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
    import { mapGetters,mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
              newsList:{}
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
            }, 0, 8).then((data) => this.$set(this.newsList,type,data.list));
          }
        },
        beforeRouteUpdate (to, from, next) {
          next();
          this.getNews()
        },
        created () {
          this.getNews()
        },
        destroyed(){

        }
    }
</script>
