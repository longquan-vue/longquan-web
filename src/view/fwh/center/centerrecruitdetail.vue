<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerrecruitdetail.less";
</style>
<template>
    <div class="centerwelfaardetail" style="background-color: #F0F0F0;padding-top:1.6533333rem;height: 100%;overflow: scroll">
        <appHead title="招聘详情" style="background-color:#FFB036"></appHead>
        <div class="detailCont">
            <ul>
                <li flex>
                    <div box="2">招聘标题 : </div>
                    <div box="8">
                        啦啦啦啦啦啦招聘德玛西亚
                        <a class="sign">进行中</a>
                        <!--<a v-if="isEnd(data.end)">已结束</a>-->
                    </div>
                </li>
                <li flex>
                    <div box="2">招聘岗位 : </div>
                    <div box="8">测试员</div>
                </li>
                <li flex>
                    <div box="2">招聘人数 : </div>
                    <div box="8">1000  <span>人</span></div>
                </li>
                <li flex>
                    <div box="2">薪资待遇 : </div>
                    <div box="8">5000-6000  <span>元/月</span></div>
                </li>
                <li flex>
                    <div box="2">招聘单位 : </div>
                    <div box="8">龙泉驿区总工会  </div>
                </li>
                <li flex>
                    <div box="2">招聘单位 : </div>
                    <div box="8">成都爱创业科技有限公司  </div>
                </li>
                <li flex>
                    <div box="2">招聘时间 : </div>
                    <div box="8">2017-06-5 10:00  至  2017-06-8 10:00</div>
                </li>
                <li flex>
                    <div box="2">活动地点 : </div>
                    <div box="8">成都爱创业科技有限公司  </div>
                </li>
            </ul>
            <ul>
                <li flex>
                    <div box="2">招聘要求 : </div>
                    <div box="8">
                        <p>1. 福利期间每人只能兑换一次该福利</p>
                        <p>2. 兑换成功后凭借个人中心的福利码到指定地点进行换取电影票奖品行换取电影票奖品</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li flex>
                    <div box="2">福利待遇 : </div>
                    <div box="8">
                        <p>1. 福利期间每人只能兑换一次该福利</p>
                        <p>2. 兑换成功后凭借个人中心的福利码到指定地点进行换取电影票奖品行换取电影票奖品</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li flex>
                    <div box="2">联系人 : </div>
                    <div box="8">郭经理</div>
                </li>
                <li flex>
                    <div box="2">联系电话 : </div>
                    <div box="8">
                        <a class="tel" href="tel:1868370859">
                            028-88888888（09:00-18:00）
                            <img src="../../../../static/wx/tel.png" style="float:right">
                        </a>
                    </div>
                </li>
                <li flex>
                    <div box="2">联系人 : </div>
                    <div box="8">郭经理</div>
                </li>
                <li flex>
                    <div box="2">联系电话 : </div>
                    <div box="8">
                        <a class="tel" href="tel:1868370859">
                            028-88888888（09:00-18:00）
                            <img src="../../../../static/wx/tel.png" style="float:right">
                        </a>
                    </div>
                </li>
            </ul>

        </div>
        <a href="javascript:;" class="baoming">意向报名</a>
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
            // this.getActivityDetail();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
