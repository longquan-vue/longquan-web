<style lang="less">

</style>
<template>
    <div class="wzzyLaborUnion page" style="padding-top:20px;">
        <div class="the-place">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '1' }">新闻动态</el-breadcrumb-item>
                <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{name}}</a></div>
        <div class="wzzy-sub-content">
            <transition-group name="move" mode="out-in">
                <newsTips v-if="type == '0'" key="0" :newsList="newsList[params.type]"/>
                <newsMess v-for="(v,k) in articleType.info" :key="k" v-if="type == '5' && k == params.type" :newsList="newsList[params.type]"/>
                <newsAct v-for="(v,k) in articleType.activity" :key="k" v-if="type == '7' && k == params.type" :newsList="newsList[params.type]"/>
            </transition-group>
        </div>
        <MyPagination :method="getNews" style="margin:30px 0;"/>
    </div>
</template>

<script type="es6">
    import {mapGetters, mapActions} from 'vuex'
    import {findArticleApi} from '../../../api/articleApi'
    import newsAct from './newsAct.vue'
    import newsTips from './newsTips.vue'
    import newsMess from './newsMess.vue'
    import MyPagination from '../../../components/public/page/MyPagination.vue'
    export default{
        data(){
          return {
              newsList:{}
          }
        },
        components:{
            newsAct,newsTips,newsMess,MyPagination
        },
        computed: {
            ...mapGetters(['page', 'articleType', 'params','path']),
            type(){
                return this.params.idx
            },
            name(){
                if(this.type == '5'){
                    return this.articleType.info && this.articleType.info[this.params.type]
                }
                if(this.type == '7'){
                    return this.articleType.activity && this.articleType.activity[this.params.type]
                }
                return '公示公告'
            }
        },
        methods: {
            ...mapActions(['go','changePage']),
            getNews(){
                const type = this.params.type;
                const param = {...this.page};
                if(this.type != '0'){
                    param.filed = ['subType'];
                    param.keyWord = [type]
                }
                findArticleApi(param, 0, this.type).then((data) => {
                    this.$set(this.newsList,type,data.list);
                    delete data.list;
                    this.changePage(data);
                });
            }
        },
        // beforeRouteUpdate (to, from, next) {
        //     next();
        //     this.getNews()
        // },
        created () {
            // this.getNews();
        },
    }
</script>
