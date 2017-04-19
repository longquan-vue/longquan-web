<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./recruitManage.less";
</style>
<template>
    <div class="centerCruit" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="scroller" @on-pullup-loading="loadMore">
            <div class="scrollerBox">
                <ul class="centerCruitList">
                    <li  v-for="(item,index) in list">
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
                            <a class="btn-0" @click="go(['recruitManageEdit',item.id])">查看编辑</a>
                            <a class="btn-0" @click="go(['recruitManageForm',item.id])">报名名单</a>
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
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import { TransferDomDirective as TransferDom, Scroller, Spinner} from 'vux'

    export default{
        data(){
            return{
                name: '',
                scroller: {
                    pullupStatus: ''
                },
            }
        },
        directives: {
            TransferDom
        },
        components:{
            appHead,Scroller, Spinner
        },
        computed: {...mapGetters(['list'])},
        methods:{
            ...mapActions(['getRecruit','clear','go','getMine','changePage']),
            ...filter,
            loadMore () {
                setTimeout(async() => {
                    await this.changePage();
                    if (this.$store.state.page.page>this.$store.state.page.pages){
                        setTimeout(() => {
                            this.$refs.scroller.disablePullup();
                        }, 100)
                    }else {
                        await this.getRecruit();
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
            await this.getRecruit();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
