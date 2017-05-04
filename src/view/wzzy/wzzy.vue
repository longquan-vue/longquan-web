<style lang="less">
  @import "../../main.less";
</style>
<template>
  <div class="wzzy" style="overflow-y:scroll;height:100%;">
    <Qrcode/>
    <wzzyHeader/>
    <div class="wzzyHome">
      <div class="pagewrap">
        <div class="weather">
          <span>天气预报：</span>
          <iframe style="vertical-align: middle;" allowtransparency="true" frameborder="0" width="190" height="36" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=1&v=0&d=1&bd=0&k=000000&f=000000&q=1&e=0&a=1&c=56294&w=180&h=36&align=left"></iframe>
        </div>
        <div class="wzzy-content">
          <el-row :gutter="30">
            <el-col :span="17">
              <div class="grid-left">
                  <transition name="move" mode="out-in">
                    <router-view/>
                  </transition>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-right" v-if="active=='home'">
                <tip></tip>
                <someIcon></someIcon>
                <poll></poll>
                <adver></adver>
                <echo></echo>
                <question></question>
              </div>
              <div class="grid-right grid-right-sub" v-if="active!='home'">
                <question v-if="active=='chat/3'"></question>
                <tip></tip>
                <lastDynamic></lastDynamic>
                <someIcon></someIcon>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <wzzyFooter/>
  </div>
</template>

<script type="es6">
  import wzzyHeader from './header/header.vue'
  import wzzyFooter from './footer/footer.vue'
  import Qrcode from './components/Qrcode.vue'
  import tip from './components/tips.vue'
  import someIcon from './components/someIcon.vue'
  import poll from './components/poll.vue'
  import adver from './components/adver.vue'
  import echo from './components/echo.vue'
  import lastDynamic from './components/lastDynamic.vue'
  import question from './components/question.vue'
  export default {
    components: {
      wzzyHeader,
      wzzyFooter,
      Qrcode,
      tip, someIcon, poll, adver, echo,lastDynamic,question
    },
    computed: {
      active(){
        console.log(this.$route.path.replace('/view/wzzy/',''));
        return this.$route.path.replace('/view/wzzy/','');
      }
    },
  }
</script>

