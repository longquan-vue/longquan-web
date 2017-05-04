<style lang="less">
    @import "./header.less";
</style>
<template>
    <div class="wzzy-header">
        <div class="header-date pagewrap">
            <span>
                欢迎访问成都市龙泉驿区总工会网站！今天是:{{today}}
            </span>
            <a @click="changeSys({qrcode:true})">登录</a>
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
                            <a @click="go(item)" class="menu-a" :class="{'active':item.name==active}" @mouseover="()=>{child=item;$set(child,'show',true)}" @mouseout="setTimeout(()=>{child.show=false},300)">{{item.title}}</a>
                        </el-col>
                    </el-row>
                </div>
                <div class="header-menu-sub" v-show="child.show && child.children" @mouseover="child.show=true" @mouseout="child.show=false">
                    <el-row :gutter="20">
                        <span v-for="(item,index) in child.children" :key="index">
                          <el-col :span="3" v-if="!item.type">
                            <router-link :to="item.url" :class="['menu-a',{'active':path==item.url}]" v-if="item.url">{{item.name}}</router-link>
                            <a :href="item.href" target="_blank" v-if="item.href">{{item.name}}</a>
                          </el-col>
                          <el-col :span="3" v-for="(val,key) in articleType[item.type]" :key="index+key" v-if="item.type">
                            <router-link :to="item.path+key" :class="['menu-a',{'active':path==item.path+key}]">{{val.name?val.name:val}}</router-link>
                          </el-col>
                          </span>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    import { mapGetters ,mapActions} from 'vuex'
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
            ...mapGetters([ 'page','list','path','articleType']),
            today(){
                return moment(new Date()).format('YYYY年MM月DD日')
            },
            active(){
                return this.path.split('/')[3]
            },
        },
        methods:{
            ...mapActions(['toUrl','clear','getMine','changePage','changeSys','getSetting']),
            ...filters,
            showSub(index){
                this.idx = index;
                this.show = true;
            },
            go(item){
                let url ;
                if(item.url){
                   url = item.url;
                }else{
                  const it = item.children[0]
                  if(it.type){
                   url = it.path + Object.keys(this.articleType[it.type])[0]
                  }else if(it.href){
                      url = it.href;
                  }else{
                      url = it.url
                  }
                }
                this.toUrl({path:url})
            }
        },
        created () {
           this.getSetting()
        },
        destroyed(){

        }
    }
</script>
