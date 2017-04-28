<style lang="less">
    .newsMess{
        li{ overflow: hidden;padding: 20px 0;border-bottom: 1px solid #E7E7E7;}
    }
    .newsMessImg{ width: 240px;height: 136px;position: relative;float: left;margin-right: 20px;}
    .newsMessCont{
        h2{ font-size: 18px;color: #333333;margin-bottom: 10px;
            a{ color: #333;}
            a:hover{ color: #BC0000;}
        }
        p{ color: #999;margin-bottom: 15px;font-size: 14px;}
        div{ color: #999;font-size: 14px;line-height: 25px;}
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
                                    <el-breadcrumb-item>基层动态</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-xinwendongtai"></i>基层动态</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="newsMess">
                                    <li v-for="i in 15" :key="i">
                                        <div class="newsMessImg" v-if="i!=3">
                                            <router-link to="" class="block-link" >
                                                <img :src="'../../../../static/wx/img/'+i+'.jpg'">
                                            </router-link>
                                        </div>
                                        <div class="newsMessCont">
                                            <h2><router-link to="">{{i}}、中央第五环境保护督察组向重庆市反馈督察情况</router-link></h2>
                                            <p>2016-04-15  10:30</p>
                                            <div>3月9日下午，由市委宣传部、市卫计委、市总工会、市商务委、市工商联等部门组成的成都市创建厂务公开民主管理示范单位复查验收组一行在区总工会、区卫计局等部门的参与下到我区2家成都市厂务公开民主管理示范创建申报单位（四川省远大专用凭...</div>
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
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
