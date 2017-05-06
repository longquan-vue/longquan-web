<style lang="less">
  .newsMessDiv{ padding: 20px 0;border-bottom: 1px solid #E7E7E7;
    a{cursor: pointer}
  }
</style>
<template>
    <div class="newsMess newsMessDiv">
      <div class="newsMessCont">
        <h2><a @click="toUrl({path:'/view/wzzy/messageDetail/'+item.id})" v-html="str2Filter(item.title,query.keyWord)"></a></h2>
        <p><span style="margin-right:20px;">文章来源:{{item.title}}</span> <span>{{date3Filter(item.created)}}</span></p>
        <div v-html="str2Filter(limitFilter(strFilter(decode(item.content)),100),query.keyWord)"></div>
      </div>
    </div>
</template>
<script type="es6">
  import {mapActions,mapGetters} from 'vuex'
  import filters from '../../../filters'
  export default{
    props: {
      item:Object
    },
    computed: {
      ...mapGetters(['query']),
    },
    methods: {
      ...filters,
      ...mapActions(['toUrl'])
    }
  }

</script>
