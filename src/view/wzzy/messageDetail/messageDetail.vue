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

  .messageDetailContImg {
    padding: 15px;

  img {
    width: 480px;
  }

  }
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
        <el-breadcrumb-item>{{typeName}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="subTypeName">{{subTypeName}}</el-breadcrumb-item>
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
          <div v-if="data.picUrl" class="messageDetailContImg"><img :src="data.picUrl"></div>
          <div class="messageDetailCont-mess" v-html="decode(data.content)"></div>
          <div class="messageDetailCont-down" v-for="(file,index) in data.files" :key="index">
            <span>附件：{{file.name}}.{{file.suffix}}</span>
            <a :href="file.url" target="_blank">下载 ↓</a>
          </div>
        </div>
        <div class="messageDetailContPage">
          <a @click="toUrl({path:data.last})" v-if="data.last">上一篇：{{data.lastTitle}}</a>
          <a @click="toUrl({path:data.next})" v-if="data.next">下一篇：{{data.nextTitle}}</a>
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
      ...mapGetters(['data', 'articleType']),
      typeName(){
        return ['公示公告', '先进人物', '工会服务', '政策法规', '文件资料', '新闻动态', '福利预告', '工会活动', '办事指南', '内部通知'][this.data.type]
      },
      subTypeName(){
        const type = this.articleType[['', 'advanced', 'service', '', 'file', 'info', '', 'activity', 'guide', ''][this.data.type]]
        return type ? (type[this.data.subType].name || type[this.data.subType]) : null
      }
    },
    methods: {
      ...mapActions(['go', 'setData', 'getArticle', 'toUrl']),
      ...filters,
    },
    beforeRouteUpdate (to, from, next) {
      next();
      this.setData()
      this.getArticle()
    },
    created () {
      this.setData()
      this.getArticle();
    },
    destroyed(){
      this.setData()
    }
  }
</script>
