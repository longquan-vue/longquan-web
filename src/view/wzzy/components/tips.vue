<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>公示公告 </span>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>
        <div class="wzzy-tab-cont">
            <div class="border-content" style="border-top: none;height: 220px;">
                <div class="wzzy-tab-cont-list">
                    <transition-group name="flip-tip" tag="p">
                        <a v-for="(item,index) in tipsList" style="margin-bottom: 12px;" :key="item"><span>{{item}}</span> <i>2016-04-15</i></a>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .border-content{ border: 1px solid #E7E7E7;padding: 20px;margin-bottom: 20px;
        .wzzy-tab-cont-list{
            padding:0 !important;width:100%;height:100%;overflow: hidden;position: relative;
        }
    }
    .flip-tip-move {
        transition: transform 0.8s;
    }
    .grid-right-sub{
        .border-content{ border: none;background-color: #FAFAFA;}
    }
</style>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                tipsList:[
                    '龙泉驿区总工会2015年度部门决算填报说明',
                    '关于举办2016年龙泉驿区羽毛球团体比赛的通知',
                    '关于举办2017年成都百万职工技能大赛茶艺选拔',
                    '关于开展“同心缘”单身情感联谊活动的通知',
                    '关于举办2017年成都市龙泉驿区第二届气排球比',
                    '关于开展第一期企业班组长能力素质提升培训',
                    '龙工发[2017] 23号龙泉驿区总工会走基层慰问演出活动的通知',
                    '龙泉驿区总工会召开“三室一制”工作部署及经验分享会',
                    '成都经开区汽车行业工会联合会召开一届三次全会'
                ],
                activeIndex: 0
            }
        },
        components:{

        },
        computed: {
            ...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear']),
            ...filters,
        },
        mounted(){

        },
        created () {
            setInterval(()=>{
                this.tipsList = _.shuffle(this.tipsList)
            },3000)
        },
        destroyed(){

        }
    }
</script>

