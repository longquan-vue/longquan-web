<style lang="less">
  .newsAct {
    .newsAct-card {
      position: relative;
      margin-bottom: 20px;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      &:hover {
        -webkit-box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
        -moz-box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
        box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
      }
      img {
        width: 100%;
        height: 160px;
        z-index: 2;
      }
      .newsAct-card-box {
        padding: 20px;
        background-color: #ffffff;
        -webkit-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
        h2 {
          font-size: 16px;
          color: #333333;
          margin-bottom: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        div {
          font-size: 14px;
          color: #999999;
          margin-bottom: 15px;
          height: 60px;
          overflow: hidden;
          text-align: justify;
        }
        p {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
</style>
<template>
  <div class="newsAct">
    <el-row :gutter="15">
      <el-col :span="8" :key="index" v-for="(item,index) in newsList">
        <div class="newsAct-card">
          <img :src="item.picUrl">
          <div class="newsAct-card-box">
            <h2>{{item.title}}</h2>
            <div v-html="limitFilter(strFilter(decode(item.content)),45)"></div>
            <p>{{date3Filter(item.created)}}</p>
          </div>
          <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link"></router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  export default{
    props:{
      newsList:Array,
    },
    methods: {
        ...mapActions(['clear']),
      ...filters,
    },
    destroyed(){
        this.clear()
    }
  }
</script>
