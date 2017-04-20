<style lang="less">
    @import "../../../../static/normal.less";
    @import "healthDetail.less";
</style>
<template>
    <div class="healthDetail" style="background-color: #ffffff;height: 100%;overflow: scroll;padding-top:50px;">
        <appHead :title="data.name"></appHead>
        <inline-calendar @click="calenderClick()"
                         class="inline-calendar-demo"
                         :show.sync="show"
                         v-model="value"
                         start-date="2016-04-01"
                         end-date="2018-05-30"
                         :range="range"
                         :show-last-month="showLastMonth"
                         :show-next-month="showNextMonth"
                         :highlight-weekend="highlightWeekend"
                         :return-six-rows="return6Rows"
                         :hide-header="hideHeader"
                         :hide-week-list="hideWeekList"
                         :replace-text-list="replaceTextList"
                         :weeks-list="weeksList"
                         :render-function="buildSlotFn"
                         :disable-past="disablePast"
                         :disable-future="disableFuture">
        </inline-calendar>

        <div class="healthCont">
            <p>报名详情({{itemFilter(data.total)}}),可以{{data.total}}人同时报名</p>
            <ul>
                <!--<li v-for="(item,index) in groupList(list,{flagFn:(item)=>login.id==item.id})"-->
                <!--v-if="groupList.length!=0">-->
                <!--<div class="timeLine">-->
                <!--<span>{{HHmmFilter(item.start)}}&#45;&#45;{{HHmmFilter(item.end)}}</span>-->
                <!--</div>-->
                <!--<div class="siginList" flex items="center">-->
                <!--<div box="1" flex justify="between">-->
                <!--<a v-for="u in 4">-->
                <!--<img :src="item.list[u-1].headimgurl" v-if="item.list[u-1]">-->
                <!--</a>-->
                <!--<a @click="goto(['healthPerson'])" class="lasta" v-if="item.list.length>4">...</a>-->
                <!--<a v-if="item.list.length<=4"></a>-->
                <!--</div>-->
                <!--<a class="ising" v-if="!item.flag"-->
                <!--@click="entry({id:data.id,starts:[item.start],ends:[item.end]},value)">报名</a>-->
                <!--<a class="ising" v-if="item.flag"-->
                <!--@click="noentry({id:data.id,starts:[item.start],ends:[item.end]},value)">取消报名</a>-->
                <!--<a class="over" v-if="item.num >= data.total" @click="">已满员</a>-->
                <!--</div>-->
                <!--</li>-->

                <li v-for="(item,index) in data.starts">
                    <div class="timeLine">
                        <span>{{HHmmFilter(item)}}--{{HHmmFilter(data.ends[index])}}</span>
                    </div>
                    <div class="siginList" flex items="center">
                        <div box="1" flex justify="between">
                            <a v-for="u in 5">
                                <img :src="group[index] && group[index].list[u-1].headimgurl" v-if="group[index] && group[index].list[u-1] && u < 5">
                                <span v-if="group[index] && group[index].list[u-1] && u == 5">...</span>
                            </a>
                        </div>
                        <a class="ising" v-if="!(group[index] && group[index].flag)" @click="entry({id:data.id,starts:[item],ends:[data.ends[index]]},value)">报名</a>
                        <a class="ising" v-if="group[index] && group[index].flag" @click="noentry({id:data.id,starts:[item],ends:[data.ends[index]]},value)">取消报名</a>
                        <a class="over" v-if="group[index] && group[index].num >= data.total" @click="">已满员</a>
                    </div>
                </li>

            </ul>
        </div>

        <myConfirmDialog @on-result-change="onResultChange" :title="title" :content="content" :btns="btns"
                         :isShow="isshow"></myConfirmDialog>


    </div>
</template>

<script type="es6">
    import {InlineCalendar, Group} from 'vux'
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import filters from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
    import moment from 'moment'
    import {entryHealthApi, cancelEntryHealthApi} from '../../../api/healthApi'
    import myConfirmDialog from '../../../components/public/confirmDialog/confirmDialog.vue'
    export default{
        data(){
            return {
                show: true,  //是否显示
                value: '',   //当前选中日期，使用v-model绑定，默认为空，即选中当天日期
                listValue: '',
                range: false,
                showLastMonth: true,
                showNextMonth: true,
                highlightWeekend: false,
                return6Rows: true,
                hideHeader: false,
                hideWeekList: false,
                replaceTextList: {},
                replace: false,
                changeWeeksList: false,
                weeksList: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                useCustomFn: false,
                buildSlotFn: () => '',
                disablePast: false,
                disableFuture: false,
                isshow: false,//控制弹窗
                title: '提示',   //控制弹窗标题
                content: '兑换成功',  //控制弹窗内容
                btns: {},
            }
        },
        watch: {
            value(newval, oldval){
                // console.log(oldval+'老');
                console.log(newval + '新');
                this.change('created', moment(newval).format('x') * 1)
            }
        },
        components: {
            appHead, Group, InlineCalendar, myConfirmDialog
        },
        computed: {
            ...mapGetters(['data', 'list', 'login']),
            group(){
                return this.groupList(this.list, {flagFn: (item) => this.login.id == item.id})
            }
        },
        methods: {
            ...mapActions(['goto', 'gethealthDetail', 'clear', 'getHealthEnter', 'changeSelect']),
            ...filters,
            calenderClick(){
                console.log(this.value);
            },
            isShow(val, data, date){
                if (val == 1) {   //报名成功
                    this.content = '恭喜您！报名成功';
                    this.btns = {btn: '确定'};
                } else if (val == 2) { // 取消
                    // this.img = '../../../../static/wx/succ.png';
                    this.content = '是否确定取消预约报名';
                    this.btns = {
                        btn1: '是', btn2: '否', action: () => {
                            cancelEntryHealthApi({...data, dates: [moment(date).format('x') * 1]}).then(() => {
                                window.location.reload();
                            });
                        }
                    };
                }

                this.isshow = true;
            },
            onResultChange(val){
                this.isshow = val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            setting(val){
                let dateaa = this.$store.state.data.date.split('|');
                // console.log(dateaa);
                this.buildSlotFn = val ? (line, index, data) => {
                            // console.log(data);
                            let mons = data.month_str > 9 ? data.month_str : '0' + data.month_str;
                            let days = data.day > 9 ? data.day : '0' + data.day;
                            let dates = data.year + '-' + mons + '-' + days;
                            // console.log(dates);
                            return dateaa.indexOf(dates) > -1 ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : ''

                        } : () => ''
            },
            change(key, value){   //这是每个 change
                this.changeSelect({key, value});
                this.getHealthEnter()
            },
            entry(data, date){
                entryHealthApi({...data, dates: [moment(date).format('x') * 1]}).then(() => {
                    this.isShow(1);
                });
            },
            noentry(data, date){
                this.isShow(2, data, date)
            }
        },
        async created () {
            await this.gethealthDetail();
            this.value = moment().format('YYYY-MM-DD');
            this.setting(true);
        },
        destroyed(){
            this.clear()
        }
    }
</script>
