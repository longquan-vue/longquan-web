<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./recruitManage.less";
</style>
<template>
    <div class="centerCruit" style="background-color: #F0F0F0;height: 100%;">
        <ul class="centerCruitList">
            <li  @click="go(['recruitManageEdit',item.id])" v-for="(item,index) in list">
                <div class="listTitle" flex justify="between" items="center">
                    <span>{{item.name}}</span>
                    <a class="over" v-if="isEnd(item.end)">已结束</a>
                    <a class="ising" v-if="!isEnd(item.end)">进行中</a>
                </div>
                <div class="listCont">
                    <P flex justify="between">
                        <span>招聘人数 : {{item.num}}</span>
                        <span>{{item.pay}} 元/月</span>
                    </P>
                    <P><span>意向报名 : </span>58人</P>
                    <P><span>直接拨打 : </span>153人</P>
                </div>
                <div class="listFoot">
                    招聘单位:{{item.company}}
                </div>
                <div class="listBtn">
                    <a class="btn-0" @click="goto(['recruitManageEdit',{id:'钟成'}])">查看编辑</a>
                    <a class="btn-0">报名名单</a>
                </div>
            </li>
            <li  @click="go(['recruitManageEdit',item.id])" v-for="(item,index) in list">
                <div class="listTitle" flex justify="between" items="center">
                    <span>{{item.name}}</span>
                    <a class="over" v-if="isEnd(item.end)">已结束</a>
                    <a class="ising" v-if="!isEnd(item.end)">进行中</a>
                </div>
                <div class="listCont">
                    <P flex justify="between">
                        <span>招聘人数 : {{item.num}}</span>
                        <span>{{item.pay}} 元/月</span>
                    </P>
                    <P><span>意向报名 : </span>58人</P>
                    <P><span>直接拨打 : </span>153人</P>
                </div>
                <div class="listFoot">
                    招聘单位:{{item.company}}
                </div>
                <div class="listBtn">
                    <a>查看编辑</a>
                    <a>报名名单</a>
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
                name: '',
            }
        },
        components:{
            appHead
        },
        computed: {...mapGetters(['list'])},
        methods:{
            ...mapActions(['getRecruit','clear','goto','go']),
            ...filter
        },
        created () {
            this.getRecruit();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
