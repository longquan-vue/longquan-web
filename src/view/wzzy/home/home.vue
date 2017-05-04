<style lang="less" scoped>
  @import "./home.less";
</style>
<template>
  <div class="page1">
    <wzzySwiper></wzzySwiper>
    <newsDynamic></newsDynamic>
    <assessMent></assessMent>
    <service></service>
    <activityShow></activityShow>
    <files></files>
    <modelWorker></modelWorker>
    <aboutLink></aboutLink>
  </div>
</template>

<script type="es6">
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
    components: {
      wzzySwiper, newsDynamic, assessMent, service, activityShow, files, modelWorker, aboutLink, tip, someIcon, poll, adver, echo,
    },
  }
</script>
