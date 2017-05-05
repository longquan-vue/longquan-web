<template>
  <div class="wzzy-tab">
    <div class="wzzy-tab-head">
      <div class="tab-head-title">
        <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
        <span><i class="iconfont icon-youqinglianjie"></i> 友情链接</span>
      </div>
      <div class="tab-head-btn">
        <a v-for="(val,key) in articleType.link" :class="{'active':activeName==key}" @click="activeName = key">{{val}}</a>
      </div>
    </div>

    <div class="wzzy-tab-cont" style="position:relative;">
      <transition-group enter-active-class="animated fadeIn" leave-active-class="pos">
        <div class="aboutsLink" v-for="(list,key) in newsList" v-show="activeName==key" :key="key">
          <a :herf="urlFilter(item.url)" target="_blank" v-for="(item,index) in list">{{item.name}}</a>
        </div>
      </transition-group>
    </div>

  </div>
</template>
<style lang="less">
  .aboutsLink{
    padding: 20px 0 40px 0;overflow: hidden;
  a{ cursor: pointer;padding: 4px 8px;border: 1px solid #E7E7E7;font-size: 14px;color: #333333;float: left;margin-right: 20px;
    margin-bottom: 15px;}
  }
  .pos{ position:absolute;left:0;top:0;width: 100%;}
</style>
<script type="es6">
  import {mapGetters} from 'vuex'
  import filters from '../../../filters'
  import {findLinkApi} from '../../../api/systemApi'
  export default{
    data(){
      return {
        activeName: '',
        newsList: {},
      }
    },
    watch: {
      articleType(){
        this.getNews()
      }
    },
    computed: {
      ...mapGetters(['articleType']),
    },
    methods: {
      ...filters,
      getNews(){
        if (!this.articleType.link) {
          return
        }
        const keys = Object.keys(this.articleType.link);
        this.activeName = keys[0];
        keys.map((key) => {
          findLinkApi({page: 1, filed: ['type'], keyWord: [key]}).then((data) => this.$set(this.newsList, key, data.list));
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

