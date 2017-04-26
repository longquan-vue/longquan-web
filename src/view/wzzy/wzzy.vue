<style lang="less">
    @import "../../main.less";
</style>
<template>
    <div class="wzzy" style="overflow-y:scroll;height:100%;">
        <wzzyHeader></wzzyHeader>
        <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
</template>

<script type="es6">
    import wzzyHeader from './header/header.vue'
    export default {
        components:{
            wzzyHeader
        },
    }
</script>

