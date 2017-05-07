<style lang="less" scoped>
  .questionPerson{ min-height: 0;
    .questionPerson-cont{ background-color: #ffffff;}
  }
</style>
<template>
  <div class="recruitSign" style="background-color: #F0F0F0;height: 100%;overflow: scroll;padding-top:1.6533333rem;">
    <appHead title="回音壁详情" style="background-color:#FF8004"></appHead>
    <div class="questionPerson" style="margin-top:0;">
      <div class="questionPerson-head"><img style="vertical-align: middle;position:relative;top:-2px;" src="../../../../static/wzzy/icon-hynr.png"> 咨询内容</div>
      <div class="questionPerson-cont">
        <h2>{{data.title}}</h2>
        <p>
          <span>咨询时间:{{date3Filter(data.quesTime)}}</span>
          <span>咨询人:{{data.questioner}}</span>
        </p>
        <div class="ql-editor" v-html="decode(data.question)"></div>
      </div>
    </div>
    <div class="questionPerson">
      <div class="questionPerson-head"><img style="vertical-align: middle;position:relative;top:-2px;" src="../../../../static/wzzy/icon-hynr.png"> 回应内容</div>
      <div class="questionPerson-cont">
        <p>
          <span>回应时间:{{date3Filter(data.repTime)}}</span>
          <span>回应人:{{data.replier}}</span>
        </p>
        <div class="ql-editor" v-html="decode(data.answer)"></div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import filter from '../../../filters'
  import appHead from '../../../components/public/apphead/Apphead.vue'
  import {entryRecruitApi} from '../../../api/recruitApi'
  export default{
    data(){
      return{

      }
    },
    components:{
      appHead
    },
    computed: {...mapGetters(['data'])},
    methods:{
      ...mapActions(['clear','getEcho']),
      ...filter,

    },
    created () {
      this.getEcho()
    },
    destroyed(){
      this.clear()
    }
  }
</script>
