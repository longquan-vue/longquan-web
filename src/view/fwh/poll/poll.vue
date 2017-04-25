<style lang="less" scoped>
    @import "./poll.less";
</style>
<template>
    <div class="poll" id="poll" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
        <div>
            <div class="height:44px;">
                <sticky scroll-box="poll">
                    <tab :line-width=2 active-color='#fc378c' v-model="index">
                        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="change(item)" :key="index">{{item}}</tab-item>
                    </tab>
                </sticky>
            </div>
            <scroller lock-x scrollbar-y @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200" height="-50">
                <div class="tab-box">
                    <ul v-if="index==0" class="askListUl">
                        <li @click="go(['pollquestion',item.id])" v-for="(item,index) in list">
                            <div class="askListHead">
                                <div class="askListHeadBox1">
                                    <h3>{{item.title}}</h3>
                                    <p><span>积分奖励 : {{item.score}}</span>  <a v-if="isEnd(item.end)">已过期</a></p>
                                </div>
                                <div class="askListHeadBox2 askListHeadBoxHidden">{{item.description}}</div>
                            </div>
                            <div class="askListFoot">
                                <span>调查时间：</span>{{date3Filter(item.start)}}  至  {{date3Filter(item.end)}}
                            </div>
                        </li>
                    </ul>
                    <ul v-if="index==1" class="askListUl">
                        <li @click="go(['pollvote',item.id])" v-for="(item,index) in list">
                            <div class="askListHead">
                                <div class="askListHeadBox1">
                                    <h3>{{item.title}}</h3>
                                    <p><span>积分奖励 : {{item.score}}</span>  <a v-if="isEnd(item.end)">已过期</a></p>
                                </div>
                                <div class="askListHeadBox2">{{item.description}}</div>
                            </div>
                            <div class="askListFoot">
                                <span>调查时间：</span>{{date3Filter(item.start)}}  至  {{date3Filter(item.end)}}
                            </div>
                        </li>
                    </ul>
                </div>
                <load-more tip="loading" v-if="onFetching"></load-more>
            </scroller>
        </div>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem ,LoadMore ,Scroller} from 'vux'

    export default{
        data(){
            return{
                list2: ['问卷调查', '投票选举'],
                demo2: '问卷调查',
                index:0,
                onFetching:false
            }
        },
        components:{
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem,
            LoadMore,
            Scroller
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['clear', 'getPollList', 'changeSelect', 'delPoll', 'go','changePage']),
            ...filter,
            async change(item){
                this.clear();
                this.demo2 = item;
                if (this.demo2 == '问卷调查'){
                    this.changeSelect({key: 'type', value: 0});
                    await this.getPollList();
                    this.$nextTick(() => {
                        this.$refs.scrollerBottom.reset({top: 0})
                    })
                }else {
                    this.changeSelect({key: 'type', value: 1});
                    await this.getPollList();
                    this.$nextTick(() => {
                        this.$refs.scrollerBottom.reset({top: 0})
                    })
                }
            },
            onScrollBottom () {
                if (this.onFetching) {
                    console.log('正在加载中别啦了')
                } else {
                    this.onFetching = true;
                    setTimeout(async () => {
                        await this.changePage();
                        if (this.$store.state.page.page>this.$store.state.page.pages){
                            setTimeout(() => {
                                this.onFetching = false
                            }, 100)
                        }else {
                            await this.getPollList();
                            this.$nextTick(() => {
                                this.$refs.scrollerBottom.reset();
                            });
                            setTimeout(() => {
                                this.onFetching = false
                            }, 100)
                        }

                    }, 2000)
                }
            },
        },
        async created () {
            this.changeSelect({key: 'type', value: 0});
            await this.getPollList();
            this.$nextTick(() => {
                this.$refs.scrollerBottom.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
