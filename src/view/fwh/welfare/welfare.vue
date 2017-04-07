<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./welfare.less";
</style>
<template>
    <div class="welfare">
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
                        <div box="1" class="listDetail">
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
                        <div class="listStatus" @click="popupOpen=true">
                            <p>{{item.score}}积分</p>
                            <a>兑换</a>
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


        <mt-popup v-model="popupVisible" popup-transition="popup-fade">
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
        </mt-popup>
        <mt-popup v-model="popupOpen" popup-transition="popup-fade" style="background:none;">
            <div class="popupOpenBox">
                <img class="img" src="../../../../static/wx/getSuccess.png">
                <div class="mess">
                    兑换成功，获得一个红包
                </div>
                <img class="del" src="../../../../static/wx/del.png" @click="popupOpen=false">
                <!--<img class="img" src="../../../static/wx/delete.png" @click="popupOpen=false">-->
            </div>
        </mt-popup>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    export default{
        data(){
            return{
                popupVisible:false,  //控制规则详情
                popupOpen:false    //控制兑换详情
            }
        },
        components:{

        },
        computed: {...mapGetters(['login','list','data'])},
        methods:{
            ...mapActions(['getMine','getWelfare','clear','getWelfareDetail','goto']),
            date3Filter,
            detail(index){
                this.popupVisible=true;
            },
            openRule(data){
                this.popupVisible=true;
                this.getWelfareDetail(data);
            }
        },
        created () {
            this.getMine();
            this.getWelfare();
        },
        destroyed(){
            this.clear();
        }
    }
</script>
