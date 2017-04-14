<style lang="less" scoped>
    @import "../../../../static/normal.less";
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
                    <h2>2017龙泉驿区环境投票选举啦啦啦啦选举啦啦啦啦选举啦啦啦啦</h2>
                </div>
                <div box="1" flex items="center">
                    <a class="a" @click="openRules()">规则</a>
                </div>
            </div>
        </div>
        <div class="imgList">
            <p class="imgListHead" flex justify="between">
                <span>你当前已投1/5票,投完5票即可获得积分奖励</span>
                <a><em>按号数</em> ↑↓</a>
            </p>
            <ul flex justify="between" wrap="wrap">
                <li v-for="(src,idx) in list">
                    <div class="imgBox" @click="showImg()">
                        <x-img :src="src" :webp-src="`${src}?type=webp`" default-src="../../../../static/wx/test/def.png"
                               @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error"
                               :offset="-100" container=".pollvote" :delay="1000"
                        ></x-img>
                        <p flex justify="between"><span>865票</span><i>5图</i></p>
                    </div>
                    <div class="messBox">
                        <p><i>18</i> <span>吴亦凡</span></p>
                        <p>哟，各位大哥大爷小姐姐来投我呀投我呀</p>
                        <p>
                            <a @click="isShow(1)" v-if="idx%2==0">投票</a>
                            <a @click="isShow(2)" style="background-color:#9c9c9c;" v-if="idx%2!=0">已投票</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <popup v-model="showImgDetail" height="100%">
            <div class="popupImgDetail">
                <a @click="showImgDetail=false" class="closePopup">X</a>
                <swiper :show-dots="false" height="100%" :index="index" @on-index-change="demo_onIndexChange">
                    <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index"><img :src="item" class="swiperImg"></swiper-item>
                </swiper>
                <div class="showSwiperItem">图 {{index+1}}/{{list.length}}</div>
                <div class="swiperMess">
                    <h2>2011年，李忠桔从重庆科技学院汽车检测与维修专业毕业来到成都汽车职业学院</h2>
                    <scroller lock-x height="6rem" ref="scrollerEvent" :scrollbarY="true">
                        <div class="swiperMessBox">
                            2011年，李忠桔从重庆科技学院汽车检测与维修专业毕业来到成都汽车职业学院，担任实训课教师。6年的时间，从他手中带出的优秀操作能手数不胜数，在校园的各个荣誉展板上，几乎都能看见“李忠桔”三个字以及他带领的精英团队合照。
                            3月3日上午，记者在实训车间见到了正在给学生演示发动机拆装的李忠桔，演示前，李忠桔细心地用遮盖布盖住汽车前盖的边沿以保护好车子表面的漆体，其实像这样细致规范的操作步骤，不仅是李忠桔对自己的要求，也是对学生的要求，也正是这样的细心细致，才让李忠桔在比赛
                            间，从他手中带出的优秀操作能手数不胜数，在校园的各2011年，李忠桔从重庆科技学院汽车检测与维修专业毕业来到成都汽车职业学院，担任实训课教师。6年的时间，从他手中带出的优秀操作能手数不胜数，在校园的各个荣誉展板上，几乎都能看见“李忠桔”三个字以及他带领的精英团队合照。
                            3月3日上午，记者在实训车间见到了正在给学生演示发动机拆装的李忠桔，演示前，李忠桔细心地用遮盖布盖住汽车前盖的边沿以保护好车子表面的漆体，其实像这样细致规范的操作步骤，不仅是李忠桔对自己的要求，也是对学生的要求，也正是这样的细心细致，才让李忠桔在比赛
                            间，从他手中带出的优秀操作能手数不胜数，在校园的各
                        </div>
                    </scroller>
                </div>
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
                                <div  box="5">2017龙泉优秀职工投票选举</div>
                            </li>
                            <li flex>
                                <span>积分奖励: </span>
                                <div box="5">50
                                    <span>积分/天</span>
                                </div>
                            </li>
                            <li flex>
                                <span>投票次数: </span>
                                <div box="5">5
                                    <span>次/天/人</span>
                                </div>
                            </li>
                            <li flex>
                                <span>连续可投: </span>
                                <div box="5">30
                                    <span>天</span>
                                </div>
                            </li>
                            <li flex>
                                <span>重复投票: </span>
                                <div box="5">单日不能重复投票给同一对象</div>
                            </li>
                            <li flex>
                                <span>投票时间: </span>
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
    import { XImg , TransferDom, Popup ,Swiper ,SwiperItem ,Scroller,XDialog} from 'vux'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
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
            }
        },
        directives: {
            TransferDom
        },
        components:{
            XImg , Popup ,Swiper ,SwiperItem ,Scroller,XDialog,myImgDialog
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
