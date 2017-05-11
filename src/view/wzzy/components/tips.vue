<template>
  <div class="wzzy-tab">
    <div class="wzzy-tab-head">
      <div class="tab-head-title">
        <img class="tab-head-title-img" src="/static/wzzy/wzzy-tab.png">
        <span><i class="iconfont icon-gongshigonggao"></i> 公示公告 </span>
      </div>
      <a class="tab-head-more" @click="toUrl({path:'/view/wzzy/news/0/0'})">更多 > </a>
    </div>
    <div class="wzzy-tab-cont">
      <div class="border-content" style="border-top: none;height: 220px;">
        <div class="wzzy-tab-cont-list">
          <transition-group name="flip-tip" tag="p">
            <a class="flip-tip-item" @click="toUrl({path:'/view/wzzy/messageDetail/'+item.id})" v-for="(item,index) in tipsList" style="margin-bottom: 12px;" :key="item"><span>{{item.title}}</span> <i>{{MMddFilter(item.created)}}</i></a>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .flip-tip-item {
    transition: transform 0.8s;
  }
  .flip-tip-enter,.flip-tip-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  /*.flip-tip-leave-active {*/
    /*position: absolute;*/
  /*}*/
</style>
<script type="es6">
  import {mapActions} from 'vuex'
  import filters from '../../../filters'
  import {findArticleApi} from '../../../api/articleApi'
  export default{
    data(){
      return {
        tipsList: [],
      }
    },
    methods: {
      ...mapActions(['toUrl']),
      ...filters,
    },
    mounted(){

    },
    created () {
      findArticleApi({
        page: 1,
        pageSize: 10,
      }, 0, 0).then((data) => this.tipsList = data.list);
      setInterval(() => {
        this.tipsList = [...this.tipsList.filter((item, index) => index > 0), this.tipsList[0]];
      }, 3000)
    },
    destroyed(){

    }
  }
</script>

