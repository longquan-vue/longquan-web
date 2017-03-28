<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./welfare.less";
</style>
<template>
    <div class="welfare">
        <div class="welfareHead">
            <a class="" href="javascript:;" @click="">签到赚积分</a>
        </div>
        <div class="welfareCont">
           <img src="../../../../static/wx/bg.png">
           <a class="javascript:;" flex>
               <span>我的积分</span>
               <i box="1">3200</i>
               <em flex items="center" justify="center"><img src="../../../../static/wx/go.png"></em>
           </a>
           <ul class="list">
               <li v-for="(item, index) in welfare">
                   <div class="liHead" flex>
                        <img :src="item.pic_url">
                        <div box="1" class="listDetail">
                            <h3>{{item.title}}</h3>
                            <p>{{item.point}}积分</p>
                            <div>
                               剩余 ： <span>{{item.last}}</span>  / <span>{{item.all}}</span>
                            </div>
                        </div>
                        <div class="listStatus" @click="popupOpen=true">
                            兑换
                        </div>
                   </div>
                   <div class="liFoot" flex justify="between">
                       <div>
                           <h3>福利提供：{{item.support}}</h3>
                           <p><img src="../../../../static/wx/time.png"> {{item.startTime}} 至 {{item.endTime}}</p>
                       </div>
                       <a href="javascript:;" flex items="center" justify="center" @click="detail(index)">详情 > </a>
                   </div>
               </li>
               <li>
                   <div class="liHead" flex>
                       <img src="../../../../static/wx/red.png">
                       <div box="1" class="listDetail">
                           <h3>1元红包</h3>
                           <p>1000积分</p>
                           <div>
                               剩余 ： <span>20</span>  / <span>120</span>
                           </div>
                       </div>
                       <div class="listStatus">
                           兑换
                       </div>
                   </div>
                   <div class="liFoot" flex justify="between">
                       <div>
                           <h3>福利提供：成都爱创业科技有限公司</h3>
                           <p><img src="../../../../static/wx/time.png"> 2017-06-25 15:00 至 2017-06-30 15:00</p>
                       </div>
                       <a href="javascript:;" flex items="center" justify="center">详情 > </a>
                   </div>
               </li>
               <li>
                   <div class="liHead" flex>
                       <img src="../../../../static/wx/red.png">
                       <div box="1" class="listDetail">
                           <h3>1元红包</h3>
                           <p>1000积分</p>
                           <div>
                               剩余 ： <span>20</span>  / <span>120</span>
                           </div>
                       </div>
                       <div class="listStatus over">
                           兑换
                       </div>
                   </div>
                   <div class="liFoot" flex justify="between">
                       <div>
                           <h3>福利提供：成都爱创业科技有限公司</h3>
                           <p><img src="../../../../static/wx/time.png"> 2017-06-25 15:00 至 2017-06-30 15:00</p>
                       </div>
                       <a href="javascript:;" flex items="center" justify="center">详情 > </a>
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
                            <div  box="5">红包详情</div>
                        </li>
                        <li flex>
                            <span box="1">积分: </span>
                            <div box="5">500积分</div>
                        </li>
                        <li flex>
                            <span box="1">次数: </span>
                            <div box="5">每人1次</div>
                        </li>
                        <li flex>
                            <span box="1">提供: </span>
                            <div box="5">成都爱创业科技有限公司</div>
                        </li>
                        <li flex>
                            <span box="1">时间: </span>
                            <div box="5">2017-06-25 15:00 至 2017-07-12  15:00</div>
                        </li>
                        <li flex>
                            <span box="1">规则:</span>
                            <div box="5">
                                <p>1、规则11111111</p>
                                <p>2、规则11111111</p>
                                <p>3、规则11111111规则11111111规则11111111规则11111111规则11111111规则11111111规则11111111</p>
                            </div>
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
    export default{
        data(){
            return{
                popupVisible:false,  //控制规则详情
                popupOpen:false    //控制兑换详情
            }
        },
        components:{

        },
        computed: {...mapGetters(['user','welfare'])},
        methods:{
            ...mapActions(['getMine','getWelfare','clear']),
            detail(index){
                this.popupVisible=true;
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
