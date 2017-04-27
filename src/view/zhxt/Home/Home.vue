<style>
  @import "../../../main.less";
  @import "../../../color-dark.less";

  .zhxt .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
</style>
<template>
  <div class="wrapper zhxt">
    <vHead/>
    <vSidebar/>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script type="es6">
  import vHead from '../../../components/public/Header.vue';
  import vSidebar from '../../../components/public/Sidebar.vue';
  export default {
    components: {
      vHead, vSidebar
    }
  }
</script>

