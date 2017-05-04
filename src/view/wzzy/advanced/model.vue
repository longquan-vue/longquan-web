<style lang="less">

</style>
<template>
  <div class="newsAct">
    <el-row :gutter="15">
      <el-col :span="8" v-for="(item,index) in list" :key="index">
        <div class="newsAct-card">
          <img :src="item.picUrl">
          <div class="newsAct-card-box">
            <h2>{{item.title}}</h2>
            <p>{{date3Filter(item.created)}}</p>
          </div>
          <router-link :to="'/view/wzzy/workerDetail/'+item.id" class="block-link"></router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="es6">
  import filters from '../../../filters'
  import {mapActions} from 'vuex'
  export default{
    props: {
      list: Array
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
