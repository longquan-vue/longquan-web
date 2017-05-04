<style lang="less">
  .serviceRecruit {
    padding: 40px 0;
    li:not(:first-child) {
      line-height: 60px;height: 60px;font-size: 16px;color: #333;border-bottom: 1px solid #E7E7E7;cursor: pointer;
      &:hover {background-color: #E7E7E7;  }
    }
    .serviceRecruit-head {text-align: center;height: 40px;line-height: 40px;background-color: #F5F5F5;  }
  }
</style>
<template>
  <div class="wzzy-sub-content">
    <div class="serviceRecruit">
      <ul>
        <li class="serviceRecruit-head">
          <el-row>
            <el-col :span="8"> 职位名称</el-col>
            <el-col :span="8"> 招聘企业</el-col>
            <el-col :span="8"> 薪资待遇</el-col>
          </el-row>
        </li>
        <li v-for="(item,index) in newsList" :key="index" @click="go(['recruitDetail',item.id])">
          <el-row>
            <el-col :span="8">{{item.job}}</el-col>
            <el-col :span="8" style="text-align: center;">{{item.company}}</el-col>
            <el-col :span="8" style="text-align: right;"><span style="font-weight: bold;">{{item.pay}}</span> 元/月</el-col>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  import {mapActions} from 'vuex'
  import filters from '../../../filters'
  export default{
    props: {
      newsList: Array
    },
    methods: {
      ...mapActions(['go', 'clear']),
      ...filters,
    },
    destroyed(){
      this.clear()
    }
  }
</script>
