<style lang="less">
    .my-radio,.my-checkbox {
        vertical-align: middle;margin-right: 10px;;
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        border: solid 1px #dddddd;
        -webkit-border-radius: 20px;
        border-radius: 20px;
        font-size: 14px;
        position: relative;
        display: inline-block;
        cursor: default;
        -webkit-appearance: none;  /**隐藏原生控件**/
    }
    .my-checkbox {
        border-radius: 4px;   /**复选框的圆角要小一些**/
    }
    /**选择后的样式**/
    .my-radio:checked,.my-checkbox:checked{
        background-color: #04c9e8;
        border: solid 1px #00adc8;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        text-align: center;
        background-clip: padding-box;
    }
    /**选择后 里面小对勾样式**/
    .my-radio:checked:before,.my-checkbox:checked:before{
        content: '';
        width: 10px;
        height: 6px;
        border: 1px solid #ffffff;
        border-top: none;
        border-right: none;
        position: absolute;
        left: 4px;
        top: 4px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .questionBox{
        li{ margin-bottom: 20px;}
        .questionBox-head{
            font-size: 18px;color: #333;margin-bottom: 20px;;
            span{ color: #8a8a8a;}
        }
        .questionBox-cont{
            border: 1px solid #E7E7E7;
            p{
                line-height: 50px;border-bottom: 1px solid #E7E7E7;font-size: 14px;color: #666666;
                padding: 0 30px;
                &:nth-last-child(1){ border: none;}
            }
            .questionBox-text{
                padding: 20px;
                span{ color: #999999;font-size: 14px;vertical-align: top}
                .el-textarea{ width: 95%;
                    .el-textarea__inner{ border: none;padding: 0;}
                }
            }
        }
        .submitQuestion{
            width: 100px;height: 36px;display: block;text-align: center;line-height: 36px;border-radius: 4px;
            background-color: #BC0000;font-size: 16px;color: #ffffff;cursor: pointer;
        }

        .el-radio-group{
            display: block;width: 100%;
            .el-radio{ display: block;  margin-left: 0;  line-height: 40px;
                width: 100%;padding: 0 20px;;
                border-bottom: 1px solid #e7e7e7;
                &:nth-last-child(1){ border: none;}
            }
        }
        .el-checkbox-group{
            .el-checkbox{ display: block;  margin-left: 0;  line-height: 40px;
                width: 100%;padding: 0 20px;;
                border-bottom: 1px solid #e7e7e7;
                &:nth-last-child(1){ border: none;}
            }
        }

    }
</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="the-place" style="">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>互动交流</el-breadcrumb-item>
                <el-breadcrumb-item>问卷调查详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>问卷调查详情</a></div>
        <div class="wzzy-sub-content">
            <div class="wzzy-poll-detail">
                <div class="wzzy-poll-detail-head">
                    <h2>{{data.title}}</h2>
                    <p>
                        <span><i>投票时间：</i>{{date3Filter(data.start)}} 至 {{date3Filter(data.end)}}</span>
                        <span><i>积分奖励：</i> <em>50</em></span>
                    </p>
                    <img src="../../../../static/wzzy/ising.png">
                </div>
                <div class="wzzy-poll-detail-intro" v-html="data.description"></div>
                <div class="wzzy-poll-detail-cont">
                    <p>
                        <i @click="dialogVisible=true" style="float:right">查看规则></i>
                    </p>
                    <div class="questionBox">
                        <ul>
                            <li v-for="(item,i) in questions && questions">
                                <div class="questionBox-item" v-if="item.type==1">
                                    <div class="questionBox-head">{{i+1}} 、{{item.title}} <span>（单选）</span></div>
                                    <div class="questionBox-cont">
                                        <!--<p><label><input class="my-radio" type="radio" name="radio" >A、  男</label></p>-->
                                        <!--<p><label><input class="my-radio" type="radio" name="radio" >B、 女</label></p>-->
                                        <el-radio-group @input="(v)=>setQuestions('questions.'+i+'.result',v)" :value="item.result">
                                            <el-radio :label="answer.name" v-for="(answer,index) in item.options" :key="index" :value="answer.name">{{words(index)}} 、 {{answer.name}}</el-radio>
                                        </el-radio-group>
                                    </div>
                                </div>
                                <div class="questionBox-item" v-if="item.type==2">
                                    <div class="questionBox-head">{{i+1}} 、{{item.title}} <span>（多选）</span></div>
                                    <div class="questionBox-cont">
                                        <!--<p v-for="(answer,index) in item.options"><label><input class="my-checkbox" type="checkbox"> {{words(index)}} 、 {{answer.name}}</label></p>-->
                                        <el-checkbox-group @input="(v)=>setQuestions('questions.'+i+'.result',v)" :value="item.result || []">
                                            <el-checkbox :label="answer.name" v-for="(answer,index) in item.options" :value="answer.name" :key="index">{{words(index)}} 、 {{answer.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </div>
                                <div class="questionBox-item" v-if="item.type==3">
                                    <div class="questionBox-head">{{i+1}} 、{{item.title}} <span>（问答）</span></div>
                                    <div class="questionBox-cont">
                                        <div class="questionBox-text">
                                            <span>答：</span>
                                            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" :value="item.result" @input="(v)=>setQuestions('questions.'+i+'.result',v)"></el-input>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>

                        <a class="submitQuestion" @click="submitQuestion">提交</a>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog v-model="dialogVisible" size="tiny" class="wzzy-dialog" :show-close="false">
            <span slot="title" class="wzzy-dialog-header" >
                规则详情
                <img src="../../../../static/wzzy/wzzy-close.png" @click="dialogVisible=false">
            </span>
            <ul class="wzzy-list-li">
                <li>
                    <span>名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称: </span>
                    <div>{{data.title}}</div>
                </li>
                <li>
                    <span>积分奖励: </span>
                    <div>{{data.score}} 积分/天
                    </div>
                </li>
                <li>
                    <span>投票次数: </span>
                    <div>{{data.time}} 次/天/人
                    </div>
                </li>
                <li>
                    <span>连续可投: </span>
                    <div>{{data.days}}天</div>
                </li>
                <li>
                    <span>重复投票: </span>
                    <div>{{data.repetition==0?'单日不能重复投票给同一对象':'单日能重复投票给同一对象'}}</div>
                </li>
                <li>
                    <span>投票时间: </span>
                    <div>{{date3Filter(data.start)}} 至 {{date3Filter(data.end)}}</div>
                </li>
                <li>
                    <span>答题规则:</span>
                    <div v-html="decode(data.rule)"></div>
                </li>
            </ul>
        </el-dialog>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    import {doTopicApi,doVoteApi} from '../../../api/pollApi'
    import {alert,confirm} from '../../../actions'
    export default{
        data(){
            return{
                dialogVisible: false,
                imgIndex:1,
                questions:[],
                idx:0,
                submit:false
            }
        },
        watch: {
            data(){
                this.setQuestions();
            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters(['page','data']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getPoll','setListVal','changeSys']),
            ...filters,
            setQuestions(key, val){
                if (key) {
                    this.setListVal([key, val]);
                }
                this.questions = this.data && this.data.questions ? this.data.questions.map((q) => ({...q, options: JSON.parse(q.options)})) : []
            },
            submitQuestion(){
                for(var i=0;i<this.questions.length;i++){
                    console.log(this.questions[i]);
                    if (this.questions[i].result==null || this.questions[i].result.length==0 || this.questions[i].result==''){
                        alert('请填写第'+(i+1)+'题','error');
                        this.submit = false;
                        break;
                    }else {
                        this.submit = true;
                    }
                }
                if (this.submit){
                  if (this.$store.state.login.id){
                    doTopicApi(this.questions).then(()=>alert('提交成功,您将获得积分奖励')).catch((data)=>alert(data.msg));
                  }else {
                    confirm('您还未登陆，无法报名。请先登录...', 'warning').then(() => this.changeSys({qrcode: true}))
                  }
                }
            }
        },
        created () {
            this.getPoll();
        },
        destroyed(){

        }
    }
</script>
