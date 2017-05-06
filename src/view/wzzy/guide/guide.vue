<style lang="less">

</style>
<template>
    <div class="wzzyLaborUnion page" style="padding-top:20px;">
        <div class="the-place">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '1' }">办事指南</el-breadcrumb-item>
                <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{name}}</a></div>
        <div class="wzzy-sub-content">
            <transition-group name="move" mode="out-in">
                <guideBulid v-if="type == '0'" key="0" :newsList="newsList[params.type]"/>
                <guideInfo v-for="(v,k) in articleType.guide" :key="k" v-if="type == '8' && k == params.type" :newsList="newsList[params.type]"/>
            </transition-group>
        </div>
        <MyPagination :method="getNews" style="margin:30px 0;" v-if="type != '0'"/>
    </div>
</template>

<script type="es6">
    import {mapGetters, mapActions} from 'vuex'
    import {findArticleApi} from '../../../api/articleApi'
    import guideInfo from './guideWq.vue'
    import guideBulid from './guideBulid.vue'
    import MyPagination from '../../../components/public/page/MyPagination.vue'
    export default{
        data(){
            return {
                newsList:{}
            }
        },
        components:{
            guideBulid,guideInfo,MyPagination
        },
        computed: {
            ...mapGetters(['page', 'articleType', 'params','path']),
            type(){
                return this.params.idx
            },
            name(){
                if(this.type == '8'){
                    return this.articleType.guide && this.articleType.guide[this.params.type].name
                }
                return '工会组建'
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
