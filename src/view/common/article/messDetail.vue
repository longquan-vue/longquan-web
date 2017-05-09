<style lang="less">
  .messDetail{background-color: #ffffff;
    .messDetail-head{ padding: 0.3rem;border-bottom: 1px solid #E7E7E7;
      h2{ font-size: 0.48rem;color: #333;margin-bottom: 0.3rem;}
      p{ color: #818181;font-size: 0.32rem;}
    }
    .messDetail-cont{ padding: 0.3rem;font-size: 0.373333rem;
      .messDetail-cont-img{ margin-bottom: 0.3rem}
      .messDetail-cont-mess{ line-height: 0.6rem}
      img{ max-width: 100%;display: block;margin: auto;}
    }
    .messDetail-cont-down{
      a{ display: block;height: 1.2rem;line-height: 1.2rem;border-top: 1px solid #E7E7E7;color: #999999;
        font-size: 0.373333rem;text-align: center;
        img{ vertical-align: middle;display:inline-block;width:0.5rem;margin-left: 5px;position: relative;top: -2px;}
      }
    }
  }
</style>
<template>
  <div class="messDetail" style="min-height:100%;">
      <div class="messDetail-head">
          <h2>{{data.title}}</h2>
          <p>文章来源：{{data.depName}}  &nbsp;&nbsp;  {{date3Filter(data.created)}}</p>
      </div>
      <div class="messDetail-cont">
          <div class="messDetail-cont-img" v-if="data.picUrl"><img :src="data.picUrl"></div>
          <div class="messDetail-cont-mess" v-html="decode(data.content)"></div>
      </div>
      <div class="messDetail-cont-down">
        <a :href="downloadApi(file.id)" v-for="(file,index) in data.files">文件下载 <img src="../../../../static/wx/down.png"></a>
      </div>
  </div>
</template>
<script type="es6">
  import filters from '../../../filters'
  import {downloadApi} from '../../../api/fileApi'
  export default{
    data(){
      return {

      }
    },
    props: {
      data: Object,
    },
    components: {

    },
    watch: {

    },
    methods: {
      ...filters,
      downloadApi
    }
  }

</script>
