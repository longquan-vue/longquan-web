<style lang="less">
  .searchBox{
    padding: 40px 0;
    .searchBoxHead{
      line-height: 40px;border-bottom: 1px solid #E7E7E7;
      span{ font-size: 25px;margin-right: 30px;}
      i{ color: #ffcd42;font-size: 14px;}
    }
  }
</style>
<template>
  <div class="searchBox" style="padding-top:20px;">
      <div class="searchBoxHead">
          <span>搜索结果</span>  共 <i>10</i> 条
      </div>
      <div class="searchBoxCont">
        <newsItem v-for="i in 10" :key="i"/>
      </div>
  </div>
</template>

<script type="es6">
  import newsItem from './newsItem.vue'
  import {mapGetters, mapActions} from 'vuex'
  export default{
    components: {
      newsItem
    },
    data(){
      return {
        newsList: {},
      }
    },
    computed: {
      ...mapGetters(['page', 'articleType', 'params']),
    },
    methods: {
      ...mapActions(['changePage']),
      getNews(){
        const type = this.params.type;
        // findArticleApi({
        //   ...this.page,
        //   filed: ['subType'],
        //   keyWord: [type]
        // }, 0, 1).then((data) => {
        //   this.$set(this.newsList, type, data.list)
        //   delete data.list;
        //   this.changePage(data)
        // });
      }
    },
    beforeRouteUpdate (to, from, next) {
      next();
      this.getNews()
    },
    created () {
      this.getNews()
    },
  }
</script>

