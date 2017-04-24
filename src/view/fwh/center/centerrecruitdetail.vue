<style lang="less">
    @import "./centerrecruitdetail.less";
</style>
<template>
    <div class="centerwelfaardetail" style="background-color: #F0F0F0;padding-top:50px;height: 100%;overflow: scroll">
        <div class="centerMessHead">
            <div flex>
                <div box="1" flex items="center" style="padding-left:10px;">
                    <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
                </div>
                <div box="4" flex items="center" justify="center">
                    <h2>招聘详情</h2>
                </div>
                <div box="1" flex items="center">
                    <a class="a" @click="collect(1)" v-if="data.favorite==0">收藏</a>
                    <a class="a" @click="collect(0)" v-if="data.favorite!=0">取消收藏</a>
                </div>
            </div>
        </div>
        <div class="detailCont">
            <ul>
                <li flex>
                    <div box="2">招聘标题 : </div>
                    <div box="8">
                        {{data.name}}
                        <a class="sign issign" v-if="!isEnd(data.end)">进行中</a>
                        <a class="sign over" v-if="isEnd(data.end)">已结束</a>
                    </div>
                </li>
                <li flex>
                    <div box="2">招聘岗位 : </div>
                    <div box="8">{{data.company}}</div>
                </li>
                <li flex>
                    <div box="2">招聘人数 : </div>
                    <div box="8">{{data.num}}  <span>人</span></div>
                </li>
                <li flex>
                    <div box="2">薪资待遇 : </div>
                    <div box="8">{{data.pay}}  <span>元/月</span></div>
                </li>
                <li flex>
                    <div box="2">招聘单位 : </div>
                    <div box="8">{{data.company}}  </div>
                </li>
                <li flex>
                    <div box="2">单位地址 : </div>
                    <div box="8">{{data.address}}  </div>
                </li>
                <li flex>
                    <div box="2">招聘时间 : </div>
                    <div box="8">{{date3Filter(data.start)}}  至  {{date3Filter(data.end)}}</div>
                </li>
            </ul>
            <ul>
                <li flex>
                    <div box="2">招聘要求 : </div>
                    <div box="8" v-html="decode(data.claim)"></div>
                </li>
            </ul>
            <ul>
                <li flex>
                    <div box="2">福利待遇 : </div>
                    <div box="8" v-html="decode(data.treatment)"></div>
                </li>
            </ul>
            <ul>
                <div v-for="(item,index) in data.linkmans">
                    <li flex>
                        <div box="2">联系人 : </div>
                        <div box="8">{{item}}</div>
                    </li>
                    <li flex>
                        <div box="2">联系电话 : </div>
                        <div box="8">
                            <a class="tel" :href="'tel:'+data.phones[index]">
                                {{data.phones[index]}}（09:00-18:00）
                                <img src="../../../../static/wx/tel.png" style="float:right">
                            </a>
                        </div>
                    </li>
                </div>
            </ul>

        </div>

        <myConfirmDialog @on-result-change="onResultChange" :title="title" :content="content" :btns="btns"
                         :isShow="isshow"></myConfirmDialog>

        <a @click="goto(['recruitSign',{id:data.id}])" class="baoming">意向报名</a>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import {collectRecruitApi,uncollectRecruitApi} from  '../../../api/recruitApi'
    import myConfirmDialog from '../../../components/public/confirmDialog/confirmDialog.vue'
    export default{
        data(){
            return{
                isshow: false,//控制弹窗
                title: '提示',   //控制弹窗标题
                content: '兑换成功',  //控制弹窗内容
                btns: {},
            }
        },
        components:{
            appHead , myConfirmDialog
        },
        computed: {...mapGetters(['data'])},
        methods:{
            ...mapActions(['goto','clear','getRecruitDetail','setData','getMine']),
            ...filter,
            isShow(val, data, date){
                if (val == 1) {   //报名成功
                    this.content = '成功';
                    this.btns = {btn: '确定'};
                } else if (val == 2) { // 取消
                    this.content = '失败，请重新收藏!';
                    this.btns = {btn: '确定'};
                }
                this.isshow = true;
            },
            onResultChange(val){
                this.isshow = val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            collect(status){
                if (status == 1){
                    collectRecruitApi(this.$store.state.data.id).then(()=>{
                        this.isShow(1);
                        this.setData({favorite:1});
                        // this.getRecruitDetail();
                    }).catch(()=>this.isShow(2));
                }else {
                    uncollectRecruitApi(this.$store.state.data.id,2).then(()=>{
                        this.isShow(1);
                        this.setData({favorite:0});
                        // this.getRecruitDetail();
                    }).catch(()=>this.isShow(2));
                }
            }
        },
        async created () {
            await this.getMine();
            await this.getRecruitDetail();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
