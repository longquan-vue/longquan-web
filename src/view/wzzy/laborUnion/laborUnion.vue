<style lang="less">
  @import "./introduce.less";
</style>
<template>
  <div class="wzzyLaborUnion page" style="padding-top:20px;">
    <div class="the-place">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '1' }">机构介绍</el-breadcrumb-item>
        <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{pathName}}</a></div>
    <div class="wzzy-sub-content">
      <transition-group name="move" mode="out-in">
        <laborUnionIntro v-if="active==1" :key="active"/>
        <laborUnionLeader v-if="active==2" :key="active"/>
        <laborUnionSet v-if="active==3" :key="active"/>
      </transition-group>
    </div>
  </div>
</template>

<script type="es6">
  import laborUnionIntro from './laborUnionIntro.vue'
  import laborUnionLeader from './laborUnionLeader.vue'
  import laborUnionSet from './laborUnionSet.vue'
  export default{
    components: {
      laborUnionIntro, laborUnionLeader, laborUnionSet
    },
    computed: {
      active(){
        return this.$route.path.replace('/view/wzzy/laborUnion/', '');
      },
      pathName(){
        switch (this.active) {
          case '1':
            return '区总介绍';
          case '2':
            return '区总领导';
          case '3':
            return '组织机构';
        }
      }
    },
  }
</script>
