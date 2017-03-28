<style lang="less">
  @import './main.less';
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="es6">
  import Alert from './actions/alert/Alert.vue'

  export default {
    name: 'vue_app',
    replace: false,
    components: {
      Alert
    }
  }

</script>
