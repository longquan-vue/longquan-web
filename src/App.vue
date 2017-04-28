<style lang="less">
    @import "/color-dark.less";
    /*深色主题*/
    @import './main.less';
</style>
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script type="es6">
    export default {
        name: 'vue_app',
        replace: false,
    }

</script>
