<style lang="less">
  @import "../../main.less";
  @import "wzzy.less";
  .weather{ line-height: 50px;}
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
            <el-col :span="$route.path == '/view/wzzy/files'?24:17">
              <div class="grid-left">
                  <transition name="move" mode="out-in">
                    <router-view/>
                  </transition>
              </div>
            </el-col>
            <el-col :span="7" v-if="$route.path != '/view/wzzy/files'">
              <div class="grid-right" :class="{'grid-right-sub':$route.path != '/view/wzzy/home'}">
                <question v-if="$route.path == '/view/wzzy/chat/3'"></question>
                <tip></tip>
                <lastDynamic v-if="$route.path != '/view/wzzy/home'"></lastDynamic>
                <someIcon></someIcon>
                <poll v-if="$route.path == '/view/wzzy/home'"></poll>
                <adver v-if="$route.path == '/view/wzzy/home'"></adver>
                <echo v-if="$route.path == '/view/wzzy/home'"></echo>
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
  }
</script>

