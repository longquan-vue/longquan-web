<style lang="less">
  .messageDetail {
    padding-bottom: 50px;;

  .messageDetailTitle {

  h2 {
    font-size: 30px;
    color: #333333;
    margin: 40px 0 20px 0;
  }

  p {
    font-size: 14px;
    color: #818181;
    line-height: 40px;
    border-bottom: 1px solid #E7E7E7;

  i {
    float: right;
  }

  }
  }
  .messageDetailCont {
    padding-top: 20px;
    min-height: 600px;
    line-height: 25px;
    font-size: 14px;
    color: #666;

  .messageDetailCont-mess {

  p {
    margin-bottom: 20px;
  }

  }
  .messageDetailCont-down {
    font-size: 14px;
    color: #333;
    margin: 40px 0;

  a {
    color: #007ee8;
    cursor: pointer
  }

  }
  img {
    max-width: 100%;
    display: block;
    margin: auto
  }

  }
  .messageDetailContPage {
    margin: 20px 0;

  a:nth-child(1) {
    float: left;
    color: #818181;
    font-size: 14px;
    cursor: pointer;
  }

  a:nth-child(2) {
    float: right;
    color: #818181;
    font-size: 14px;
    cursor: pointer;
  }

  a:hover {
    color: #BC0000;
  }

  }

  }
</style>
<template>
  <div class="newsDetail" style="padding-top:20px;">
    <div class="the-place" style="">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻动态{{data.type}}</el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wzzy-sub-content">
      <div class="messageDetail">
        <div class="messageDetailTitle">
          <h2>{{data.title}}</h2>
          <p>
            <span>文章来源：发布者所属机关部门  &nbsp;&nbsp;&nbsp; {{date3Filter(data.created)}}  </span>
            <i>点击次数：<em style="color:#333;">{{data.num}}</em></i>
          </p>
        </div>
        <div class="messageDetailCont">
          <div class="messageDetailCont-mess" v-html="decode(data.content)"></div>
          <div class="messageDetailCont-down" v-for="(file,index) in data.files" :key="index">
            <span>附件：{{file.name}}.{{file.suffix}}</span>
            <a :href="file.url" target="_blank">下载 ↓</a>
          </div>
        </div>
        <div class="messageDetailContPage">
          <a>上一篇：职工劳动竞赛收官之战工会知识竞功举行...</a>
          <a>下一篇：职工劳动竞赛收官之战工会知识竞功举行...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  export default{
    computed: {
      ...mapGetters(['data']),
    },
    methods: {
      ...mapActions(['go', 'clear', 'getArticle']),
      ...filters,
    },
    created () {
      this.getArticle();
    },
    destroyed(){
      this.clear()
    }
  }
</script>
