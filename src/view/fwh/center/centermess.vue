<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centermess.less";
</style>
<template>
    <div class="centerMess" style="background-color: #F0F0F0;padding-top:50px;;">
        <appHead title="我的消息" style="background:#FFB033"></appHead>

        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="demo4Value" @on-pullup-loading="load4" height="-50" v-if="list.length>0">
            <!--content slot-->
            <div class="centerMessList">
                <ul>
                    <li v-for="(item,index) in list">
                        <p>{{item.title}} <a @click="del(index)" :plain="true">删除</a></p>
                        <div class="mess">
                            <div>{{item.content}}</div>
                            <p>{{date3Filter(item.recording)}}</p>
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
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import filter from '../../../filters'
    import {Actionsheet, TransferDomDirective as TransferDom, Scroller, Spinner} from 'vux'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import nothing from '../../../components/public/nothing/nothing.vue'
    export default{
        data(){
            return {
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
        computed: {...mapGetters(['login', 'list'])},
        methods: {
            ...mapActions(['getMineMsg', 'clear', 'delMethod', 'changePage', 'clearPage']),
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
                        await this.getMineMsg();
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
            await this.getMineMsg();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear();
            this.clearPage();
        }
    }
</script>


<style lang="less" scoped>
    .rotate {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .pullup-arrow {
        display: block;
        transition: all linear 0.2s;
        -webkit-transition: all linear 0.2s;
        color: #666;
        font-size: 25px;
    }
</style>
