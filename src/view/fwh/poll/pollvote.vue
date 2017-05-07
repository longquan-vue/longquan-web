<style lang="less" scoped>
    @import "./pollvote.less";
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
        <div class="imgList">
            <p class="imgListHead" flex justify="between">
                <span>你当前已投{{data.time - num}}/{{data.time}}票,投完{{data.time}}票即可获得积分奖励</span>
                <a><em>按号数</em> ↑↓</a>
            </p>
            <ul flex justify="between" wrap="wrap">
                <li v-for="(item,index) in data.questions">
                    <div class="imgBox" @click="showImg(index)">
                        <x-img :src="item.files[0] && item.files[0].url" :webp-src="`${item.files[0] && item.files[0].url}?type=webp`" default-src="../../../../static/wx/test/def.png"
                               @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error"
                               :offset="-100" container=".pollvote" :delay="1000"
                        ></x-img>
                        <p flex justify="between"><span>{{item.num?item.num:0}}票</span><i>{{item.files.length}}图</i></p>
                    </div>
                    <div class="messBox">
                        <p><i>{{item.id}}</i> <span>{{item.title}}</span></p>
                        <p>{{item.files[0] && item.files[0].description}}</p>
                        <p>
                            <a @click="doVote(item)">投票</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <popup v-model="showImgDetail" height="100%">
            <div class="popupImgDetail">
                <a @click="showImgDetail=false" class="closePopup">X</a>
                <swiper :show-dots="false" height="100%" :index="index" @on-index-change="demo_onIndexChange">
                    <swiper-item class="swiper-demo-img" v-for="(item, index) in (data.questions && data.questions[idx].files)" :key="index" style="background:#333">
                        <img :src="item.url" class="swiperImg">
                        <div class="swiperMess">
                            <h2>{{data.questions[idx].title}}</h2>
                            <div class="swiperMessBox">{{item.description}}</div>
                        </div>
                    </swiper-item>
                </swiper>
                <div class="showSwiperItem">图 {{index+1}}/{{data.questions[idx].files.length}}</div>
            </div>
        </popup>


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
                                <span>投票次数: </span>
                                <div box="5">{{data.time}}
                                    <span>次/天/人</span>
                                </div>
                            </li>
                            <li flex>
                                <span>连续可投: </span>
                                <div box="5">{{data.days}}
                                    <span>天</span>
                                </div>
                            </li>
                            <li flex>
                                <span>重复投票: </span>
                                <div box="5">{{data.repetition==0?'单日不能重复投票给同一对象':'单日能重复投票给同一对象'}}</div>
                            </li>
                            <li flex>
                                <span>投票时间: </span>
                                <div box="5">{{date3Filter(data.start)}} 至 {{date3Filter(data.end)}}</div>
                            </li>
                            <li flex>
                                <span>答题规则:</span>
                                <div box="5" style="padding:0" class="ql-editor" v-html="decode(data.rule)"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </x-dialog>
        </div>

        <myImgDialog @on-result-change="onResultChange" :bgImg="bgImg" :img="img" :title="title" :def="def" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import { XImg , TransferDom, Popup ,Swiper ,SwiperItem ,Scroller,XDialog} from 'vux'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
    import {doVoteApi,surplusVoteApi} from '../../../api/pollApi'
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
                num:0,
                showImgDetail:false,
                index:0,
                idx:0,
                popupVisible:false,
                isshow:false,//控制弹窗
                img:'../../../../static/wx/succ.png',//控制弹窗图片
                title:'提示',   //控制弹窗标题
                content:'恭喜您！报名成功',  //控制弹窗内容
                btns: {btn:'确定'},
                def:'',
                bgImg:''
            }
        },
        directives: {
            TransferDom
        },
        components:{
            XImg , Popup ,Swiper ,SwiperItem ,Scroller,XDialog,myImgDialog
        },
        computed: {
            ...mapGetters([ 'page','data']),
        },
        methods:{
            ...mapActions(['go','clear','getPoll','clearPage']),
            ...filters,
            success (src, ele) {
                console.log('success load', src);
            },
            error (src, ele, msg) {
                console.log('error load', msg, src);
            },
            showImg(idx){
                this.idx = idx;
                this.showImgDetail = true;
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
                    this.img='../../../../static/wx/succ.png';
                    this.content='恭喜您！投票成功';
                    this.btns={btn:'确定'};
                }else if (val==2){
                    this.img='../../../../static/wx/default.png';
                    this.content='对不起，您已经投过票啦';
                    this.btns={btn:'确定'};
                }
                this.isshow=true;
            },
            doVote({id,pollId}){  //投票
                doVoteApi({pollId,questionId:id}).then((data)=>{
                    this.isShow(1);
                    this.getPoll();
                    this.num ++;
                }).catch((data)=>{
                    this.img='../../../../static/wx/default.png';
                    this.content=data.msg;
                    this.btns={btn:'确定'};
                    this.isshow=true;
                });
            }
        },
        mounted () {

        },
        created () {
         this.getPoll().then(()=>surplusVoteApi(this.data.id).then((data)=>{
           this.num = data;
         }));
        },
        destroyed(){
            this.clear()
        }
    }
</script>
