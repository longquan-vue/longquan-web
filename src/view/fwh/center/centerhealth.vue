<style lang="less" scoped>
    @import "./centerhealth.less";
</style>
<template>
    <div class="centerMess">
        <appHead title="我报名的健身项目"></appHead>
        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="scroller" @on-pullup-loading="loadMore" height="-50" v-if="list.length>0">
            <div class="scrollerBox">
                <ul class="centerMessList">
                    <li v-for="(item,index) in list" flex @click="go(['healthDetail',item.id])">
                        <div>
                            <img :src="item.picUrl">
                        </div>
                        <div box="4">
                            <div>
                                <h2>
                                    {{item.name}}
                                    <i v-if="isEnd(item.end)">已过期</i>
                                    <i v-if="item.status == 1 && !isEnd(item.end)">已签到</i>
                                    <a v-if="item.status == 0 && !isEnd(item.end)" @click="openCode()"><img src="../../../../static/wx/center/sao.png">扫码签到</a>
                                </h2>
                                <p>预约时间 : {{date3Filter(item.start)}} - {{HHmmFilter(item.end)}}</p>
                            </div>
                        </div>
                        <div box="1">
                            <a @click="del(index)"><img src="../../../../static/wx/recover.png"></a>
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
        <nothing title="您没有报名的工会活动哦！" content="您可以去工会活动列表报名您喜欢的工会活动" v-if="list.length==0"></nothing>

        <actionsheet v-model="showDel" :menus="delMenu" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import nothing from '../../../components/public/nothing/nothing.vue'
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
            appHead,Scroller, Spinner ,Actionsheet ,nothing
        },
        computed: {...mapGetters(['login', 'list']),
        },
        methods:{
            ...mapActions(['getMineHealth','clear', 'delMethod', 'changePage','go']),
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
                        await this.getMineHealth();
                        this.$nextTick(() => {
                            this.$refs.scroller.reset()
                        });
                        setTimeout(() => {
                            this.scroller.pullupStatus = 'default';
                        }, 10);
                    }

                }, 2000)
            },
            openCode(){

            },
        },
        async created () {
            await this.getMineHealth();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
