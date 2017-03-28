<style lang="less">
  @import './recover.css';
</style>
<template>
  <div class="recover">
      <div class="title"><span>回收站</span></div>
      <el-menu :default-active="onRoutes" class="el-menu-demo mgb20" mode="horizontal" router>
          <el-menu-item index="recruitment">招聘信息管理</el-menu-item>
          <el-menu-item index="activity">活动管理</el-menu-item>
          <el-menu-item index="health">健身中心管理</el-menu-item>
          <el-menu-item index="redenvelope">红包福利</el-menu-item>
      </el-menu>
      <div class="recoverCont">
          <transition name="slideDown" mode="out-in"><router-view></router-view></transition>
      </div>
  </div>
</template>
<script type="es6">
  export default {
    data() {
      return {
        activeIndex2:'1'
      }
    },
    components: {

    },
    computed: {
      onRoutes(){
        // console.log(this.$route.path.replace('/view/recover/',''));
        return this.$route.path.replace('/view/recover/','');
      }
    },
    methods: {
      /*handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }*/
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

