<style lang="less">
  .searchBox{
    padding: 40px 0;
    .searchBoxHead{
      line-height: 40px;border-bottom: 1px solid #E7E7E7;
      span{ font-size: 25px;margin-right: 30px;}
      i{ color: #ffcd42;font-size: 14px;}
    }
  }
  .nomess{ text-align: center;font-size: 24px;padding: 100px 0;}
</style>
<template>
  <div class="searchBox" style="padding-top:20px;">
      <div class="searchBoxHead">
          <span>搜索结果</span>  共 <i>{{page.total}}</i> 条
      </div>
      <div class="searchBoxCont">
        <newsItem v-for="(item,i) in list" :item="item" :key="i"/>
      </div>
      <div class="nomess" v-if="list.length == 0">暂无数据</div>
      <MyPagination :method="()=>search(query.keyWord)" style="margin:30px 0;"/>
  </div>
</template>

<script type="es6">
  import newsItem from './newsItem.vue'
  import {mapGetters, mapActions} from 'vuex'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  export default{
    components: {
      newsItem,MyPagination
    },
    computed: {
      ...mapGetters(['list','page', 'query']),
    },
    methods: {
      ...mapActions(['search','clearPage']),
    },
    created () {
      // if(!this.list || this.list.length < 1){
      //   this.search(this.query.keyWord)
      // }
    },
    destroyed(){
      this.clearPage();
    }
  }
</script>

