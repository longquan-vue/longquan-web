<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "health.less";
</style>
<template>
    <div class="health" style="background-color: #F0F0F0;height: 100%;overflow: scroll">
        <div class="led" flex>
            <span>提示:</span>
            <div box="1">
                <marquee direction="left" behavior="scroll" scrollamount="5" scrolldelay="0" loop="-1">
                    非职工认证用户不能报名，所有健身项目一个人一次只能预约一个时段的健项目
                </marquee>
            </div>
        </div>
        <div class="healthList">
            <ul>
                <li flex @click="goto(['healthDetail'])">
                    <div flex items="center"><img src="../../../../static/wx/center/item1.png"></div>
                    <div box="1">
                        跑步机
                    </div>
                    <div class="">
                        <span>所需20积分</span>
                        <img src="../../../../static/wx/center/jiantou.png">
                    </div>
                </li>
                <li flex>
                    <div flex items="center"><img src="../../../../static/wx/center/item1.png"></div>
                    <div box="1">
                        跑步机
                    </div>
                    <div class="">
                        <span>所需40积分</span>
                        <img src="../../../../static/wx/center/jiantou.png">
                    </div>
                </li>
                <li flex>
                    <div flex items="center"><img src="../../../../static/wx/center/item1.png"></div>
                    <div box="1">
                        跑步机
                    </div>
                    <div class="">
                        <span>所需60积分</span>
                        <img src="../../../../static/wx/center/jiantou.png">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            appHead
        },
        computed: {...mapGetters([ 'page']),
        },
        methods:{
            ...mapActions(['goto','clear']),
            date3Filter,
        },
        created () {

        },
        destroyed(){
            this.clear()
        }
    }
</script>
