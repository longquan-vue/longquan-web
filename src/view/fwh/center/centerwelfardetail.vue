<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerwelfardetail.less";
</style>
<template>
    <div class="centerwelfaardetail">
        <div class="centerMessHead">
            <div flex>
                <div box="1" flex items="center" style="padding-left:10px;">
                    <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
                </div>
                <div box="4" flex items="center" justify="center">
                    <h2>福利详情</h2>
                </div>
                <div box="1" flex items="center">

                </div>
            </div>
        </div>
        <div class="detailHead">
            <img src="../../../../static/wx/center/reapack.png" v-if="welfareDetail.type==2">
            <div v-if="welfareDetail.type==3">
                <h2>{{welfareDetail.ticket}}</h2>
                <p>兑换码</p>
            </div>
        </div>
        <div class="detailCont">
            <ul>
                <li flex>
                    <div box="1">名称 : </div>
                    <div box="8">{{welfareDetail.name}}</div>
                </li>
                <li flex>
                    <div box="1">积分 : </div>
                    <div box="8">{{welfareDetail.score}}  积分</div>
                </li>
                <li flex>
                    <div box="1">次数 : </div>
                    <div box="8">每人  {{welfareDetail.time}} 次</div>
                </li>
                <li flex>
                    <div box="1">提供 : </div>
                    <div box="8"><a :href="welfareDetail.website">{{welfareDetail.provider}}</a></div>
                </li>
                <li flex>
                    <div box="1">时间 : </div>
                    <div box="8">{{date3Filter(welfareDetail.startTime)}} 至 {{date3Filter(welfareDetail.endTime)}} </div>
                </li>
                <li flex>
                    <div box="1">规则 : </div>
                    <div box="8" v-html="welfareDetail.rule"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        computed: {...mapGetters(['welfareDetail'])},
        methods:{
            ...mapActions(['goto','getWelfareDetail']),
            date3Filter
        },
        created () {
            this.getWelfareDetail();
        }
    }
</script>
