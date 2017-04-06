<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerwelfare.less";
</style>
<template>
    <div class="centerMess">
        <div class="centerMessHead">
            <div flex>
                <div box="1" flex items="center" style="padding-left:10px;">
                    <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
                </div>
                <div box="4" flex items="center" justify="center">
                    <h2>我的福利</h2>
                </div>
                <div box="1" flex items="center">

                </div>
            </div>
        </div>
        <ul class="centerMessList">
            <li v-for="(item,index) in mineWelfare" flex @click="goto(['centerwelfardetail',{id:item.id,ticket:item.ticket}])">
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
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        computed: {...mapGetters(['mineWelfare', 'page']),
        },
        methods:{
            ...mapActions(['goto','getMineWelfare']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            }
        },
        created () {
            this.getMineWelfare()
        }
    }
</script>
