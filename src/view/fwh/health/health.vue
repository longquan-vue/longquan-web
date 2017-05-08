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
        <div class="healthList" v-if="list.length>0">
            <ul>
                <li flex @click="go(['healthDetail',item.id])" v-for="(item,index) in list">
                    <div flex items="center"><img :src="item.picUrl"></div>
                    <div box="1">{{item.name}}</div>
                    <div class="">
                        <span>所需 {{item.score}} 积分</span>
                        <img src="/static/wx/center/jiantou.png">
                    </div>
                </li>
            </ul>
        </div>

        <nothing title="暂无健身项目哦！" content="请留意健身项目，会不定期更新各种健身项目" v-if="list.length==0"></nothing>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import nothing from '../../../components/public/nothing/nothing.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            appHead,nothing
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear','getHealth','clearPage']),
            date3Filter,
        },
        created () {
            this.getHealth()
        },
        destroyed(){
            this.clear()
        }
    }
</script>
