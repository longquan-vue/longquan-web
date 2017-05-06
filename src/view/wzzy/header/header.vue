<style lang="less">
  @import "./header.less";
</style>
<template>
  <div class="wzzy-header">
    <div class="header-date pagewrap">
      <span>
          欢迎访问成都市龙泉驿区总工会网站！今天是:{{today}}
        <iframe style="vertical-align: middle;" allowtransparency="true" frameborder="0" width="190" height="40" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=1&v=0&d=1&bd=0&k=000000&f=000000&q=1&e=0&a=1&c=56294&w=180&h=36&align=left"></iframe>
      </span>
      <a @click="changeSys({qrcode:true})" v-if="!login.id">登录</a>
      <div v-if="login.id" class="my-login" @mouseenter="showLogin" @mouseleave="closeLogin(false)">
        <a>欢迎您，{{login.name}}</a>
        <div class="my-login-box" v-show="showLoginBox" @mouseenter="showLogin">
          <img :src="login.headimgurl">
          <h2>{{login.name}}</h2>
          <p>我的积分</p>
          <div>{{login.score}}</div>
          <p><a @click="closeLogin(true)">退出登录</a></p>

        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="pagewrap">
        <div class="header-title">
          <img class="header-logo" src="../../../../static/wzzy/www.png">
          <div class="header-search">
              <el-select v-model="select" placeholder="请选择...">
                <el-option label="站内搜索" :value="1"></el-option>
                <el-option label="站外搜索" :value="2"></el-option>
              </el-select>
              <input placeholder="输入搜索关键字" class="search_ipt" v-model="searchInput" @keyup.enter="searchFun">
              <el-button icon="search" @click="searchFun"></el-button>
          </div>
        </div>
        <div class="header-menu">
          <el-row :gutter="20">
            <el-col :span="3" v-for="(item,index) in menu" :key="index">
              <a @click="go(item)" class="menu-a" :class="{'active':item.name==active}" @mouseover="()=>{child=item;$set(child,'show',true)}" @mouseout="child.show=false">{{item.title}}</a>
            </el-col   >
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
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  import moment from 'moment'
  import menu from '../../../router/menu'
  export default{
    name: 'wzzyHeader',
    data(){
      return {
        searchInput: '',
        select: 1,
        idx: 1,
        show: false,
        menu: menu.wzzy,
        child: {},
        showLoginBox: false,
        timer: null,
        searchSrc:'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
      }
    },
    components: {
      moment
    },
    watch:{
      path(newval,val){
        console.log(val);
        console.log(newval);
        if (newval !='/view/wzzy/search'){
          this.searchInput= '';
        }
      }
    },
    computed: {
      ...mapGetters(['path', 'articleType', 'login','query']),
      today(){
        return moment(new Date()).format('YYYY年MM月DD日')
      },
      active(){
        return this.path.split('/')[3]
      },
    },
    methods: {
      ...mapActions(['toUrl', 'clear', 'getMine', 'changePage', 'changeSys', 'getSetting', 'loginOut','search']),
      ...filters,
      showSub(index){
        this.idx = index;
        this.show = true;
      },
      go(item){
        let url;
        if (item.url) {
          url = item.url;
        } else {
          const it = item.children[0];
          if (it.type) {
            url = it.path + Object.keys(this.articleType[it.type])[0]
          } else if (it.href) {
            url = it.href;
          } else {
            url = it.url
          }
        }
        this.toUrl({path: url})
      },
      showLogin(){
        clearTimeout(this.timer);
        this.showLoginBox = true;
      },
      closeLogin(flag){
        if (flag){
          this.loginOut(true);
        }
        this.timer = setTimeout(() => {
          this.showLoginBox = false;
        }, 300)
      },
      searchFun(){
        if (this.select == 1){
          this.search(this.searchInput);
          if(this.path != '/view/wzzy/search'){
            this.toUrl({path:'/view/wzzy/search'});
          }
          this.toUrl({query:{keyWord:this.searchInput}});
        }else if (this.select == 2 && this.searchInput){
            window.open(this.searchSrc+this.searchInput);
        }
      }
    },
    created () {
      this.getSetting();
      this.getMine();
      if (this.path == '/view/wzzy/search'){
        this.searchInput = this.query.keyWord || '';
      }
    },
    destroyed(){

    }
  }
</script>
