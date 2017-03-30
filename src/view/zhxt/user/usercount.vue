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
                        <p>平台用户总数(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>今日新增用户数(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>今日新增普通用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>今日新增认证用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>本月新增用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>本月新增普通用户(人)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>本月新增认证用户(人)</p>
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
