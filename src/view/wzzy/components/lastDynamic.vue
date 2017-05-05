<template>
  <div class="wzzy-tab">
    <div class="wzzy-tab-head">
      <div class="tab-head-title">
        <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
        <span><i class="iconfont icon-xinwendongtai"></i> 最新动态 </span>
      </div>
      <a class="tab-head-more" @click="toMore">更多 > </a>
    </div>
    <div class="wzzy-tab-cont">
      <div class="border-content" style="height: 280px;border:none;">
        <div class="wzzy-tab-cont-list">
          <a @click="toUrl({path:'/view/wzzy/messageDetail/'+item.id})" v-for="(item,index) in newsList" style="margin-bottom: 12px;" :key="item"><span>{{item.title}}</span> <i>{{dateFilter(item.created)}}</i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapActions,mapGetters} from 'vuex'
  import filters from '../../../filters'
  import {findArticleApi} from '../../../api/articleApi'
  export default{
    data(){
      return {
        newsList: []
      }
    },
    computed: {
      ...mapGetters(['articleType']),
    },
    methods: {
      ...mapActions(['toUrl']),
      ...filters,
      toMore(){
          this.toUrl({path:'/view/wzzy/news/5/'+Object.keys(this.articleType.info)[0]})
      }
    },
    created () {
      findArticleApi({page: 1, pageSize: 10}, 0, 5).then((data) => this.newsList = data.list);
    },
  }
</script>

