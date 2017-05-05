<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span><i class="iconfont icon-banshizhinan"></i> 办事指南</span>
            </div>
        </div>
        <div class="fastEnter">
            <el-row :gutter="10">
                <el-col :span="6" v-for="(type,idx) in articleType.guide" :key="idx">
                    <a @click="toUrl({path:'/view/wzzy/guide/8/'+idx})"><img :src="type.url"></a>
                </el-col>
                <el-col :span="6">
                    <a @click="toUrl({path:'/view/wzzy/guide/0/0'})"><img src="/static/wzzy/ghzj.png"></a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less">
    .wzzy-tab{
        .fastEnter{
            margin: 20px 0 40px 0;
            a{
                height: 100px;display: block;cursor: pointer;
                img{ width: 100%;height: 100%;}
            }
        }
    }
</style>

<script type="es6">
    import { mapGetters,mapActions } from 'vuex'
    export default{
        computed: {...mapGetters([ 'articleType'])},
      methods: {
        ...mapActions(['toUrl']),
      }
    }
</script>

