<style lang="less">
    @import "../../main.less";
</style>
<template>
    <div class="wzzy" style="overflow-y:scroll;height:100%;">
        <wzzyHeader></wzzyHeader>
        <transition name="move" mode="out-in"><router-view></router-view></transition>
        <wzzyFooter></wzzyFooter>
    </div>
</template>

<script type="es6">
    import wzzyHeader from './header/header.vue'
    import wzzyFooter from './footer/footer.vue'
    export default {
        components:{
            wzzyHeader,
            wzzyFooter
        },
    }
</script>

