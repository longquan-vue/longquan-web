<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>活动展示</span>
            </div>
        </div>
        <div class="activityShow">
            <el-row :gutter="10">
                <el-col :span="12" class="activityShowLeft">
                    <div class="link-div">
                        <a class="block-link">
                            <img src="../../../../static/wx/test/test5.jpg">
                            <div class="link-div-mess">
                                <h2>孙政才主持召开市委常委会会议取市委常扶贫开....</h2>
                                <p>3月9日下午，由市委宣传部、市卫计委、市总工会、市商、
                                    市工商联等部门组成的成都市创建厂务公开民主管理....</p>
                            </div>
                        </a>
                    </div>
                </el-col>
                <el-col :span="12" class="activityShowRight">
                    <el-row :gutter="10">
                        <el-col :span="12" v-for="i in 4">
                            <div class="little-link">
                                <div class="link-div">
                                    <a class="block-link">
                                        <img src="../../../../static/wx/test/test2.jpg">
                                        <div class="link-div-mess">
                                            <h2>孙政才主持召开市委常委会会议取市委常扶贫开....</h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less">
    .wzzy-tab{
        .activityShow{
            margin: 20px 0 40px 0;
            .activityShowLeft{ height: 237px;}
            .link-div{ position: relative;width: 100%;height: 100%;
                .link-div-mess{ height: 92px;position: absolute;left: 0;bottom: 0;width: 100%;
                    padding: 15px 20px;background-color: rgba(0,0,0,.8);
                    h2{ font-size: 16px;color: #ffffff;margin-bottom: 5px;}
                    p{ font-size: 14px;color: #999999;}
                }
            }
            .little-link{ height: 115px;margin-bottom: 7px;
                .link-div{
                    .link-div-mess{ height: 36px;padding: 0 20px;line-height: 36px;
                        h2{ font-size: 14px;overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;}
                    }
                }
            }
        }
    }
</style>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        computed: {...mapGetters([ 'page','list']),
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

