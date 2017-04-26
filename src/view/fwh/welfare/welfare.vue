<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./welfare.less";
</style>
<template>
    <div class="welfare">
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
            <div class="scrollBox" flex v-show="show">
                <span box="1">福利预告:</span>

                 <roll-notice :notices="['第一条福利预告', '第二条福利预告', '第三条福利预告']"></roll-notice>

                <i box="1" @click="show=false">X</i>
            </div>
        </transition>

        <div class="welfareHead">
            <p>不定期推出各种积分兑换福利，你备好积分了么？</p>
            <a class="" href="javascript:;" @click="goto(['signin'])">
                <img src="../../../../static/wx/button.png">
            </a>
        </div>
        <div class="welfareCont">
           <a class="javascript:;" flex>
               <span>我的积分 : </span>
               <i box="1">{{login.score}}</i>
               <em flex items="center" justify="center" @click="goto(['welfareDetail',{id:login.id}])">积分明细<img src="../../../../static/wx/go.png"></em>
           </a>
           <ul class="list">
               <li v-for="(item, index) in list">
                   <div class="liHead" flex>
                        <img :src="item.picUrl">
                        <div class="listDetail" box="auto">
                            <h3>
                                {{item.name}}
                                <a @click="openRule(item)">规则详情</a>
                            </h3>
                            <div>
                               剩余 ： <span>{{item.current}}</span>  / <span>{{item.total}}</span>
                            </div>
                            <div>
                                福利提供 ： <span>{{item.provider}}</span>
                            </div>
                        </div>
                        <div class="listStatus">
                            <p>{{item.score}}积分</p>
                            <a @click="convert(index)" v-if="!isEnd(item.endTime)">兑换</a>
                            <a v-if="isEnd(item.endTime)">已结束</a>
                            <a v-if="isStart(item.startTime)">未开始</a>
                        </div>
                   </div>
                   <div class="liFoot" flex justify="between">
                       <div>
                           <p>兑换时间 : {{date3Filter(item.startTime)}} 至 {{date3Filter(item.endTime)}}</p>
                       </div>
                   </div>
               </li>
           </ul>
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
                                <span box="1">名称: </span>
                                <div  box="5">{{data.name}}</div>
                            </li>
                            <li flex>
                                <span box="1">积分: </span>
                                <div box="5">{{data.score}}
                                    <span>所需积分</span>
                                </div>
                            </li>
                            <li flex>
                                <span box="1">次数: </span>
                                <div box="5">{{data.time}}
                                    <span>次/人</span>
                                </div>
                            </li>
                            <li flex>
                                <span box="1">提供: </span>
                                <div box="5"><a :href="data.website">{{data.provider}}</a></div>
                            </li>
                            <li flex>
                                <span box="1">时间: </span>
                                <div box="5">{{date3Filter(data.startTime)}} 至 {{date3Filter(data.endTime)}}</div>
                            </li>
                            <li flex>
                                <span box="1">规则:</span>
                                <div box="5" v-html="decode(data.rule)"></div>
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

        <!--<div v-transfer-dom>-->
            <!--<x-dialog v-model="popupOpen" class="dialog-demo" :hideOnBlur="true">-->
                <!--<div class="popupOpenBox">-->
                    <!--<img class="img" src="../../../../static/wx/getSuccess.png">-->
                    <!--<div class="mess">兑换成功</div>-->
                    <!--<img class="del" src="../../../../static/wx/del.png" @click="popupOpen=false">-->
                    <!--&lt;!&ndash;<img class="img" src="../../../static/wx/delete.png" @click="popupOpen=false">&ndash;&gt;-->
                <!--</div>-->
            <!--</x-dialog>-->
        <!--</div>-->
        <myImgDialog @on-result-change="onResultChange" :img="img" :bgImg="bgImg" :def="def" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import RollNotice from '../../../components/public/showNotice/RollNotice.vue'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
    import { XDialog ,TransferDomDirective as TransferDom} from 'vux'
    import {convertApi} from '../../../api/welfareApi'
    import { Message } from 'element-ui';
    export default{
        data(){
            return{
                show:false,
                popupVisible:false,  //控制规则详情
                popupOpen:false,    //控制兑换详情
                isshow:false,//控制弹窗
                img:'',//控制弹窗图片  如果图片存在的话就没有背景，如果图片不存在就有背景
                title:'提示',   //控制弹窗标题
                content:'兑换成功',  //控制弹窗内容
                btns: {btn:'确定'},
                bgImg:'../../../../static/wx/pop-suc.png',
                def:false
            }
        },
        directives: {
            TransferDom
        },
        components:{
            RollNotice,XDialog ,myImgDialog
        },
        computed: {...mapGetters(['login','list','data'])},
        methods:{
            ...mapActions(['getMine','getWelfare','clear','getWelfareDetail','goto']),
            ...filters,
            isShow(val,id,ticket,used,welfareId){
                if (val==1){
                    this.def=true;
                    this.bgImg='../../../../static/wx/pop-error.png';
                    this.content='兑换失败!积分不足';
                    this.btns={btn:'签到赚积分',action:()=>{this.goto(['signin'])}};
                }else if (val==2){
                    this.def=false;
                    this.bgImg='../../../../static/wx/pop-suc.png';
                    this.content='兑换成功';
                    this.btns={btn:'查看积分福利',action:()=>{this.goto(['centerwelfare'])}};
                }
                this.isshow=true;
            },
            onResultChange(val){
                this.isshow=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            detail(index){
                this.popupVisible=true;
            },
            openRule(data){
                this.popupVisible=true;
                this.getWelfareDetail(data);
            },
            convert(index){
                this.convertWelfare(index);
            },
            scrollMess(){
                setTimeout(()=>{

                },2000)
            },
            async convertWelfare(index){     //兑换福利
                const id=this.$store.state.list[index].id;
                if (this.$store.state.login.score<this.$store.state.list[index].score){  //如果当前积分数 小于 福利所需积分数
                    this.isShow(1);
                }else {
                    await convertApi(id).then(()=>{
                        this.isShow(2);
                        this.getWelfare();
                    }).catch((data)=>{
                        // Message({
                        //     message: data.msg,
                        //     type: 'error',
                        //     duration:1000
                        // });
                        this.def=true;
                        this.bgImg='../../../../static/wx/pop-error.png';
                        this.content=data.msg;
                        this.btns={btn:'确定'};
                        this.isshow=true;
                    });
                }
            }
        },
        mounted(){

        },
        created () {
            this.show=true;
            this.getMine();
            this.getWelfare();
        },
        destroyed(){
            this.show=false;
            this.clear();
        }
    }
</script>
