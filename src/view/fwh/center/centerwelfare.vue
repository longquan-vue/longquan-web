<style lang="less" scoped>
    @import "./centerwelfare.less";
</style>
<template>
    <div class="centerMess">
        <appHead title="我的福利"></appHead>
        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="demo4Value" @on-pullup-loading="load4" height="-50" v-if="list.length>0">
            <div class="centerMessList">
                <ul>
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
                        <div box="1" style="text-align:right;">
                            <a @click.stop="del(index)" :plain="true">删除</a>
                        </div>
                    </li>
                </ul>
            </div>
            <!--pullup slot-->
            <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up"
                 style="position: absolute; width: 100%; text-align: center;">
                    <span class="pullup-arrow"
                          v-show="demo4Value.pullupStatus === 'default' || demo4Value.pullupStatus === 'up' || demo4Value.pullupStatus === 'down'"
                          :class="{'rotate': demo4Value.pullupStatus === 'down'}">↑</span>
                <span v-show="demo4Value.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            </div>
        </scroller>
        <nothing title="暂无福利~" content="您可以去福利中心领取福利" v-if="list.length==0"></nothing>

        <actionsheet v-model="show3" :menus="menus3" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import nothing from '../../../components/public/nothing/nothing.vue'
    import {Actionsheet, TransferDomDirective as TransferDom, Scroller, Spinner} from 'vux'
    export default{
        data(){
            return{
                show3: false,
                idx: 0,
                menus3: {
                    'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
                    delete: '<span style="color:red">删除</span>'
                },
                demo4Value: {
                    pullupStatus: ''
                },
            }
        },
        directives: {
            TransferDom
        },
        components: {
            appHead, Actionsheet, Scroller, Spinner ,nothing
        },
        computed: {...mapGetters(['list']),
        },
        methods:{
            ...mapActions(['goto','clear','getMineWelfare','delMethod', 'changePage']),
            ...filter,
            del(index){
                this.show3 = true;
                this.idx = index;
            },
            async onDelete () {
                await this.delMethod(this.idx);
                this.$nextTick(() => {
                    this.$refs.scroller.reset()
                });
            },
            load4 () {
                setTimeout(async() => {
                    await this.changePage();
                    if (this.$store.state.page.page>this.$store.state.page.pages){
                        setTimeout(() => {
                            this.$refs.scroller.disablePullup();
                        }, 100)
                    }else {
                        await this.getMineWelfare();
                        this.$nextTick(() => {
                            this.$refs.scroller.reset()
                        });
                        setTimeout(() => {
                            this.demo4Value.pullupStatus = 'default';
                        }, 10);
                    }
                }, 2000)
            }
        },
        async created () {
            await this.getMineWelfare();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
