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
        <div class="wzzy-content" style="padding-top:20px;">
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

