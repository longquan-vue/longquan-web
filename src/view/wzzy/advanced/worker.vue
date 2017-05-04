<style lang="less">

</style>
<template>
  <div class="modelWorker">
    <el-row :gutter="10">
      <el-col :span="6" v-for="(item,index) in list" :key="index">
        <div class="img-card">
          <img :src="item.picUrl">
          <div class="card-bg">
            <h2>{{item.title}}</h2>
            <p v-html="limitFilter(strFilter(decode(item.content)),45)"></p>
            <router-link :to="'/view/wzzy/workerDetail/'+item.id">查看详情</router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="es6">
  import filters from '../../../filters'
  export default{
    props: {
      list: Array
    },
    methods:{
      ...filters,
    },
  }
</script>
