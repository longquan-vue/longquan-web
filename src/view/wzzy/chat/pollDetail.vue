<style lang="less">
    .wzzy-poll-detail{
        .wzzy-poll-detail-head{
            background-color: #FFF7F7;padding: 50px 30px 30px 30px;position: relative;margin-top: 20px;;
            h2{ font-size: 28px;color: #333;margin-bottom: 20px;}
            p{ font-size: 14px;color: #333;
                i{ color: #818181;}
                em{ color: #ff7e00;}
            }
            img{ position: absolute;top: 10px;left: -10px;}
        }
        .wzzy-poll-detail-intro{
            font-size: 16px;line-height: 28px;padding: 20px 0;border-bottom: 1px solid #E7E7E7;
        }
        .wzzy-poll-detail-cont{
            > p{ font-size: 14px;color: #333;overflow: hidden;padding: 20px 0;
                span{ color: #ff7e00;padding: 0 3px;}
                i{ color: #bc0000;margin-left: 15px;cursor: pointer}
                a{ border: 1px solid #999999;color: #999;display: inline-block;float: right;padding: 3px 10px;border-radius: 15px;cursor: pointer;
                    img{ vertical-align: middle;position: relative;top: -2px;}
                }
            }

            .poll-card{
                margin-bottom: 13px;
                .poll-card-head{
                    position: relative;height: 250px;cursor: pointer;
                    img{ width: 100%;height: 100%;}
                    > span{ position: absolute;top: 10px;left: 0;width: 40px;height: 28px;text-align: center;background-color: #7254E8;
                        color: #ffffff;font-size: 14px;line-height: 28px;border-top-right-radius: 14px;border-bottom-right-radius: 14px;
                    }
                    p{
                        position: absolute;left: 0;bottom: 0;width: 100%;padding:0 20px;height: 32px;line-height: 32px;color: #ffffff;
                        background-color: rgba(0,0,0,.5);
                        i{ float: right}
                    }
                }
                .poll-card-cont{
                    padding: 15px 20px;-webkit-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
                    -moz-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
                    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
                    h2{ font-size: 16px;color: #333;margin-bottom: 5px;}
                    p{ font-size: 14px;color: #8a8a8a;margin-bottom: 10px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
                    a{ display: block;width: 100%;height: 32px;border: 1px solid #BC0000;color: #BC0000;cursor: pointer;
                        text-align: center;line-height: 32px;border-radius: 32px;;
                        -webkit-transition: all 0.3s;
                        -moz-transition: all 0.3s;
                        -ms-transition: all 0.3s;
                        -o-transition: all 0.3s;
                        transition: all 0.3s;
                        &:hover{ color: #ffffff;background-color: #BC0000;}
                    }
                }
            }
        }
    }
    .wzzy-list-li{
        li{ overflow: hidden;padding: 16px 0;border-bottom: 1px solid #E7E7E7;font-size: 14px;
            &:nth-last-child(1){ border-bottom: none}
            span{ float: left;width: 10%;color: #8a8a8a;}
            div{ float: left;color: #333333;width: 80%;}
        }
    }
    .person-slide{
        position: relative;
        .person-slide-img{ height:400px;width:50%;display:block;margin: auto}
        h2{ font-size: 22px;color: #333333;padding: 20px 0;border-bottom: 1px solid #E7E7E7;}
        p{ padding: 15px 0;font-size: 14px;color: #666666;line-height: 22px;
            height: 120px;overflow-y: scroll;
        }
        .el-carousel__arrow{ top: 30%;}
        .showCount{ position: absolute;top: 60%;right: 0;}
    }
</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="the-place" style="">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>互动交流</el-breadcrumb-item>
                <el-breadcrumb-item>投票选举详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>投票选举详情</a></div>
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
                        你当前已投 <span>{{data.time - num}}</span> 票，投完 <span>{{data.time}}</span> 票可获得积分奖励    <i @click="dialogVisible=true">查看规则></i>
                        <a>按号数 <img src="../../../../static/wzzy/updown.png"></a>
                    </p>
                    <el-row :gutter="13">
                        <el-col :span="6" v-for="(item,index) in data.questions" :key="index">
                            <div class="poll-card">
                                <div class="poll-card-head" @click="showImg(item)">
                                    <span>{{item.id}}</span>
                                    <img :src="item.files[0] && item.files[0].url">
                                    <p>
                                        <span>{{item.num?item.num:0}}票</span>
                                        <i>{{item.files.length}} 图</i>
                                    </p>
                                </div>
                                <div class="poll-card-cont">
                                    <h2>{{item.title}}</h2>
                                    <p>{{item.files[0] && item.files[0].description}}</p>
                                    <a @click="doVote(item)">投票</a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
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
        <el-dialog v-model="dialogImg.show" size="tiny" class="wzzy-dialog" :show-close="false">
            <span slot="title" class="wzzy-dialog-header" >
                人物详情
                <img src="../../../../static/wzzy/wzzy-close.png" @click="dialogImg.show=false">
            </span>
            <div class="person-slide">
                <el-carousel :interval="4000" height="600px" trigger="click" arrow="always" indicator-position="none" @change="changeSlide">
                    <el-carousel-item v-for="(item, index) in dialogImg.item.files" :key="index">
                        <img :src="item.url" class="person-slide-img">
                        <div class="person-slide-cont">
                            <h2>{{item.title}}</h2>
                            <p>{{item.description}}</p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div class="showCount">图 {{imgIndex}} / {{dialogImg.item.files.length}}</div>
            </div>

        </el-dialog>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {alert,confirm} from '../../../actions'
    import {doVoteApi,surplusVoteApi} from '../../../api/pollApi'
    export default{
        data(){
            return{
                dialogVisible: false,
                dialogImg:{item:{files:[]},show:false},
                imgIndex:1,
                num:0
            }
        },
        components:{
        },
        computed: {
            ...mapGetters(['login', 'page','data']),
        },
        methods:{
            ...mapActions(['go','clear','getPoll','changePage','changeSys']),
            ...filters,
            showImg(item){
                this.dialogImg = {
                  item,show:true
                }
            },
            changeSlide(index){
                this.imgIndex = index+1;
            },
            doVote({id,pollId}){  //投票
                if (this.login.id){
                  doVoteApi({pollId,questionId:id}).then(()=>{
                    alert('恭喜您！投票成功');
                    this.getPoll();
                    this.num ++;
                  }).catch((data)=>{
                    alert(data.msg,'error');
                  });
                }else {
                  confirm('您还未登陆，无法报名。请先登录...', 'warning').then(() => this.changeSys({qrcode: true}))
                }

            },
        },
        created () {
          this.getPoll().then(()=>surplusVoteApi(this.data.id).then((data)=>{
              this.num = data;
          }));
        },
        destroyed(){

        }
    }
</script>
