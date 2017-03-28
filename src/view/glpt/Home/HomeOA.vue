<style lang="less">
    @import "../../../main.less";
    @import "../../../color-dark.less";
</style>
<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script type="es6">
    import vHead from '../../../components/public/Header.vue';
    import vSidebar from '../../../components/public/SidebarOA.vue';
    import MyButton from "../../../components/common/button/MyButton"
    export default {
        components:{
            vHead, vSidebar,MyButton
        }
    }
</script>

