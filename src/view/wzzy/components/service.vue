<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="/static/wzzy/wzzy-tab.png">
                <span><i class="iconfont icon-gonghuifuwu"></i> 公会服务</span>
            </div>
        </div>
        <div class="fastEnter">
            <el-row :gutter="10">
              <el-col :span="6">
                <a href="http://www.longquanyi.gov.cn/index.php?cid=2265"><img src="/static/wzzy/shmfw.png"></a>
              </el-col>
              <el-col :span="6">
                <a @click="toUrl({path:'/view/wzzy/service/1/0'})"><img src="/static/wzzy/zpxx.png"></a>
              </el-col>
              <el-col :span="6" v-for="(item,index) in articleType.service" :key="index">
                  <a @click="toUrl({path:'/view/wzzy/service/2/'+index})"><img :src="item.url"></a>
              </el-col>
            </el-row>
        </div>
    </div>
</template>
<script type="es6">
  import { mapGetters,mapActions } from 'vuex'
  export default{
    computed: {...mapGetters([ 'articleType'])},
    methods: {
      ...mapActions(['toUrl']),
    }
  }
</script>

