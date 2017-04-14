<style lang="less">
    @import "../../../../static/normal.less";
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
                    <h2>2017龙泉驿区环境投票选举啦啦啦啦选举啦啦啦啦选举啦啦啦啦</h2>
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
                        <h3>1.问卷调查关于“2017龙泉驿区环境卫生”全面问卷调查普查关于“2017龙泉驿区环境卫生”全面问卷调查普查</h3>
                        <p><span>积分奖励 : 50</span>  <a>已过期</a></p>
                    </div>
                    <div class="askListHeadBox2">
                        阅读优秀的作品：这是显而易见的，但立竿见影的方法。如果你不读更多的好作品，你就不知道如何写出更好的作品优秀的作家都是从阅读别人的佳作开始，接着开始模仿，最后超越他们，形成自己的风格。尽可能的多读名著，在看内容的时候，更要留意文章的问题和写作的技巧。尽可能多的写每天都写，如果可能话，每天写几次。你写得多了，也就写得好了。学习如何写作和其他的学问道理是一样的，熟能生巧。写写你自己，写写博客，向出版社投稿。只是写，全情投入的写，练得越多，你的写作水平就提升得越快。随时随地记下你的灵感：随身带一本小笔记本（纳博科夫身上装满了小卡片），当你对你构思的小说，文章，或是小说里的人物有什么灵感的时候，马上记下来。当你听别人谈话时的只言片语而所有顿悟时，或看到一段散文诗或是一句歌词让你很感动时，都可以马上当他们记下来。灵感总是转瞬即逝，你及时的记录下来，便可以成为你写作的素材。我的习惯是，为我的博客要写的文章列一个清单，不断的补充它。驿区总工会为响应政府对城市环境卫生的管控，龙泉驿区总工会为响应政府对城市环境卫生的管控，龙泉驿区总工会。
                    </div>
                </div>
                <div class="askListFoot">
                    <span>调查时间：</span>2017-03-25 15:00  至  2017-03-30 15:00
                </div>
            </li>
        </ul>
        <a @click="answer" class="baoming" v-if="!isAnswer">开始答题</a>
        <div class="answerBox" v-show="isAnswer">
            <p class="answerBoxTitle">共10题,当前第2题,答完问卷即可获得积分奖励</p>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="i in 10">
                        <p class="answerTitle"> {{i}} 、龙泉驿区如果要打造一款缤纷7色额娱乐场地，您喜欢的颜色是什么？(多选)</p>
                        <checklist :name="'demo'+i"   required :options="commonList"   @on-change="(v)=>change(i,v)" v-if="i%2!=0">
                        </checklist>
                        <myTextarea v-if="i%2==0" placeholder="请输入问题答案哟" :max="150" :change="myTextareaChange"></myTextarea>
                    </div>
                </div>
            </div>
            <div class="answerBtn">
                <a class="prev" @click="switchSwiper(1)"><img src="../../../../static/wx/prev.png"></a>
                <a class="next" @click="switchSwiper(2)" v-if="this.swip.activeIndex!=9"><img src="../../../../static/wx/next.png"></a>
                <a class="next" @click="switchSwiper(2)" v-if="this.swip.activeIndex==9"><img src="../../../../static/wx/submit.png"></a>
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
                                <div  box="5">2017龙泉优秀职工投票选举</div>
                            </li>
                            <li flex>
                                <span>积分奖励: </span>
                                <div box="5">50
                                    <span>积分/天</span>
                                </div>
                            </li>
                            <li flex>
                                <span>答题次数: </span>
                                <div box="5">5
                                    <span>次/天/人</span>
                                </div>
                            </li>
                            <li flex>
                                <span>调查时间: </span>
                                <div box="5">2017-4-20 10:20 至 2017-08-20 10:30</div>
                            </li>
                            <li flex>
                                <span>答题规则:</span>
                                <div box="5">规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则
                                    规则规则规则规则规则规则规则</div>
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

        <myImgDialog @on-result-change="onResultChange" :img="img" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import { XImg , TransferDom, Popup   ,Scroller,XDialog,Checklist} from 'vux'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
    import myTextarea from '../../../components/public/x-textarea/xtextarea.vue'
    import '../../../../static/swiper.js'
    export default{
        data(){
            return{
                list: [
                    '../../../../static/wx/test/test1.jpg',
                    '../../../../static/wx/test/test2.jpg',
                    '../../../../static/wx/test/test3.jpg',
                    '../../../../static/wx/test/test4.jpg',
                    '../../../../static/wx/test/test5.jpg',
                    '../../../../static/wx/test/test6.jpg',
                    '../../../../static/wx/test/test7.jpg',
                    '../../../../static/wx/test/test8.jpg',
                ],
                showImgDetail:false,
                index:0,
                popupVisible:false,
                isshow:false,//控制弹窗
                img:'../../../../static/wx/succ.png',//控制弹窗图片
                title:'提示',   //控制弹窗标题
                content:'恭喜您！报名成功',  //控制弹窗内容
                btns: {btn:'确定'},
                isAnswer:false,
                swip:'',
                commonList: [ 'A、男', 'B、女', 'C、秀吉' ],
                errors:'',
                saveQuestion:[]
            }
        },
        directives: {
            TransferDom
        },
        components:{
            XImg , Popup  , Scroller, XDialog, myImgDialog , Checklist ,myTextarea
        },
        computed: {...mapGetters([ 'page']),
        },
        methods:{
            ...mapActions(['goto','clear','getHealth','clearPage']),
            date3Filter,
            success (src, ele) {
                console.log('success load', src);
            },
            error (src, ele, msg) {
                console.log('error load', msg, src);
            },
            showImg(id){
                this.showImgDetail = true;
                this.$nextTick(() => {
                    this.$refs.scrollerEvent.reset()
                })
            },
            demo_onIndexChange(index){    //轮播
                this.index=index;
            },
            openRules(){
                this.popupVisible = true;
            },
            onResultChange(val){
                this.isshow=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            isShow(val){
                if (val==1){
                    this.img='';
                    this.content='请回答此题后方可进入下一题';
                    this.btns={btn:'确定'};
                }else if (val==2){
                    this.img='../../../../static/wx/succ.png';
                    this.content='恭喜您投票成功，获得50积分';
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
                console.log(this.swip);
            },
            switchSwiper(index){
                if (index==2){
                    console.log(this.saveQuestion[this.swip.activeIndex+1]);
                    if (this.saveQuestion[this.swip.activeIndex+1]){   //如果存在的话说明是 单选或者多选题
                        if (this.saveQuestion[this.swip.activeIndex+1].length==0){
                            this.isShow(1);
                        }else {
                            if (this.swip.activeIndex==9){
                                this.isShow(2);
                            }else {
                                this.swip.slideNext();
                            }
                            console.log(this.saveQuestion);
                        }
                    }else {   //如果不存在 说明是 问答题
                        this.isShow(1);
                    }
                }else {
                    this.swip.slidePrev();

                }
            },
            change (idx,val) {   //单选或者多选处理
                this.saveQuestion[idx]=val;
            },
            myTextareaChange(v){   //问答处理
                // console.log(this.swip.activeIndex+1);
                this.saveQuestion[this.swip.activeIndex+1]=v;
                console.log(this.saveQuestion);
            }
        },
        mounted () {

        },
        created () {
            // this.$nextTick(() => {
            //     this.$refs.scrollerEvent.reset({top: 0});
            // })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
