<style>
    @import "../../../main.less";
    @import "../../../color-dark.less";
</style>
<template>
    <div class="qyh" style="width:100%;height:100%;overflow-y:scroll">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
</template>

<script type="es6">
    export default {

    }
</script>

