<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centeractivitydetail.less";
</style>
<template>
    <div class="centerwelfaardetail" style="background-color: #F0F0F0;padding-top:1.6533333rem;height: 100%;overflow: scroll">
        <appHead title="活动详情"></appHead>
        <div class="detailHead">
            <div class="swiper">
                <swipe swipeid="swipe" ref="swiper" :autoplay="5000" effect="slide" :loop="false">
                    <div @click="" v-for="(item,index) in data.files" class="swiper-slide" slot="swiper-con">
                        <img :src="item.url">
                    </div>
                </swipe>
            </div>
        </div>
        <div class="detailCont">
            <ul>
                <li flex>
                    <div box="2">活动名称 : </div>
                    <div box="8">
                        {{data.name}}
                        <a v-if="!isEnd(data.end)">报名中</a>
                        <a v-if="isEnd(data.end)">已结束</a>
                    </div>
                </li>
                <li flex>
                    <div box="2">报名权限 : </div>
                    <div box="8">{{data.entry?'认证用户可报名':'所有用户可报名'}}</div>
                </li>
                <li flex>
                    <div box="2">报名人数 : </div>
                    <div box="8">{{data.current}}/{{data.total}}  <span>人</span></div>
                </li>
                <li flex>
                    <div box="2">报名所需 : </div>
                    <div box="8">{{data.score?data.score:'0'}} <span>积分</span></div>
                </li>
                <li flex>
                    <div box="2">主办方 : </div>
                    <div box="8">{{data.sponsor}}</div>
                </li>
                <li flex>
                    <div box="2">协办方 : </div>
                    <div box="8">{{data.coSponsor}}</div>
                </li>
                <li flex>
                    <div box="2">承办方 : </div>
                    <div box="8">{{data.organizer}}</div>
                </li>
                <li flex>
                    <div box="2">报名时间 : </div>
                    <div box="8">{{date3Filter(data.entryStart)}}  至  {{date3Filter(data.entryEnd)}}</div>
                </li>
                <li flex>
                    <div box="2">活动时间 : </div>
                    <div box="8">{{date3Filter(data.start)}}  至  {{date3Filter(data.end)}}</div>
                </li>
                <li flex>
                    <div box="2">活动地点 : </div>
                    <div box="8">{{data.place}}</div>
                </li>
                <li flex>
                    <div box="2">活动内容 : </div>
                    <div box="8" v-html="data.detail"></div>
                </li>
                <li flex>
                    <div box="2">规则介绍 : </div>
                    <div box="8" v-html="data.rule"></div>
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
        computed: {...mapGetters(['data'])},
        methods:{
            ...mapActions(['goto','clear','getActivityDetail']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            }
        },
        created () {
            this.getActivityDetail();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
