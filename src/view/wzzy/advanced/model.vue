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
                                    <el-breadcrumb-item :to="{ path: '1' }">先进人物</el-breadcrumb-item>
                                    <el-breadcrumb-item>劳模风采</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>劳模风采</a></div>
                            <div class="wzzy-sub-content">
                                <div class="newsAct">
                                    <el-row :gutter="15">
                                        <el-col :span="8" v-for="(item,index) in newsList" :key="index">
                                            <div class="newsAct-card">
                                                <img :src="item.picUrl">
                                                <div class="newsAct-card-box">
                                                    <h2>{{item.title}}</h2>
                                                    <p>{{date3Filter(item.created)}}</p>
                                                </div>
                                                <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link"></router-link>
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
                    keyWord: ['1493121733116']
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
