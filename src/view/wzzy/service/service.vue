<style lang="less">

</style>
<template>
  <div class="wzzy-sub-content">
    <ul class="newTips" v-for="(item,index) in newsList" :key="index">
      <li @click="go(['messageDetail',item.id])"><a><span>{{item.title}}</span> <i>{{date3Filter(item.created)}}</i></a></li>
    </ul>
  </div>
</template>

<script type="es6">
  import {mapActions} from 'vuex'
  import filters from '../../../filters'
  export default{
    props: {
      newsList: Array
    },
    methods: {
      ...mapActions(['go', 'clear']),
      ...filters,
    },
    destroyed(){
      this.clear()
    }
  }
</script>
