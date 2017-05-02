<style lang="less">
  @import "../../main.less";
</style>
<template>
  <div class="wzzy" style="overflow-y:scroll;height:100%;">
    <Qrcode/>
    <wzzyHeader/>
    <transition name="move" mode="out-in">
      <router-view/>
    </transition>
    <wzzyFooter/>
  </div>
</template>

<script type="es6">
  import wzzyHeader from './header/header.vue'
  import wzzyFooter from './footer/footer.vue'
  import Qrcode from './components/Qrcode.vue'
  export default {
    components: {
      wzzyHeader,
      wzzyFooter,
      Qrcode
    },
  }
</script>

