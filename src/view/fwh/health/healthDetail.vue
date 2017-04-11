<style lang="less">
    @import "../../../../static/normal.less";
    @import "healthDetail.less";
</style>
<template>
    <div class="healthDetail" style="background-color: #ffffff;height: 100%;overflow: scroll;padding-top:1.6533333rem;">
        <appHead title="健身项目详情"></appHead>
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
            <p>报名详情(多人项目),可以14人同时报名</p>
            <ul>
                <li>
                    <div class="timeLine">
                        <span>10:31-10:50</span>
                    </div>
                    <div class="siginList" flex items="center">
                        <div box="1" flex justify="between">
                            <a><img src="../../../../static/wx/img/1.jpg"></a>
                            <a><img src="../../../../static/wx/img/2.jpg"></a>
                            <a><img src="../../../../static/wx/img/3.jpg"></a>
                            <a><img src="../../../../static/wx/img/4.png"></a>
                            <a><img src="../../../../static/wx/img/5.jpg"></a>
                        </div>
                        <a class="ising" @click="isShow(1)">报名</a>
                    </div>
                </li>
                <li>
                    <div class="timeLine">
                        <span>10:31-10:50</span>
                    </div>
                    <div class="siginList" flex items="center">
                        <div box="1" flex justify="between">
                            <a><img src="../../../../static/wx/img/1.jpg"></a>
                            <a><img src="../../../../static/wx/img/2.jpg"></a>
                            <a><img src="../../../../static/wx/img/3.jpg"></a>
                            <a><img src="../../../../static/wx/img/4.png"></a>
                            <a><img src="../../../../static/wx/img/5.jpg"></a>
                        </div>
                        <a class="over" @click="isShow(2)">已截止</a>
                    </div>
                </li>
                <li>
                    <div class="timeLine">
                        <span>10:31-10:50</span>
                    </div>
                    <div class="siginList" flex items="center">
                        <div box="1" flex justify="between">
                            <a><img src="../../../../static/wx/img/1.jpg"></a>
                            <a><img src="../../../../static/wx/img/2.jpg"></a>
                            <a><img src="../../../../static/wx/img/3.jpg"></a>
                            <a></a>
                            <a @click="goto(['healthPerson'])">...</a>
                        </div>
                        <a class="over" @click="isShow(3)">已满员</a>
                    </div>
                </li>
            </ul>
        </div>

        <myImgDialog @on-result-change="onResultChange" :img="img" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>


    </div>
</template>

<script type="es6">
    import { InlineCalendar,Group} from 'vux'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
    export default{
        data(){
            return{
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
                isshow:false,//控制弹窗
                img:'../../../../static/wx/succ.png',//控制弹窗图片
                title:'这是标题',   //控制弹窗标题
                content:'恭喜您！报名成功',  //控制弹窗内容
                btns: {btn:'确定'},
            }
        },
        components:{
            appHead,Group,InlineCalendar,myImgDialog
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['goto','getActivity','clear']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            },
            calenderClick(){
                console.log(this.value);
            },
            isShow(val){
                if (val==1){
                    this.img='../../../../static/wx/succ.png';
                    this.content='恭喜您！报名成功';
                    this.btns={btn:'确定'};
                }else if (val==2){
                    this.img='../../../../static/wx/default.png';
                    this.content='对不起，已经满员拉';
                    this.btns={btn:'确定'};
                }else if (val==3){
                    this.img='';
                    this.content="是否确定取消预约报名";
                    this.btns= {
                        cancelAction:function () {
                            alert(1);
                        }
                    };
                }

                this.isshow=true;
            },
            onResultChange(val){
                this.isshow=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
        },
        created () {

        },
        destroyed(){
            this.clear()
        }
    }
</script>
