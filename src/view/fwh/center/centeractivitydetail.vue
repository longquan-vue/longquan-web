<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centeractivitydetail.less";
</style>
<template>
    <div class="centerwelfaardetail" style="background-color: #F0F0F0;padding-top:1.6533333rem;height: 100%;overflow: scroll">
        <appHead title="活动详情"></appHead>
        <div class="detailHead">
            <div class="swiper">
                <swipe swipeid="swipe" ref="swiper" :autoplay="5000" effect="slide" :loop="true">
                    <div @click="" v-for="top in tops" class="swiper-slide" slot="swiper-con">
                        <img :src="top.img">
                    </div>
                </swipe>
            </div>
        </div>
        <div class="detailCont">
            <ul>
                <li flex>
                    <div box="2">活动名称 : </div>
                    <div box="8">
                        龙泉驿区职工年中盛典  <a>报名中</a>
                    </div>
                </li>
                <li flex>
                    <div box="2">报名权限 : </div>
                    <div box="8">所有用户可报名</div>
                </li>
                <li flex>
                    <div box="2">报名人数 : </div>
                    <div box="8">605/1000  <span>（人）</span></div>
                </li>
                <li flex>
                    <div box="2">报名所需 : </div>
                    <div box="8">50 <span>（积分）</span></div>
                </li>
                <li flex>
                    <div box="2">主办方 : </div>
                    <div box="8">龙泉驿区总工会</div>
                </li>
                <li flex>
                    <div box="2">协办方 : </div>
                    <div box="8">成都爱创业科技有限公司</div>
                </li>
                <li flex>
                    <div box="2">承办方 : </div>
                    <div box="8">成都爱创业科技有限公司</div>
                </li>
                <li flex>
                    <div box="2">报名时间 : </div>
                    <div box="8">2017-06-25 15:00  至  2017-06-30 15:00</div>
                </li>
                <li flex>
                    <div box="2">活动时间 : </div>
                    <div box="8">2017-06-25 15:00  至  2017-06-30 15:00</div>
                </li>
                <li flex>
                    <div box="2">活动地点 : </div>
                    <div box="8">成都市龙泉驿区红光路128号兴隆广场127</div>
                </li>
                <li flex>
                    <div box="2">活动内容 : </div>
                    <div box="8">活动内容活动内容活动内容活动内容活动内容活动内容活动内容</div>
                </li>
                <li flex>
                    <div box="2">规则介绍 : </div>
                    <div box="8">规则介绍规则介绍规则介绍规则介绍规则介绍规则介绍规则介绍规则介绍</div>
                </li>
            </ul>
        </div>
        <a href="javascript:;" class="baoming">
            <img src="../../../../static/wx/center/baoming.png">
        </a>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import swipe from '../../../components/public/swip/swipe.vue'
    export default{
        data(){
            return{
                tops: [
                    { img:'../../../../static/wx/center/1.jpg',},
                    { img:'../../../../static/wx/center/2.jpg',},
                    { img:'../../../../static/wx/center/3.png',},
                ],
            }
        },
        components:{
            appHead,swipe
        },
        computed: {...mapGetters(['welfareDetail'])},
        methods:{
            ...mapActions(['goto','getWelfareDetail']),
            date3Filter
        },
        created () {this.getWelfareDetail();
        }
    }
</script>
