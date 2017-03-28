<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./signin.less";
</style>
<template>
    <div class="signin">
        <div class="signinHead">
            <i>您的积分:2000</i>
            <div class="signinBtn">
                <div class="signinBtnCont">
                    <h2>签到</h2>
                    <div></div>
                    <p>已连续2天</p>
                </div>
            </div>
            <div class="tips">
                明日签到可领取50积分啦~
            </div>
            <div class="line"></div>
            <ul flex>
                <li box="1">
                    <div class="active">
                        +10
                    </div>
                    <p>星期一</p>
                </li>
                <li box="1">
                    <div class="active">
                        +20
                    </div>
                    <p>星期二</p>
                </li>
                <li box="1">
                    <div class="active">
                        +30
                    </div>
                    <p>星期三</p>
                </li>
                <li box="1">
                    <div class="active">
                        +40
                    </div>
                    <p>星期四</p>
                </li>
                <li box="1">
                    <div class="active">
                        +50
                    </div>
                    <p>星期五</p>
                </li>
                <li box="1">
                    <div class="">
                        +60
                    </div>
                    <p>星期六</p>
                </li>
                <li box="1">
                    <div class="">
                        +70
                    </div>
                    <p>星期日</p>
                </li>
            </ul>
        </div>
        <div class="signinFoot">
            <div class="signinFootHead">
                <span>积分签到规则</span>
            </div>
            <ul>
                <li flex>
                    <span><img  src="../../../../static/wx/star.png"></span>
                    <span box="1">每人每天可签到一次</span>
                </li>
                <li flex>
                    <span ><img  src="../../../../static/wx/star.png"></span>
                    <span box="1">如果一周连续签到，获得积分递增10积分，每周重复递增</span>
                </li>
                <li flex>
                    <span ><img  src="../../../../static/wx/star.png"></span>
                    <span box="1">非连续签到，不能享受递增积分</span>
                </li>
                <li flex>
                    <span ><img  src="../../../../static/wx/star.png"></span>
                    <span box="1">积分可用于工会组织的不定期的福利抽奖，健身中心报名以及各类活动的报名</span>
                </li>
            </ul>
            <a><img src="../../../../static/wx/see.png"></a>
        </div>
    </div>
</template>

<script type="es6">
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        methods:{

        }
    }
</script>
