<template>
    <div class="usercount">
        <div class="contentBox">
            <div class="contentBoxtitle">
                <span>券类福利发放统计报表</span>
                <!--<a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>-->
            </div>
            <div class="contentBoxCont">
                <ul flex>
                    <li box="1">
                        <h3>34</h3>
                        <p>兑换券福利发放次数(次)</p>
                    </li>
                    <li box="1">
                        <h3>25654</h3>
                        <p>兑换券发放张数(张)</p>
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
