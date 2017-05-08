<template>
  <div class="wzzy-foot">
    <div class="pagewrap">
      <p style="margin-bottom:20px;"><a :href="'mailto:'+relation[0]+'?subject=联系我们'">联系我们</a><a @click="addFavorite">加入收藏</a></p>
      <p><span>Copyright @ 2003-2016</span><span>成都市龙泉驿区总工会 版权所有.</span></p>
      <p><span v-for="(val,i) in relation" v-if="i>0" :key="i">{{val}}</span></p>
      <p><span>备案序号：<img src="/static/wzzy/beian.png"> 蜀ICP备07006651号</span><span>技术支持：成都爱创业科技有限公司</span></p>
      <p><a><img src="/static/wzzy/work.png"></a></p>
    </div>

  </div>
</template>
<style lang="less">
  .wzzy-foot{
    background-color: #434343;padding: 20px 0;
  p{
  span{display: inline-block;padding: 0 8px;}
  img{ vertical-align: middle}
  a{ color: #ffffff;margin: 0 15px;cursor: pointer}
  text-align: center;color: rgb(154, 152, 152);font-size: 12px;margin-bottom: 10px;
  }
  }
</style>
<script type="es6">
  import {alert} from '../../../actions'
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: {
      ...mapGetters(['setting']),
      relation(){
          return this.setting && JSON.parse(this.setting.relation || '[]')
      }
    },
    methods: {
      addFavorite() {
        const url = window.location;
        const title = document.title;
        const ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("360se") > -1) {
          alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！", 'warning');
        } else if (ua.indexOf("msie 8") > -1) {
          window.external.AddToFavoritesBar(url, title); //IE8
        } else if (document.all) {
          try {
            window.external.addFavorite(url, title);
          } catch (e) {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!', 'warning');
          }
        } else if (window.sidebar) {
          window.sidebar.addPanel(title, url, "");
        } else {
          alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!', 'warning');
        }
      },
    },
  }
</script>
