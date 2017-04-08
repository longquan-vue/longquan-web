<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "activity.less";
</style>
<template>
    <div class="centeractivity" style="background-color: #F0F0F0;height: 100%;overflow: scroll">
        <ul class="centerMessList">
            <li @click="goto(['centeractivitydetail'])">
                <div class="liHead" flex>
                    <div box="2">
                        <img src="../../../../static/wx/center/reapack.png">
                        <p>认证用户可报名</p>
                    </div>
                    <div box="4">
                        <div>
                            <h2>龙泉驿职工年终盛典</h2>
                            <p>报名人数 : 605/1000</p>
                            <p>报名所需 : <span>50 积分</span></p>
                        </div>
                    </div>
                    <div box="1">
                        <a class="ising">进行中</a>
                    </div>
                </div>
                <div class="liCont">报名时间： 2017-06-25 15:00  至  2017-06-30 15:00</div>
            </li>
            <li @click="goto(['centeractivitydetail'])">
                <div class="liHead" flex>
                    <div box="2">
                        <img src="../../../../static/wx/center/reapack.png">
                        <p>认证用户可报名</p>
                    </div>
                    <div box="4">
                        <div>
                            <h2>龙泉驿职工年终盛典</h2>
                            <p>报名人数 : 605/1000</p>
                            <p>报名所需 : <span>50 积分</span></p>
                        </div>
                    </div>
                    <div box="1">
                        <a class="over">已结束</a>
                    </div>
                </div>
                <div class="liCont">报名时间： 2017-06-25 15:00  至  2017-06-30 15:00</div>
            </li>
            <li @click="goto(['centeractivitydetail'])">
                <div class="liHead" flex>
                    <div box="2">
                        <img src="../../../../static/wx/center/reapack.png">
                        <p>认证用户可报名</p>
                    </div>
                    <div box="4">
                        <div>
                            <h2>龙泉驿职工年终盛典</h2>
                            <p>报名人数 : 605/1000</p>
                            <p>报名所需 : <span>50 积分</span></p>
                        </div>
                    </div>
                    <div box="1">
                        <a class="over">已结束</a>
                    </div>
                </div>
                <div class="liCont">报名时间： 2017-06-25 15:00  至  2017-06-30 15:00</div>
            </li>
            <li @click="goto(['centeractivitydetail'])">
                <div class="liHead" flex>
                    <div box="2">
                        <img src="../../../../static/wx/center/reapack.png">
                        <p>认证用户可报名</p>
                    </div>
                    <div box="4">
                        <div>
                            <h2>龙泉驿职工年终盛典</h2>
                            <p>报名人数 : 605/1000</p>
                            <p>报名所需 : <span>50 积分</span></p>
                        </div>
                    </div>
                    <div box="1">
                        <a class="over">已结束</a>
                    </div>
                </div>
                <div class="liCont">报名时间： 2017-06-25 15:00  至  2017-06-30 15:00</div>
            </li>
            <li @click="goto(['centeractivitydetail'])">
                <div class="liHead" flex>
                    <div box="2">
                        <img src="../../../../static/wx/center/reapack.png">
                        <p>认证用户可报名</p>
                    </div>
                    <div box="4">
                        <div>
                            <h2>龙泉驿职工年终盛典</h2>
                            <p>报名人数 : 605/1000</p>
                            <p>报名所需 : <span>50 积分</span></p>
                        </div>
                    </div>
                    <div box="1">
                        <a class="over">已结束</a>
                    </div>
                </div>
                <div class="liCont">报名时间： 2017-06-25 15:00  至  2017-06-30 15:00</div>
            </li>
        </ul>
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
            ...mapActions(['goto']),
            date3Filter,
        },
        created () {

        }
    }
</script>
