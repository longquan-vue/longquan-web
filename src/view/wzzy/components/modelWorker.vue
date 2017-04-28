<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>先进人物</span>
            </div>
        </div>
        <div class="modelWorker">
            <el-row :gutter="10" class="wzzy-tab-cont-list">
                <el-col :span="6" v-for="i in 4" :key="i">
                    <div class="img-card">
                        <img src="../../../../static/wx/test/test5.jpg">
                        <div class="card-bg">
                            <h2>成龙</h2>
                            <p>维修工决赛第一名</p>
                            <a>查看详情</a>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less">
    .modelWorker{
        .img-card{ height: 252px;position: relative;overflow: hidden;margin: 20px 0 40px 0;cursor: pointer;
            &:hover{
                .card-bg{   top: 0;
                    h2{ top: 50px;}
                    p{ top: 72px;}
                }
            }
            img{ width: 100%;height: 100%}
            .card-bg{ position: absolute;height: 100%;width: 100%;left: 0;text-align: center;
                background-color:rgba(0,0,0,.8);top: 192px;
                -webkit-transition: all 0.4s;
                -moz-transition: all 0.4s;
                -ms-transition: all 0.4s;
                -o-transition: all 0.4s;
                transition: all 0.4s;
                h2{ position: absolute;width: 100%;top: 10px;left: 0;color: #ffffff;font-size: 16px;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -ms-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                    transition-delay: 0.2s;
                }
                p{
                    position: absolute;width: 100%;top: 32px;left: 0;font-size: 14px;color: #999;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -ms-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                    transition-delay: 0.2s;
                }
                a{ position: absolute;width: 120px;height: 36px;line-height: 36px;border: 1px solid #ffffff;color: #ffffff;
                    top: 50%;left: 50%;margin-left: -60px;
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
            ...mapActions(['go','clear']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>