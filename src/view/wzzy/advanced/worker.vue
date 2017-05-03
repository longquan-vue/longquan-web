<style lang="less">

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
                                    <el-breadcrumb-item>先进人物</el-breadcrumb-item>
                                    <el-breadcrumb-item>优秀职工</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>优秀职工</a></div>
                            <div class="wzzy-sub-content">
                                <div class="modelWorker">
                                    <el-row :gutter="10">
                                        <el-col :span="6" v-for="(item,index) in newsList" :key="index">
                                            <div class="img-card">
                                                <img :src="item.picUrl">
                                                <div class="card-bg">
                                                    <h2>{{item.title}}</h2>
                                                    <p v-html="limitFilter(strFilter(decode(item.content)),45)"></p>
                                                    <router-link :to="'/view/wzzy/workerDetail/'+item.id">查看详情</router-link>
                                                </div>
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
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                newsList: [],
            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','list','articleType']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
            getNews(){
                findArticleApi({
                    page: 1,
                    pageSize: 4,
                    filed: ['subType'],
                    keyWord: ['1493121726821']
                }, 0, 1).then((data) => {
                    console.log('data.list',data.list);
                    this.newsList = data.list;
                });

            }
        },
        created () {
            this.getNews();
        },
        destroyed(){

        }
    }
</script>
