<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "activity.less";
</style>
<template>
    <div class="centeractivity" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="scroller" @on-pullup-loading="loadMore">
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
                            <div>
                                <a class="ising" v-if="!isEnd(item.end)">进行中</a>
                                <a class="over" v-if="isEnd(item.end)">已结束</a>
                            </div>
                        </div>
                        <div class="liCont">报名时间： {{date3Filter(item.entryStart)}}  至  {{date3Filter(item.entryEnd)}}</div>
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
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import { TransferDomDirective as TransferDom, Scroller, Spinner} from 'vux'
    export default{
        data(){
            return{
                scroller: {
                    pullupStatus: ''
                },
            }
        },
        directives: {
            TransferDom
        },
        components:{
             Scroller, Spinner
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','getActivity','clear','getMine','changePage']),
            ...filters,
            loadMore () {
                setTimeout(async() => {
                    await this.changePage();
                    if (this.$store.state.page.page>this.$store.state.page.pages){
                        setTimeout(() => {
                            this.$refs.scroller.disablePullup();
                        }, 100)
                    }else {
                        await this.getActivity();
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
            await this.getMine();
            await this.getActivity();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
