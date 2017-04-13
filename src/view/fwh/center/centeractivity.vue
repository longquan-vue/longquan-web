<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centeractivity.less";
</style>
<template>
    <div class="centeractivity" style="background-color: #F0F0F0;padding-top:1.6533333rem;height: 100%;overflow: scroll">
        <appHead title="我的活动"></appHead>
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
                    <div box="1">
                        <a>删除</a>
                    </div>
                </div>
                <div class="liCont">报名时间： {{date3Filter(item.start)}}  至  {{date3Filter(item.end)}}</div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
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
            ...mapActions(['goto','getMineActivity','clear']),
            ...filters,

        },
        created () {
            this.getMineActivity();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
