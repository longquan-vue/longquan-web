<style lang="less" scoped>
  .fwh-echo-box{
    .fwh-echo-item{ margin-bottom: 0.2rem;background-color: #ffffff;
    }
    .fwh-echo-item-head{
      font-size: 0.4266667rem;padding: 0.3rem;
      span{ color: #BC0000;}
      p{ color: #333;}
    }
    .fwh-echo-item-cont{
      font-size: 0.4266667rem;padding:0 0.3rem;margin-bottom: 0.3rem;
      span{ color: #BC0000;}
      p{ color: #8a8a8a;}
    }
    .fwh-echo-item-foot{
      height: 0.72rem;line-height: 0.72rem;padding: 0 0.3rem;
      border-top: 1px solid #E7E7E7;
      color: #aaa;
    }
  }
  .askEcho{ cursor: pointer;height: 50px;line-height: 50px;color: #ffffff;display: block;
    width: 100%;;position: fixed;bottom: 0;font-size: 0.4rem;background-color: #FF8004;text-align: center;
  }
  .showNoScroll-title{ height: 1rem;line-height: 1rem;background-color: #FFE8D2;position: relative;
    color: #FF7E00;font-size: 0.4rem;
    img{ width: 12px;position: absolute;right: 0.3rem;top: 0.3rem}
  }
  .my-ask {
    background-color: #ffffff;padding: 0.3rem;text-align: left;
    &>p {font-size: 14px;color: #818181;padding-bottom: 15px;border-bottom: 1px solid #E7E7E7;}
    .my-ask-box {padding-top: 20px;text-align: left}
  }
  .formSubmit {width: 250px;height: 40px;display: block;margin: 20px auto;background-color: #E00404;
    text-align: center;line-height: 40px;color: #ffffff;font-size: 16px;border-radius: 4px;cursor: pointer;}
</style>
<template>
  <div class="fwh-echo" style="background-color: #F0F0F0;height: 100%;overflow: scroll">
    <scroller ref="scroller" lock-x scrollbar-y use-pullup v-model="scroller" @on-pullup-loading="loadMore" v-if="list.length>0" height="-46">
      <div class="fwh-echo-box">
          <div class="fwh-echo-item" v-for="(item,index) in list" @click="go(['echoDetail-fwh',item.id])">
              <div class="fwh-echo-item-head" flex>
                <span>问：</span>
                <p box="1">{{item.title}}</p>
              </div>
              <div class="fwh-echo-item-cont" flex>
                <span>答：</span>
                <p box="1" v-html="limitFilter(strFilter(decode(item.answer)),100)"></p>
              </div>
              <div class="fwh-echo-item-foot">时间：{{date3Filter(item.quesTime)}}</div>
          </div>
      </div>
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up"
           style="position: absolute; width: 100%; text-align: center;">
                <span class="pullup-arrow"
                      v-show="scroller.pullupStatus === 'default' || scroller.pullupStatus === 'up' || scroller.pullupStatus === 'down'"
                      :class="{'rotate': scroller.pullupStatus === 'down'}">↑</span>
        <span v-show="scroller.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </scroller>
    <x-header :left-options="{showBack: false}" style="background:#FF8004" @on-click-title="showNoScroll = true">我要咨询</x-header>

    <div v-transfer-dom>
      <x-dialog v-model="showNoScroll" class="dialog-demo" :scroll="false" hide-on-blur>
        <div class="showNoScroll-title">
          我要咨询<img src="/static/wzzy/wzzy-close.png" @click="showNoScroll=false">
        </div>
        <div class="my-ask">
          <p>提示：遵守国家有关法律、法规，尊重网上道德，承担一切因您的行为而直接或间接引起的法律责任。龙泉驿区总工会拥有管理笔名和留言的一切权利。</p>
          <div class="my-ask-box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="top" class="echo_question">
              <el-form-item label="标题" prop="title">
                <el-input type="textarea" v-model="ruleForm.title" :rows="2"></el-input>
              </el-form-item>
              <el-form-item label="咨询内容" prop="question">
                <el-input type="textarea" v-model="ruleForm.question" :rows="4"></el-input>
              </el-form-item>
            </el-form>
            <a class="formSubmit" @click="submitForm()">提交</a>
          </div>
        </div>
      </x-dialog>
    </div>

    <nothing title="暂无咨询内容哦！" content="您可以在回音壁提出您想要咨询的内容" v-if="list.length==0"></nothing>
  </div>
</template>

<script type="es6">
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import filters from '../../../filters'
  import nothing from '../../../components/public/nothing/nothing.vue'
  import { TransferDomDirective as TransferDom, Scroller, Spinner,XHeader,XDialog} from 'vux'
  export default{
    data(){
      return{
        showNoScroll:false,
        scroller: {
          pullupStatus: ''
        },
        ruleForm: {
          title: '',
          question: ''
        },
        rules: {
          title: [
            {required: true, message: '请填写咨询标题'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符'}
          ],
          question: [
            {required: true, message: '请填写咨询内容'},
            {min: 3, max: 200, message: '长度在 3 到 200 个字符'}
          ]
        }
      }
    },
    directives: {
      TransferDom
    },
    components:{
      nothing,Scroller, Spinner,XHeader,XDialog
    },
    computed: {...mapGetters([ 'page','list']),
    },
    methods:{
      ...mapActions(['go','clear','findEcho','changePage','getMine']),
      ...filters,
      loadMore () {
        setTimeout(async() => {
          await this.changePage();
          if (this.page.page>this.page.pages){
            setTimeout(() => {
              this.$refs.scroller.disablePullup();
            }, 100)
          }else {
            await this.findEcho();
            this.$nextTick(() => {
              this.$refs.scroller.reset()
            });
            setTimeout(() => {
              this.scroller.pullupStatus = 'default';
            }, 10);
          }

        }, 2000)
      },
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.createEcho(this.ruleForm)
          } else {
            return false;
          }
        });
      }
    },
    async created () {
      await this.getMine();
      await this.findEcho();
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
    destroyed(){
      this.clear()
    }
  }
</script>
