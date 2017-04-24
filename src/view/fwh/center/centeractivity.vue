<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centeractivity.less";
</style>
<template>
    <div class="centeractivity" style="background-color: #F0F0F0;padding-top:50px;height: 100%;overflow: scroll">
        <appHead title="我的活动"></appHead>
        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="scroller" @on-pullup-loading="loadMore" height="-50">
            <div class="scrollerBox">
                <ul class="centerMessList">
                    <li @click="go(['centeractivitydetail',item.id])" v-for="(item,index) in list">
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
                            <div box="1" style="text-align:center;">
                                <a @click="del(index)">删除</a>
                            </div>
                        </div>
                        <div class="liCont">报名时间： {{date3Filter(item.start)}}  至  {{date3Filter(item.end)}}</div>
                    </li>
                </ul>
            </div>
            <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up"
                 style="position: absolute; width: 100%; text-align: center;">
                    <span class="pullup-arrow"
                          v-show="scroller.pullupStatus === 'default' || scroller.pullupStatus === 'up' || scroller.pullupStatus === 'down'"
                          :class="{'rotate': scroller.pullupStatus === 'down'}">↑</span>
                <span v-show="scroller.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            </div>
        </scroller>

        <actionsheet v-model="showDel" :menus="delMenu" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import { TransferDomDirective as TransferDom, Scroller, Spinner,Actionsheet} from 'vux'
    export default{
        data(){
            return{
                scroller: {
                    pullupStatus: ''
                },
                showDel:false,
                delMenu:{
                    'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
                    delete: '<span style="color:red">删除</span>'
                },
                idx: 0,
            }
        },
        directives: {
            TransferDom
        },
        components:{
            appHead ,Scroller, Spinner ,Actionsheet
        },
        computed: {...mapGetters(['list', 'page']),
        },
        methods:{
            ...mapActions(['go','getMineActivity','clear','changePage'],'delMethod'),
            ...filters,
            del(index){
                this.showDel = true;
                this.idx = index;
            },
            async onDelete () {
                await this.delMethod(this.idx);
                this.$nextTick(() => {
                    this.$refs.scroller.reset()
                });
            },
            loadMore () {
                setTimeout(async() => {
                    await this.changePage();
                    if (this.$store.state.page.page>this.$store.state.page.pages){
                        setTimeout(() => {
                            this.$refs.scroller.disablePullup();
                        }, 100)
                    }else {
                        await this.getMineActivity();
                        this.$nextTick(() => {
                            this.$refs.scroller.reset()
                        });
                        setTimeout(() => {
                            this.scroller.pullupStatus = 'default';
                        }, 10);
                    }

                }, 2000)
            }
        },
        async created () {
            await this.getMineActivity();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
