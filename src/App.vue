<style lang="less">
    @import "/color-dark.less";
    /*深色主题*/
    @import './main.less';
</style>
<template>
    <!--<div class="wrapper">-->
    <!--<v-head></v-head>-->
    <!--<v-sidebar></v-sidebar>-->
    <!--<div class="content">-->
    <!--<transition name="move" mode="out-in"><router-view></router-view></transition>-->
    <!--</div>-->
    <!--</div>-->
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script type="es6">
    import vHead from './components/public/Header.vue';
    import vSidebar from './components/public/Sidebar.vue'
    import Alert from './actions/alert/Alert.vue'

    export default {
        name: 'vue_app',
        replace: false,
        components: {
            Alert, vHead, vSidebar
        },
    }

</script>
