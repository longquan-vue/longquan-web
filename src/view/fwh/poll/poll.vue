<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./poll.less";
</style>
<template>
    <div class="poll" style="background-color: #F0F0F0;height: 100%;overflow: scroll">
        <div>
            <div class="height:44px;">
                <sticky :check-sticky-support="false">
                    <tab :line-width=2 active-color='#fc378c' v-model="index">
                        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="change(item)" :key="index">{{item}}</tab-item>
                    </tab>
                </sticky>
            </div>
            <div class="tab-box">
                <ul v-if="index==0" class="askListUl">
                    <li @click="goto(['pollquestion',{id:'zhongcheng'}])" v-for="(item,index) in list">
                        <div class="askListHead">
                            <div class="askListHeadBox1">
                                <h3>1.问卷调查关于“2017龙泉驿区环境卫生”全面问卷调查普查关于“2017龙泉驿区环境卫生”全面问卷调查普查</h3>
                                <p><span>积分奖励 : 50</span>  <a>已过期</a></p>
                            </div>
                            <div class="askListHeadBox2">
                                要做一个在微信中打开的页面,需要获得微信导航头的高度,例子图要怎样才能取到那?或者是能取到除了头之外的
                                屏幕宽高也可以...
                            </div>
                        </div>
                        <div class="askListFoot">
                            <span>调查时间：</span>2017-03-25 15:00  至  2017-03-30 15:00
                        </div>
                    </li>
                </ul>
                <ul v-if="index==1" class="askListUl">
                    <li @click="goto(['pollvote',{id:'zhongcheng'}])">
                        <div class="askListHead">
                            <div class="askListHeadBox1">
                                <h3>1.投票选举关于“2017龙泉驿区环境卫生”全面问卷调查普查关于“2017龙泉驿区环境卫生”全面问卷调查普查</h3>
                                <p><span>积分奖励 : 50</span>  <a>已过期</a></p>
                            </div>
                            <div class="askListHeadBox2">
                                要做一个在微信中打开的页面,需要获得微信导航头的高度,例子图要怎样才能取到那?或者是能取到除了头之外的
                                屏幕宽高也可以...
                            </div>
                        </div>
                        <div class="askListFoot">
                            <span>调查时间：</span>2017-03-25 15:00  至  2017-03-30 15:00
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'

    export default{
        data(){
            return{
                list2: ['问卷调查', '投票选举'],
                demo2: '问卷调查',
                index:0
            }
        },
        components:{
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['clear', 'getPollList', 'changeSelect', 'delPoll', 'go']),
            ...filter,
            change(item){
                this.demo2 = item;
                if (this.demo2 == '问卷调查'){
                    this.changeSelect({key: 'type', value: 0});
                }else {
                    this.changeSelect({key: 'type', value: 1});
                }
            }
        },
        created () {
            this.changeSelect({key: 'type', value: 0});
            this.getPollList()
        },
        destroyed(){
            this.clear()
        }
    }
</script>
