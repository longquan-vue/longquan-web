<template>
  <div class="contentBox">
    <Loading v-if="loading"></Loading>
    <div v-if="!loading">
      <slot></slot>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters} from 'vuex'
  import Loading from '../Loading.vue'
  export default{
    name: 'Page',
    computed: {...mapGetters(['loading'])},
    components: {Loading},
  }
</script>
