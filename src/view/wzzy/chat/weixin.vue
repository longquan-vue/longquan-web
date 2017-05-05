<style lang="less">
  #codeBox {text-align: center;padding: 100px 0;
    p {color: #666666;font-size: 16px;}
  }
</style>
<template>
  <div class="codeBox" id="codeBox">
    <p>扫码关注微信公众号</p>
    <img :src="setting.wechatTicket">
  </div>
</template>

<script type="es6">
  import {mapGetters} from 'vuex'
  export default{
    computed: {...mapGetters(['setting']),},
  }
</script>
