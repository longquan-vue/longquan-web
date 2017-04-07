<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerwelfare.less";
</style>
<template>
    <div class="centerMess">
        <appHead title="我的福利"></appHead>
        <ul class="centerMessList">
            <li v-for="(item,index) in list" flex @click="goto(['centerwelfardetail',{id:item.id,ticket:item.ticket,used:item.used,welfareId:item.welfareId}])">
                <div box="2">
                    <img :src="item.picUrl">
                </div>
                <div box="4">
                    <div>
                        <h2>{{item.title}} <i v-if="isEnd(item.endTime)">已过期</i></h2>
                        <p>兑换时间 : {{date3Filter(item.recording)}}</p>
                    </div>
                </div>
                <div box="1">
                    <a>删除</a>
                </div>
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
        computed: {...mapGetters(['list', 'page']),
        },
        methods:{
            ...mapActions(['goto','clear','getMineWelfare']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            }
        },
        created () {
            this.getMineWelfare()
        },
        destroyed(){
            this.clear()
        }
    }
</script>
