<style lang="less">
    @import "./header.less";
</style>
<template>
    <div class="wzzy-header">
        <div class="header-date pagewrap">
            <span>
                欢迎访问成都市龙泉驿区总工会网站！今天是:{{today}}
            </span>
            <a>登录</a>
        </div>
        <div class="header-nav">
            <div class="pagewrap">
                <div class="header-title">
                    <img class="header-logo" src="../../../../static/wzzy/www.png">
                    <div class="header-search">
                        <el-input placeholder="请输入内容" v-model="input5">
                            <el-select v-model="select" slot="prepend" placeholder="请选择">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                            <el-button slot="append" icon="search"></el-button>
                        </el-input>
                    </div>
                </div>
                <div class="header-menu">
                    <el-row :gutter="20">
                        <el-col :span="3">
                            <router-link to="" class="menu-a active" :class="">首页</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">机构介绍</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">新闻动态</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">办事指南</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">工会服务</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">互动交流</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">先进人物</router-link>
                        </el-col>
                        <el-col :span="3">
                            <router-link to="" class="menu-a">文件·资料</router-link>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import moment from 'moment'
    export default{
        name:'wzzyHeader',
        data(){
            return{
                input5: '',
                select:''
            }
        },
        components:{
            moment
        },
        computed: {
            ...mapGetters([ 'page','list']),
            today(){
                return moment(new Date()).format('YYYY年MM月DD日')
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {
            console.log(moment(new Date()).format())
        },
        destroyed(){

        }
    }
</script>