<style lang="less">
    @import "./poll.less";
    @import "../../../../static/swiper.min.css";
</style>
<template>
    <div class="pollvote" style="background-color: #F0F0F0;height: 100%;overflow: scroll;padding-top:50px;">
        <div class="centerMessHead">
            <div flex>
                <div  flex items="center" style="padding-left:10px;">
                    <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
                </div>
                <div box="4" flex items="center" justify="center" class="headTitle">
                    <h2>{{data.title}}</h2>
                </div>
                <div box="1" flex items="center">
                    <a class="a" @click="openRules()">规则</a>
                </div>
            </div>
        </div>
        <ul class="askListUl" v-if="!isAnswer">
            <li>
                <div class="askListHead">
                    <div class="askListHeadBox1">
                        <h3>{{data.title}}</h3>
                        <p><span>积分奖励 : {{data.score}}</span>  <a v-if="isEnd(data.end)">已过期</a></p>
                    </div>
                    <div class="askListHeadBox2">{{data.description}}</div>
                </div>
                <div class="askListFoot">
                    <span>调查时间：</span>{{date3Filter(data.start)}}  至  {{date3Filter(data.end)}}
                </div>
            </li>
        </ul>
        <a @click="answer" class="baoming" v-if="!isAnswer">开始答题</a>
        <div class="answerBox" v-show="isAnswer">
            <p class="answerBoxTitle">共{{data.questions && data.questions.length}}题,当前第{{swip.activeIndex+1}}题,答完问卷即可获得{{data.score}}积分奖励</p>
            <div class="swiper-container swiper-no-swiping">
                <div class="swiper-wrapper swiper-no-swiping">
                    <div class="swiper-slide swiper-no-swiping" v-for="(item,i) in questions && questions">
                        <p class="answerTitle"> {{i+1}} 、{{item.title}}</p>
                        <div class="singleChoice" v-if="item.type==1">
                            <el-radio-group @input="(v)=>setQuestions('questions.'+i+'.result',v)" :value="item.result">
                                <el-radio :label="answer.name" v-for="(answer,index) in item.options" :key="index" :value="answer.name">{{words(index)}} 、 {{answer.name}}</el-radio>
                            </el-radio-group>
                        </div>
                        <div class="singleChoice" v-if="item.type==2">
                            <el-checkbox-group @input="(v)=>setQuestions('questions.'+i+'.result',v)" :value="item.result || []">
                                <el-checkbox :label="answer.name" v-for="(answer,index) in item.options" :value="answer.name" :key="index">{{words(index)}} 、 {{answer.name}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="singleChoice" v-if="item.type==3">
                            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" :value="item.result" @input="(v)=>setQuestions('questions.'+i+'.result',v)"></el-input>
                        </div>
                        <!--<checklist :name="'demo'+i"  required :options="answerList(item.options)" show-error v-model="checklist0011" @on-error="onError" @on-clear-error="onNoError"-->
                                   <!--@on-change="(v)=>setListVal(['questions.'+i+'.result',v])" v-if="item.type==1" :max="1">-->
                            <!--<p slot="footer" v-show="error" class="error">{{error}}</p>-->
                        <!--</checklist>-->
                        <!--<checklist :name="'demo'+i"  required :options="answerList(item.options)"  @on-change="(v,item)=>change(v,item)" v-if="item.type==2">-->
                        <!--</checklist>-->
                        <!--<myTextarea v-if="item.type==3" placeholder="请输入问题答案哟" :max="150" :change="myTextareaChange"></myTextarea>-->
                    </div>
                </div>
            </div>
            <div class="answerBtn">
                <a class="prev" @click="switchSwiper(1)"><img src="../../../../static/wx/prev.png"></a>
                <a class="next" @click="switchSwiper(2)" v-if="this.swip.activeIndex!=(questions.length-1)"><img src="../../../../static/wx/next.png"></a>
                <a class="next" @click="switchSwiper(3)" v-if="this.swip.activeIndex==(questions.length-1)"><img src="../../../../static/wx/submit.png"></a>
            </div>
        </div>


        <div v-transfer-dom>
            <x-dialog v-model="popupVisible" class="dialog-demo" :hideOnBlur="true">
                <div class="popupBox">
                    <div class="popupHead">
                        规则详情
                        <img src="../../../../static/wx/del.png" @click="popupVisible=false">
                    </div>
                    <div class="popupCont">
                        <ul>
                            <li flex>
                                <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称: </span>
                                <div  box="5">{{data.title}}</div>
                            </li>
                            <li flex>
                                <span>积分奖励: </span>
                                <div box="5">{{data.score}}
                                    <span>积分/天</span>
                                </div>
                            </li>
                            <li flex>
                                <span>答题次数: </span>
                                <div box="5">{{data.time}}
                                    <span>次/天/人</span>
                                </div>
                            </li>
                            <li flex>
                                <span>调查时间: </span>
                                <div box="5">{{date3Filter(data.start)}}  至  {{date3Filter(data.end)}}</div>
                            </li>
                            <li flex>
                                <span>答题规则:</span>
                                <div box="5" style="padding:0" class="ql-editor" v-html="decode(data.rule)"></div>
                            </li>
                        </ul>
                        <!--<div class="rules" flex>-->
                        <!--<span>规则:</span>-->
                        <!--<div class="">-->
                        <!--<p>1、规则11111111</p>-->
                        <!--<p>2、规则11111111</p>-->
                        <!--<p>3、规则11111111规则11111111规则11111111规则11111111规则11111111规则11111111规则11111111</p>-->
                        <!--</div>-->
                        <!--</div>-->
                    </div>
                </div>
            </x-dialog>
        </div>

        <myConfirmDialog @on-result-change="onResultChange" :title="title" :content="content" :btns="btns" :isShow="isshow"></myConfirmDialog>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import { XImg , TransferDom, Popup   ,Scroller,XDialog,Checklist} from 'vux'
    import myConfirmDialog from '../../../components/public/confirmDialog/confirmDialog.vue'
    import myTextarea from '../../../components/public/x-textarea/xtextarea.vue'
    import {doTopicApi} from '../../../api/pollApi'
    import '../../../../static/swiper.js'
    export default{
        data(){
            return{
                showImgDetail:false,
                index:0,//上一题 还是下一题控制
                idx:1, // 当前题目
                popupVisible:false,
                isshow: false,//控制弹窗
                title: '提示',   //控制弹窗标题
                content: '请回答此题后方可进入下一题',  //控制弹窗内容
                btns: {},
                isAnswer:false,
                swip:'',
                commonList: [ 'A、男', 'B、女', 'C、秀吉' ],
                errors:'',
                error:'',
                checklist0011:[],
                result:'',
                questions:[],
            }
        },
        watch: {
            data(){
                this.setQuestions();
            }
        },
        directives: {
            TransferDom
        },
        components:{
            XImg , Popup  , Scroller, XDialog, myConfirmDialog , Checklist ,myTextarea
        },
        computed: {
            ...mapGetters(['data']),
        },
        methods:{
            ...mapActions(['getPoll','clear','clearPage','setListVal']),
            ...filters,
            setQuestions(key, val){
                if (key) {
                    this.setListVal([key, val]);
                }
                this.questions = this.data && this.data.questions ? this.data.questions.map((q) => ({...q, options: JSON.parse(q.options)})) : []
            },
            openRules(){
                this.popupVisible = true;
            },
            onResultChange(val){
                this.isshow=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            isShow(val){
                if (val==1){
                    this.content='请回答此题后方可进入下一题';
                    this.btns={btn:'确定'};
                }else if (val==2){
                    this.content='恭喜您投票成功，获得积分奖励';
                    this.btns={btn:'确定'};
                }else {
                    this.content='提交失败，请重试';
                    this.btns={btn:'确定'};
                }
                this.isshow=true;
            },
            answer(){    //开始答题
                this.isAnswer = true;
                this.swip = new Swiper('.swiper-container', {
                    paginationClickable: true,
                    spaceBetween: 30,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                });
            },
            switchSwiper(index){
                if (index==2){
                    if (this.questions[this.swip.activeIndex].result){
                        this.swip.slideNext();
                    }else {
                        this.isShow(1);
                    }
                }else if(index==3){
                    if (this.questions[this.swip.activeIndex].result){
                        doTopicApi(this.questions).then(()=>this.isShow(2)).catch(()=>{this.isShow(3)});
                    }else {
                        this.isShow(1);
                    }
                }
                else {
                    this.swip.slidePrev();
                }
            }
        },
        mounted () {

        },
        created () {
            this.getPoll();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
