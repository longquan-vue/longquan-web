<style lang="less" scoped>
  @import "./centeractivitydetail.less";
</style>
<template>
  <div class="centerwelfaardetail" style="background-color: #F0F0F0;padding-top:1.6533333rem;height: 100%;overflow: scroll">
    <appHead title="活动详情"></appHead>
    <div class="detailHead">
      <div class="swiper">
        <swipe swipeid="swipe" ref="swiper" :autoplay="5000" effect="slide" :loop="false">
          <div @click="" v-for="(item,index) in data.files" class="swiper-slide" slot="swiper-con">
            <img :src="item.url">
          </div>
        </swipe>
      </div>
    </div>
    <div class="detailCont">
      <ul>
        <li flex>
          <div box="2">活动名称 :</div>
          <div box="8">
            {{data.name}}
            <a v-if="!isEnd(data.end)">报名中</a>
            <a v-if="isEnd(data.end)" style="background:#ccc;">已结束</a>
          </div>
        </li>
        <li flex>
          <div box="2">报名权限 :</div>
          <div box="8">{{data.entry?'认证用户可报名':'所有用户可报名'}}</div>
        </li>
        <li flex>
          <div box="2">报名人数 :</div>
          <div box="8">{{data.current}}/{{data.total}} <span>人</span></div>
        </li>
        <li flex>
          <div box="2">报名所需 :</div>
          <div box="8">{{data.score?data.score:'0'}} <span>积分</span></div>
        </li>
        <li flex>
          <div box="2">主办方 :</div>
          <div box="8">{{data.sponsor}}</div>
        </li>
        <li flex>
          <div box="2">协办方 :</div>
          <div box="8">{{data.coSponsor}}</div>
        </li>
        <li flex>
          <div box="2">承办方 :</div>
          <div box="8">{{data.organizer}}</div>
        </li>
        <li flex>
          <div box="2">报名时间 :</div>
          <div box="8">{{date3Filter(data.entryStart)}} 至 {{date3Filter(data.entryEnd)}}</div>
        </li>
        <li flex>
          <div box="2">活动时间 :</div>
          <div box="8">{{date3Filter(data.start)}} 至 {{date3Filter(data.end)}}</div>
        </li>
        <li flex>
          <div box="2">活动地点 :</div>
          <div box="8">{{data.place}}</div>
        </li>
        <li flex>
          <div box="2">活动内容 :</div>
          <div class="ql-editor" style="padding:0" box="8" v-html="decode(data.detail)"></div>
        </li>
        <li flex>
          <div box="2">规则介绍 :</div>
          <div class="ql-editor" style="padding:0" box="8" v-html="decode(data.rule)"></div>
        </li>
      </ul>
    </div>
    <div class="isSing" v-if="!data.isSign && data.isEntry && !isEnd(data.end)" style="text-align:center;font-size:0;padding:0.3rem 0">
      <img src="/static/wx/cancleSign.png" style="width:3.68rem;margin-right:1px;" @click="cancelEntry">
      <img src="/static/wx/saoma.png" style="width:3.68rem" @click="testWx">
    </div>


    <div v-if="!data.isEntry && !isEnd(data.end)">
      <a href="javascript:;"  class="baoming" @click="sign()" style="background-image:url('/static/wx/redBtn.png')">立即报名</a>
    </div>
    <div v-if="isEnd(data.end)">
      <a href="javascript:;"  class="baoming" style="background-image:url('/static/wx/redBtn.png')">已结束</a>
    </div>
    <div v-if="data.isSign">
      <a href="javascript:;" class="baoming" style="background-image:url('/static/wx/redBtn.png')">已签到</a>
    </div>

    <myImgDialog @on-result-change="onResultChange" :img="img" :bgImg="bgImg" :def="def" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>

  </div>
</template>

<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import filters from '../../../filters'
  import appHead from '../../../components/public/apphead/Apphead.vue'
  import swipe from '../../../components/public/swip/swipe.vue'
  import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
  import {entryActivityApi, cancelEntryActivityApi,signActivityApi} from '../../../api/activityApi'
  import {settingWx, scanQRCode} from '../../../actions/wxApi'
  export default{
    data(){
      return {
        isshow: false,//控制弹窗
        img: '',//控制弹窗图片  如果图片存在的话就没有背景，如果图片不存在就有背景
        title: '提示',   //控制弹窗标题
        content: '兑换成功',  //控制弹窗内容
        btns: {btn: '确定'},
        bgImg: '/static/wx/pop-suc.png',
        def: false
      }
    },
    components: {
      appHead, swipe, myImgDialog
    },
    computed: {...mapGetters(['data'])},
    methods: {
      ...mapActions(['goto', 'clear', 'getActivityDetail', 'getMine','setData']),
      ...filters,
      isShow(val, id, ticket, used, welfareId){
        if (val == 1) {   //已经报过名
          this.def = true;
          this.bgImg = '/static/wx/pop-error.png';
          this.content = '您已经报过名啦！';
          this.btns = {btn: '确定'};
        } else if (val == 2) {   //报名成功
          this.def = false;
          this.bgImg = '/static/wx/pop-suc.png';
          this.content = '报名成功';
          this.btns = {
            btn: '', btn1: '立即查看', btn2: '确定', action: () => {
              this.goto(['centeractivity'])
            }
          };
        } else if (val == 3) {   //
          this.def = true;
          this.bgImg = '/static/wx/pop-error.png';
          this.content = '您不是职工认证用户,不能参加此活动！';
          this.btns = {
            btn: '', btn1: '去认证', btn2: '确定', action: () => {
              this.goto(['center'])
            }
          };
        } else if (val == 4) {
          this.def = true;
          this.bgImg = '/static/wx/pop-error.png';
          this.content = '该活动已经满员啦！';
          this.btns = {btn: '确定'};
        }
        this.isshow = true;
      },
      onResultChange(val){
        this.isshow = val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
      },
      toSign(id){
        entryActivityApi(id).then((data) => {
          this.isShow(2);
          this.getActivityDetail();
        }).catch((data) => {
          this.isShow(1);
        });
      },
      async sign(){
        const audit = this.$store.state.login.audit;
        const id = this.$store.state.route.params.id;
        if (this.data.current == this.data.total) {  //如果已经满员
          this.isShow(4);
        } else {
          if (this.data.entry) {
            if (audit == 2) {
              await this.toSign(id)
            } else {
              this.isShow(3);
            }
          } else {
            await this.toSign(id)
          }
        }
      },
      cancelEntry(){
        const id = this.$store.state.route.params.id;
        cancelEntryActivityApi(id).then((data) => {
          this.def = true;
          this.bgImg = '/static/wx/pop-suc.png';
          this.content = '取消成功！';
          this.btns = {btn: '确定'};
          this.isshow = true;
          this.getActivityDetail();
        }).catch((data) => {
          this.def = true;
          this.bgImg = '/static/wx/pop-error.png';
          this.content = data.msg;
          this.btns = {btn: '确定'};
          this.isshow = true;
        });
      },
      testWx(){
        scanQRCode(({resultStr}) => {
          signActivityApi(resultStr.substr(resultStr.lastIndexOf('/')+1)).then(()=>{
            this.$vux.alert.show({
              title: '提示',
              content: '签到成功',
            });
            this.setData({isSign:true})
          }).catch((data)=>{
            this.$vux.alert.show({
              title: '提示',
              content: JSON.stringify(data),
            });
          });
        }, () => {
          this.$vux.alert.show({
            title: '提示',
            content: '签到失败，请重试',
          });
        })
      }
    },
    created () {
      this.getMine();
      this.getActivityDetail();
      settingWx();
    },
    destroyed(){
      this.clear()
    }
  }
</script>
