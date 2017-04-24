<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerrecruit.less";
</style>
<template>
    <div class="centerCruit" style="background-color: #F0F0F0;height: 100%;overflow: scroll;padding-top:50px;">
        <appHead title="我收藏的招聘信息"></appHead>

        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="scroller" @on-pullup-loading="loadMore" height="-50" v-if="list.length>0">
            <div class="scrollerBox">
                <ul class="centerCruitList">
                    <li  @click="go(['centerrecruitdetail',item.id])" v-for="(item,index) in list">
                        <div class="listTitle" flex justify="between" items="center">
                            <span>{{item.name}}</span>
                            <a class="over" v-if="isEnd(item.end)">已结束</a>
                            <a class="ising" v-if="!isEnd(item.end)">进行中</a>
                        </div>
                        <div class="listCont" flex justify="between">
                            <span>招聘人数:{{item.num}}</span>
                            <span>{{item.pay}} 元/月</span>
                        </div>
                        <div class="listFoot">
                            招聘单位:{{item.company}}
                        </div>
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

        <nothing v-if="list.length==0" title="没有活动！" content="请留意近期公会活动，公会不定期举办各类活动"></nothing>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import nothing from '../../../components/public/nothing/nothing.vue'
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
            appHead,Scroller, Spinner ,nothing
        },
        computed: {...mapGetters(['login','list'])},
        methods:{
            ...mapActions(['getMineRecruit','clear','go','changePage']),
            ...filter,
            loadMore () {
                setTimeout(async() => {
                    await this.changePage();
                    if (this.$store.state.page.page>this.$store.state.page.pages){
                        setTimeout(() => {
                            this.$refs.scroller.disablePullup();
                        }, 100)
                    }else {
                        await this.getMineRecruit();
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
            await this.getMineRecruit();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
