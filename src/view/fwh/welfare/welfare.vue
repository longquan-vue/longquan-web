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
                               剩余 ： <span>20</span>  / <span>{{item.total}}</span>
                            </div>
                            <div>
                                福利提供 ： <span>{{item.provider}}</span>
                            </div>
                        </div>
                        <div class="listStatus">
                            <p>{{item.score}}积分</p>
                            <a @click="convert(index)" v-if="isEnd(item.endTime)">兑换</a>
                            <a v-if="!isEnd(item.endTime)">已结束</a>
                            <a v-if="!isStart(item.startTime)">未开始</a>
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
                                <div box="5" v-html="data.rule"></div>
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

        <div v-transfer-dom>
            <x-dialog v-model="popupOpen" class="dialog-demo" :hideOnBlur="true">
                <div class="popupOpenBox">
                    <img class="img" src="../../../../static/wx/getSuccess.png">
                    <div class="mess">兑换成功</div>
                    <img class="del" src="../../../../static/wx/del.png" @click="popupOpen=false">
                    <!--<img class="img" src="../../../static/wx/delete.png" @click="popupOpen=false">-->
                </div>
            </x-dialog>
        </div>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import RollNotice from '../../../components/public/showNotice/RollNotice.vue'
    import { XDialog ,TransferDomDirective as TransferDom} from 'vux'
    import {convertApi} from '../../../api/welfareApi'
    import { Message } from 'element-ui';
    export default{
        data(){
            return{
                show:false,
                popupVisible:false,  //控制规则详情
                popupOpen:false    //控制兑换详情
            }
        },
        directives: {
            TransferDom
        },
        components:{
            RollNotice,XDialog
        },
        computed: {...mapGetters(['login','list','data'])},
        methods:{
            ...mapActions(['getMine','getWelfare','clear','getWelfareDetail','goto']),
            filters,
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
                await convertApi(id).then(()=>{
                    this.popupOpen=true;
                }).catch((data)=>{
                    Message({
                        message: data.msg,
                        type: 'error',
                        duration:1000
                    });
                });
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
