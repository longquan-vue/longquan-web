<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "activity.less";
</style>
<template>
    <div class="centeractivity" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
        <ul class="centerMessList">
            <li @click="goto(['centeractivitydetail',{id:item.id}])" v-for="(item,index) in list">
                <div class="liHead" flex>
                    <div box="2">
                        <img :src="item.picUrl">
                        <p v-if="item.entry">认证用户可报名</p>
                    </div>
                    <div box="4">
                        <div>
                            <h2>{{item.name}}</h2>
                            <p>报名人数 : {{item.current}}/{{item.total}}</p>
                            <p>报名所需 : <span>{{item.score?item.score:'0'}} 积分</span></p>
                        </div>
                    </div>
                    <div>
                        <a class="over" v-if="isEnd(item.end)">已结束</a>
                        <a class="ising" v-if="!isEnd(item.end)">进行中</a>
                    </div>
                </div>
                <div class="liCont">报名时间： {{date3Filter(item.entryStart)}}  至  {{date3Filter(item.entryEnd)}}</div>
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
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['goto','getActivity','clear']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            }
        },
        created () {
            this.getActivity();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
