<style lang="less">

</style>
<template>
  <div class="wzzyLaborUnion page6">
    <div class="the-place">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '1' }">互动交流</el-breadcrumb-item>
        <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{pathName}}</a></div>
    <div class="wzzy-sub-content">
      <transition-group name="move" mode="out-in">
        <chatPoll v-if="active==1" :key="active"/>
        <chatQuestion v-if="active==2" :key="active"/>
        <chatEcho v-if="active==3" :key="active"/>
        <chatWx v-if="active==6" :key="active"/>
      </transition-group>
    </div>
  </div>
</template>

<script type="es6">
  import chatEcho from './echo.vue'
  import chatPoll from './poll.vue'
  import chatQuestion from './question.vue'
  import chatWx from './weixin.vue'
  export default{
    components: {
      chatEcho, chatPoll, chatQuestion, chatWx
    },
    computed: {
      active(){
        return this.$route.path.replace('/view/wzzy/chat/', '');
      },
      pathName(){
        switch (this.active) {
          case '1':
            return '投票选举';
          case '2':
            return '问卷调查';
          case '3':
            return '回音壁';
          case '6':
            return '微信公众号';
        }
      }
    },
  }
</script>
