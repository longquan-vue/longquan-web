<style lang="less" scoped>
  @import "./health.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>到场签到二维码</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont" style="text-align: center">
      <img :src="code">
      <p>如需下载此二维码，请右键点击图片另存为即可！</p>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['setting']),
      code(){
        return this.setting.sportsTicket ? `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${this.setting.sportsTicket}` : ''
      }
    },
    methods: {...mapActions(['getSetting', 'go'])},
    created () {
      this.getSetting();
    },
  }
</script>
