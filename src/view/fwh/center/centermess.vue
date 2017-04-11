<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centermess.less";
</style>
<template>
    <div class="centerMess" style="background-color: #F0F0F0;padding-top:1.8rem;">
        <appHead title="我的消息" style="background:#FFB033"></appHead>
        <!--<ul class="centerMessList">-->
        <!--<li v-for="(item,index) in list">-->
        <!--<p>{{item.title}} <a @click="del(index)" :plain="true">删除</a></p>-->
        <!--<div class="mess">-->
        <!--<div>{{item.content}}</div>-->
        <!--<p>{{date3Filter(item.recording)}}</p>-->
        <!--</div>-->
        <!--</li>-->
        <!--</ul>-->

        <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="demo4Value" @on-pullup-loading="load4" height="">
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
                 style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
                <span v-show="demo4Value.pullupStatus === 'default'"></span>
                <span class="pullup-arrow"
                      v-show="demo4Value.pullupStatus === 'default' || demo4Value.pullupStatus === 'up' || demo4Value.pullupStatus === 'down'"
                      :class="{'rotate': demo4Value.pullupStatus === 'down'}">↑</span>
                <span v-show="demo4Value.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            </div>
        </scroller>


        <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete"
                     show-cancel></actionsheet>
    </div>
</template>

<script type="es6">
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import filter from '../../../filters'
    import {Actionsheet, TransferDomDirective as TransferDom, Scroller, Spinner} from 'vux'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    export default{
        data(){
            return {
                show: false,//控制弹窗
                content: '啦啦啦',
                showSuccess: false,
                show3: false,
                idx: 0,
                menus3: {
                    'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
                    delete: '<span style="color:red">删除</span>'
                },
                n4: 10,
                demo4Value: {
                    pullupStatus: ''
                },
            }
        },
        directives: {
            TransferDom
        },
        components: {
            appHead, Actionsheet, Scroller, Spinner
        },
        computed: {...mapGetters(['login', 'list'])},
        methods: {
            ...mapActions(['getMineMsg', 'clear', 'delMethod', 'page', 'changePage', 'clearPage']),
            ...filter,
            del(index){
                this.show3 = true;
                this.idx = index;
            },
            click (key) {
                console.log(key)
            },
            onDelete () {
                this.delMethod(this.idx)
            },
            load4 () {
                setTimeout(async() => {
                    await this.changePage();
                    await this.getMineMsg();
                    this.$nextTick(() => {
                        this.$refs.scroller.reset()
                    });
                    setTimeout(() => {
                        this.demo4Value.pullupStatus = 'default';
                        this.$nextTick(() => {
                            this.$refs.scroller.reset()
                        })
                    }, 10)
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
            this.clear()
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