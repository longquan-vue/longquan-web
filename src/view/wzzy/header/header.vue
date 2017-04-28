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
                        <el-col :span="3" v-for="(item,index) in menu" :key="index">
                            <a @click="toUrl({path:item.children?item.url+item.children[0].url:item.url})" class="menu-a" :class="{'active':item.name==active}" @mouseover="()=>{child=item;$set(child,'show',true)}" @mouseout="child.show=false">{{item.title}}</a>
                        </el-col>
                    </el-row>
                </div>
                <div class="header-menu-sub" v-show="child.show && child.children" @mouseover="child.show=true" @mouseout="child.show=false">
                    <el-row :gutter="20">
                        <el-col :span="3" v-for="(item,index) in child.children" :key="index">
                            <!--<a @click="toUrl({path:child.url+item.url})" :class="['menu-a',{'active':path==child.url+item.url}]">{{item.name}}</a>-->
                            <router-link :to="child.url+item.url" :class="['menu-a',{'active':path==child.url+item.url}]" v-if="item.name!='市民服务'">{{item.name}}</router-link>
                            <a href="http://www.ichuangye.cn" target="_blank" class="" v-if="item.name=='市民服务'">市民服务</a>
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
    import menu from '../../../router/menu'
    export default{
        name:'wzzyHeader',
        data(){
            return{
                input5: '',
                select:'',
                idx:1,
                show:false,
                menu:menu.wzzy,
                child:{}
            }
        },
        components:{
            moment
        },
        computed: {
            ...mapGetters([ 'page','list','path']),
            today(){
                return moment(new Date()).format('YYYY年MM月DD日')
            },
            active(){
                return this.path.split('/')[3]
            },
        },
        methods:{
            ...mapActions(['toUrl','clear','getMine','changePage']),
            ...filters,
            showSub(index){
                this.idx = index;
                this.show = true;
            }
        },
        created () {
            console.log(moment(new Date()).format())
        },
        destroyed(){

        }
    }
</script>
