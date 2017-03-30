<template>
    <div class="usercount">
        <div class="contentBox">
            <div class="contentBoxtitle">
                <span>用户统计报表</span>
                <!--<a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>-->
            </div>
            <div class="contentBoxCont">
                <ul flex>
                    <li box="1">
                        <h3>25654</h3>
                        <p>签到总次数(次)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>今日签到用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>昨日签到用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>本周签到用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>上周签到用户</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>本月签到用户</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>上月签到用户</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {

            }
        },
        computed:{
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
        }
    }
</script>
