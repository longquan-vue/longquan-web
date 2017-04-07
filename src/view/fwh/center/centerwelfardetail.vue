<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerwelfardetail.less";
</style>
<template>
    <div class="centerwelfaardetail">
        <appHead title="福利详情"></appHead>
        <div class="detailHead">
            <img src="../../../../static/wx/center/reapack.png" v-if="data.type==2">
            <div v-if="data.type==3">
                <h2>{{data.ticket}}</h2>
                <p>兑换码</p>
            </div>
        </div>
        <div class="detailCont">
            <ul>
                <li flex>
                    <div box="1">名称 : </div>
                    <div box="8">{{data.name}}</div>
                </li>
                <li flex>
                    <div box="1">积分 : </div>
                    <div box="8">{{data.score}}  积分</div>
                </li>
                <li flex>
                    <div box="1">次数 : </div>
                    <div box="8">每人  {{data.time}} 次</div>
                </li>
                <li flex>
                    <div box="1">提供 : </div>
                    <div box="8"><a :href="data.website">{{data.provider}}</a></div>
                </li>
                <li flex>
                    <div box="1">时间 : </div>
                    <div box="8">{{date3Filter(data.startTime)}} 至 {{date3Filter(data.endTime)}} </div>
                </li>
                <li flex>
                    <div box="1">规则 : </div>
                    <div box="8" v-html="data.rule"></div>
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
        computed: {...mapGetters(['data'])},
        methods:{
            ...mapActions(['goto','getWelfareDetail']),
            date3Filter
        },
        created () {
            this.getWelfareDetail();
        }
    }
</script>
