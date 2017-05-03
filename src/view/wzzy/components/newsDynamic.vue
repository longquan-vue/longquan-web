<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>新闻动态</span>
            </div>
            <div class="tab-head-btn">
                <a :class="{'active':activeName=='first'}" @click="activeName='first'">公会新闻</a>
                <a :class="{'active':activeName=='second'}" @click="activeName='second'">基层动态</a>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>
        <transition-group enter-active-class="animated fadeIn">
            <div class="wzzy-tab-cont" v-show="activeName=='first'" :key="1">
                <tabCont :newsList="newsList"></tabCont>
            </div>
            <div class="wzzy-tab-cont" v-show="activeName=='second'" :key="2">
                <div class="wzzy-tab-cont-head">
                    <a><img src="../../../../static/wx/test/test1.jpg"></a>
                    <div class="wzzy-tab-cont-head-mess">
                        <h2>中央第五环境保护督察组向重庆市反馈督察情况2</h2>
                        <p>2016-04-15 10:30</p>
                        <div>3月9日下午，由市委宣传部、市卫计委、市总工会、市商务委、市工商联等部门组成的成都市创建厂务公开民主管理示范单位复查验收组一行在区总工会、区卫计局等部门的参与下到我区2家成都市厂务公开民主管理示范创建申报单位（四川省远大专用凭...</div>
                    </div>
                </div>
                <el-row :gutter="20" class="wzzy-tab-cont-list">
                    <el-col :span="12" v-for="i in 12" :key="i">
                        <a><span>第二届世界互联网大会发布《乌镇倡议》</span> <i>2016-04-15</i></a>
                    </el-col>
                </el-row>
            </div>
        </transition-group>
    </div>
</template>
<style lang="less">
    .wzzy-tab{
        .wzzy-tab-head{
            border-bottom: 1px solid #E7E7E7;height: 32px;line-height: 32px;
            .tab-head-title{ float: left;position: relative;width: 130px;height: 32px;line-height: 32px;;text-align: center;
                .tab-head-title-img{ position: absolute;left: 0;top: 0;}
                span{ position: relative;color: #ffffff;font-size: 16px;}
            }
            .tab-head-btn{
                float: left;margin-left: 35px;font-size: 16px;height: 32px;
                a{
                    color: #333;height: 32px;display: inline-block;line-height: normal;position: relative;top: -4px;margin-right: 20px;
                    cursor: pointer;
                    &.active{ color: #BC0000;border-bottom: 2px solid #BC0000;}
                }
            }
            .tab-head-more{ float: right;color: #a6a6a6;font-size: 14px;}
        }
        .wzzy-tab-cont{
            .wzzy-tab-cont-head{
                padding: 20px 0;border-bottom: 1px solid #E7E7E7;min-height: 174px;
                > a{ float: left;width: 240px;height: 134px;margin-right: 20px;
                    img{ width: 100%;height: 100%;}
                }
                .wzzy-tab-cont-head-mess{
                    h2{ font-size: 18px;color: #333;margin-bottom: 10px;
                        a{ color: #333;
                            &:hover{ color: #BC0000;}
                        }
                    }
                    p{ font-size: 14px; color: #818181;margin-bottom: 16px;}
                    div{ font-size: 14px;color: #8a8a8a;line-height: 24px;text-align: justify;}
                }
            }
            .wzzy-tab-cont-list{
                margin: 30px 0 40px 0;
                a{ position: relative;display: block;color: #333;font-size: 14px;margin-bottom: 15px;padding-right: 100px;cursor: pointer;
                    overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;
                    &:before{  content: '';  width: 0;  height: 0;position: absolute;left: 0;top: 4px;
                        border-top: 5px solid transparent;
                        border-left: 5px solid #FF7E00;
                        border-bottom: 5px solid transparent;
                    }
                    span{ color: #333;margin-left: 15px;}
                    i{ color: #8a8a8a;position: absolute;right: 0;top: 2px;}
                    &:hover span{ color: #FF7E00;}
                }
            }
        }
    }
</style>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    import tabCont from '../components/tabCont.vue'
    export default{
        data(){
            return{
                activeName: 'first',
                newsList:[]
            }
        },
        components:{
            tabCont
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear']),
            ...filters,
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        async created () {
            await findArticleApi({page:1,pageSize:13},0,5).then((data)=>{
                this.newsList = data.list;
                console.log(this.newsList);
            });
        },
        destroyed(){

        }
    }
</script>

