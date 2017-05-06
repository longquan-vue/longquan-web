<style lang="less">
  .newsMessDiv{ padding: 20px 0;border-bottom: 1px solid #E7E7E7;}
</style>
<template>
    <div class="newsMess newsMessDiv">
      <div class="newsMessCont">
        <h2><router-link to="">新闻标题</router-link></h2>
        <p><span style="margin-right:20px;">文章来源:新闻部</span> <span>2017-05-09</span></p>
        <!--<div v-html="limitFilter(strFilter(decode(item.content)),100)"></div>-->
        <div>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
          新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</div>
      </div>
    </div>
</template>
<script type="es6">
  import filters from '../../../filters'
  export default{
    data(){
      return {
      }
    },
    props: {
      title: String,
      content: String,
      isShow: Boolean,
    },
    watch: {

    },
    methods: {
      ...filters,
    }
  }

</script>
