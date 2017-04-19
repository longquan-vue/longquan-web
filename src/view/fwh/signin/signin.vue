<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./signin.less";
</style>
<template>
    <div class="signin">
        <div class="signinHead">
            <i>您的积分:{{login.score}}</i>
            <div class="signinBtn" @click="sign">
                <div class="signinBtnCont">
                    <h2 v-if="!login.isSign">签到</h2>
                    <h2 v-if="login.isSign">已签到</h2>
                    <div></div>
                    <p>已连续{{login.signNum}}天</p>
                </div>
            </div>
            <div class="tips">
                明日签到可领取{{(login.signNum+1)*10}}积分啦~
            </div>
            <div class="line"></div>
            <ul flex>
                <li box="1" v-for="item in weekFilter()">
                    <div :class="{'active':item.sign}">{{item.sign?'+'+item.sign:'签'}}</div>
                    <p>{{item.week}}</p>
                </li>
            </ul>
        </div>
        <div class="signinFoot">
            <div class="signinFootHead">
                <span>积分签到规则</span>
            </div>
            <ul>
                <li flex>
                    <span><img src="../../../../static/wx/star.png"></span>
                    <span box="1">每人每天可签到一次</span>
                </li>
                <li flex>
                    <span><img src="../../../../static/wx/star.png"></span>
                    <span box="1">如果一周连续签到，获得积分递增10积分，每周重复递增</span>
                </li>
                <li flex>
                    <span><img src="../../../../static/wx/star.png"></span>
                    <span box="1">非连续签到，不能享受递增积分</span>
                </li>
                <li flex>
                    <span><img src="../../../../static/wx/star.png"></span>
                    <span box="1">积分可用于工会组织的不定期的福利抽奖，健身中心报名以及各类活动的报名</span>
                </li>
            </ul>
            <a @click="goto(['welfare'])"><img src="../../../../static/wx/see.png"></a>
        </div>
    </div>
</template>

<script type="es6">
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import filter from '../../../filters'
    import moment from 'moment'
    export default{
        data(){
            return {}
        },
        components: {},
        computed: {...mapGetters(['login', 'data', 'list'])},
        methods: {
            ...mapActions(['clear', 'getMine', 'singin', 'getWeekSign', 'goto']),
            ...filter,
            sign(){
                this.singin(this);
            },
            weekFilter(){
                return new Array(7).fill({}).map((val = {}, index) => {
                    const sign = this.list.find((item) => moment().startOf('week').add(index+1, 'days').isSame(moment(item.recording).startOf('day')));
                    return {
                        sign: sign ? sign.score : null,
                        week: `星期${['一', '二', '三', '四', '五', '六', '日'][index]}`,
                    }
                })
            }
        },
        async created () {
            await this.getWeekSign();
            await this.getMine();
        },
        destroyed(){
            this.clear()
        }
    }
</script>

