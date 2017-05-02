<style lang="less">
    .fileBox{ padding: 40px 0;}
    .fileList{ margin-bottom: 30px;}
    .fileListHead{ overflow: hidden;border-bottom: 1px solid #E7E7E7;padding-bottom: 5px;line-height: 20px;;
        span{ font-size: 16px;color: #BC0000;border-bottom: 2px solid #BC0000;padding-bottom: 6px}
        a{ float: right;cursor: pointer;color: #999}
    }
    .fileListCont{ padding: 20px;border: 1px solid #E7E7E7;border-top: none;}
</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="pagewrap">
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="24">
                        <div class="grid-left">
                            <div class="the-place" style="">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>文件·资料</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="fileBox">
                                <el-row :gutter="20">
                                    <el-col :span="8" v-for="i in 5" :key="i">
                                        <div class="fileList">
                                            <div class="fileListHead">
                                                <span><i class="iconfont icon-xinwendongtai"></i> {{['工会文件','领导讲话','上级文件','公会机关','政策法规'][i-1]}}</span>
                                                <a>更多 ></a>
                                            </div>
                                            <div class="fileListCont">
                                                <pubListA v-for="i in 6" :key="i" title="第二届世界互联网大会发布《乌镇倡议》" url="/" time="2016-04-15"></pubListA>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import pubListA from '../components/lista.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            pubListA
        },
        computed: {
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
