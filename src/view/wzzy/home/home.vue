<style lang="less" scoped>
  @import "./home.less";
</style>
<template>
  <div class="wzzyHome">
    <div class="pagewrap">
      <div class="weather">
        <span>天气预报 ：</span>
      </div>
      <div class="wzzy-content">
        <el-row :gutter="30">
          <el-col :span="17">
            <div class="grid-left">
              <wzzySwiper></wzzySwiper>
              <newsDynamic></newsDynamic>
              <assessMent></assessMent>
              <service></service>
              <activityShow></activityShow>
              <files></files>
              <modelWorker></modelWorker>
              <aboutLink></aboutLink>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-right">
              <tip></tip>
              <someIcon></someIcon>
              <poll></poll>
              <adver></adver>
              <echo></echo>
              <question></question>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import filters from '../../../filters'
  import wzzySwiper from '../components/swiper.vue'
  import newsDynamic from '../components/newsDynamic.vue'
  import assessMent from '../components/assessment.vue'
  import service from '../components/service.vue'
  import activityShow from '../components/activityShow.vue'
  import files from '../components/files.vue'
  import modelWorker from '../components/modelWorker.vue'
  import aboutLink from '../components/about.vue'
  import tip from '../components/tips.vue'
  import someIcon from '../components/someIcon.vue'
  import poll from '../components/poll.vue'
  import adver from '../components/adver.vue'
  import echo from '../components/echo.vue'
  export default{
    data(){
      return {}
    },
    components: {
      wzzySwiper, newsDynamic, assessMent, service, activityShow, files, modelWorker, aboutLink, tip, someIcon, poll, adver, echo,
    },
    computed: {
      ...mapGetters(['page', 'list']),
    },
    methods: {
      ...mapActions(['go', 'clear', 'getMine', 'changePage']),
      ...filters,
    },
    created () {

    },
    destroyed(){

    }
  }
</script>
