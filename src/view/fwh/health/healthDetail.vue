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
                <li v-for="(item,index) in data.starts">
                    <div class="timeLine">
                        <span>{{date8Filter(data.starts[index])}}--{{date8Filter(data.ends[index])}}</span>
                    </div>
                    <div class="siginList" flex items="center">
                        <div box="1" flex justify="between">
                            <a><img src="../../../../static/wx/img/1.jpg"></a>
                            <a><img src="../../../../static/wx/img/2.jpg"></a>
                            <a><img src="../../../../static/wx/img/3.jpg"></a>
                            <a><img src="../../../../static/wx/img/4.png"></a>
                            <a @click="goto(['healthPerson'])">...</a>
                        </div>
                        <a class="ising" @click="isShow(1)">报名</a>
                    </div>
                </li>
            </ul>
        </div>

        <!--<div class="healthCont">-->
            <!--<p>报名详情({{itemFilter(data.total)}}),可以{{data.total}}人同时报名</p>-->
            <!--<ul>-->
                <!--<li>-->
                    <!--<div class="timeLine">-->
                        <!--<span>10:31-10:50</span>-->
                    <!--</div>-->
                    <!--<div class="siginList" flex items="center">-->
                        <!--<div box="1" flex justify="between">-->
                            <!--<a><img src="../../../../static/wx/img/1.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/2.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/3.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/4.png"></a>-->
                            <!--<a><img src="../../../../static/wx/img/5.jpg"></a>-->
                        <!--</div>-->
                        <!--<a class="ising" @click="isShow(1)">报名</a>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<div class="timeLine">-->
                        <!--<span>10:31-10:50</span>-->
                    <!--</div>-->
                    <!--<div class="siginList" flex items="center">-->
                        <!--<div box="1" flex justify="between">-->
                            <!--<a><img src="../../../../static/wx/img/1.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/2.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/3.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/4.png"></a>-->
                            <!--<a @click="goto(['healthPerson'])">...</a>-->
                        <!--</div>-->
                        <!--<a class="over" @click="isShow(2)">已截止</a>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<div class="timeLine">-->
                        <!--<span>10:31-10:50</span>-->
                    <!--</div>-->
                    <!--<div class="siginList" flex items="center">-->
                        <!--<div box="1" flex justify="between">-->
                            <!--<a><img src="../../../../static/wx/img/1.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/2.jpg"></a>-->
                            <!--<a><img src="../../../../static/wx/img/3.jpg"></a>-->
                            <!--<a></a>-->
                            <!--<a @click="goto(['healthPerson'])">...</a>-->
                        <!--</div>-->
                        <!--<a class="over" @click="isShow(3)">已满员</a>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->

        <myImgDialog @on-result-change="onResultChange" :img="img" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>


    </div>
</template>

<script type="es6">
    import { InlineCalendar,Group} from 'vux'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
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
        watch:{
            value(newval,oldval){
                console.log(oldval+'老');
                console.log(newval+'新');
            }
        },
        components:{
            appHead,Group,InlineCalendar,myImgDialog
        },
        computed: {...mapGetters(['data']),
        },
        methods:{
            ...mapActions(['goto','gethealthDetail','clear']),
            ...filters,
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
            setting(val){
                let dateaa = this.$store.state.data.date.split('|');
                // console.log(dateaa);
                this.buildSlotFn = val ? (line, index, data) => {
                    // console.log(data);
                    let mons = data.month_str>9?data.month_str:'0'+data.month_str;
                    let days = data.day>9?data.day:'0'+data.day;
                    let dates =  data.year+'-'+mons+'-'+days ;
                    // console.log(dates);
                    return  dateaa.indexOf(dates)>-1? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : ''

                } : () => ''
            }
        },
        async created () {
            await this.gethealthDetail();
            this.setting(true);
        },
        destroyed(){
            this.clear()
        }
    }
</script>
