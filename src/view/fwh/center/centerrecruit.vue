<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerrecruit.less";
</style>
<template>
    <div class="centerCruit" style="background-color: #F0F0F0;height: 100%;overflow: scroll;padding-top:1.6533333rem;">
        <appHead title="我收藏的招聘信息"></appHead>
        <ul class="centerCruitList">
            <li>
                <div class="listTitle" flex justify="between" items="center">
                    <span>招聘车间电焊工</span>
                    <a class="ising">进行中</a>
                </div>
                <div class="listCont" flex justify="between">
                    <span>招聘人数:1000</span>
                    <span>5000-6000 元/月</span>
                </div>
                <div class="listFoot">
                    招聘单位:成都爱创业科技有限公司
                </div>
            </li>
            <li>
                <div class="listTitle" flex justify="between" items="center">
                    <span>招聘车间电焊工</span>
                    <a class="over">进行中</a>
                </div>
                <div class="listCont" flex justify="between">
                    <span>招聘人数:1000</span>
                    <span>5000-6000 元/月</span>
                </div>
                <div class="listFoot">
                    招聘单位:成都爱创业科技有限公司
                </div>
            </li>
            <li>
                <div class="listTitle" flex justify="between" items="center">
                    <span>招聘车间电焊工</span>
                    <a class="over">进行中</a>
                </div>
                <div class="listCont" flex justify="between">
                    <span>招聘人数:1000</span>
                    <span>5000-6000 元/月</span>
                </div>
                <div class="listFoot">
                    招聘单位:成都爱创业科技有限公司
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            appHead
        },
        computed: {...mapGetters(['login','list'])},
        methods:{
            ...mapActions(['getMineMsg','clear','isEnd']),
            ...filter
        },
        created () {
            this.getMineMsg();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
