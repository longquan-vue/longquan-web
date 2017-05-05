<template>
    <div class="wzzy-tab">
        <div class="border-content">
            <el-row :gutter="10">
                <el-col :span="12">
                    <a @click="toUrl({path:'/view/wzzy/chat/6'})" class="someIcon">
                      <i class="iconfont icon-weixin"></i>
                      微信公众号
                    </a>
                </el-col>
                <el-col :span="12">
                    <a href="http://weibo.com/u/2178811917?refer_flag=1001030101_&is_all=1&sudaref=localhost&retcode=6102" class="someIcon">
                      <i class="iconfont icon-weibo" style="font-size:32px;padding-top: 13px;"></i>
                      政务微博
                    </a>
                </el-col>
                <!--<el-col :span="12">-->
                    <!--<a @click="toUrl({path:'/view/wzzy/chat/3'})" class="someIcon">我要咨询</a>-->
                <!--</el-col>-->
                <!--<el-col :span="12">-->
                    <!--<a @click="toUrl({path:'/view/wzzy/files'})" class="someIcon">资料下载</a>-->
                <!--</el-col>-->
            </el-row>
        </div>
    </div>
</template>
<style lang="less">
    .someIcon{ display: block;width: 100%;height: 80px;border-radius: 4px;background-color: #FFE8D2;
        color: #ff7e00;font-size: 14px;text-align: center;cursor: pointer;
        i{ display: block;font-size: 28px;padding-top: 15px;padding-bottom: 3px;}
    }
</style>
<script type="es6">
  import {mapActions} from 'vuex'
  export default{
    methods: {
      ...mapActions(['toUrl']),
    },
  }
</script>


