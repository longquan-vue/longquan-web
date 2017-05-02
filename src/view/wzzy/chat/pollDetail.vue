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
                    p{ font-size: 14px;color: #8a8a8a;margin-bottom: 10px;}
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
        <div class="pagewrap">
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="17">
                        <div class="grid-left">
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
                                        <h2>市总工会举办企（事）业单位新任工会主席岗位资格培训</h2>
                                        <p>
                                            <span><i>投票时间：</i>2017-05-15  至  2016-05-16</span>
                                            <span><i>积分奖励：</i> <em>50</em></span>
                                        </p>
                                        <img src="../../../../static/wzzy/ising.png">
                                    </div>
                                    <div class="wzzy-poll-detail-intro">
                                        会议要求，学校工会要牢牢把握习总书记提出的群团组织政治性、先进性、群众性，始终把保持和增强“三性”要求贯穿到工会工作全过程中，发挥好党同人民群众血肉相连的纽带作用，真正做到凝魂聚力、强基固本；紧紧围绕涪陵“四城同创”建设,大兴求真务实之风，全心全意为职工群众服务。大力开展劳动竞赛、技术革新，以校务公开、教代会为切入点和着力点，致力发展和谐校园关系。全体工会干部要围绕“文明其精神、强健其体魄”的总体工作思路来开展工会工作，进一步加强教职工的思想引领、情操陶冶、体育健身，使工会工作更加贴近教职工的思想、工作和生活，要努力成为教职工的“贴心人”，共同把工会建成教职工信赖的“职工之家”。
                                    </div>
                                    <div class="wzzy-poll-detail-cont">
                                        <p>
                                            你当前已投 <span>2</span> 票，投完剩于 <span>3</span> 票可获得积分奖励    <i @click="dialogVisible=true">查看规则></i>
                                            <a>按号数 <img src="../../../../static/wzzy/updown.png"></a>
                                        </p>
                                        <el-row :gutter="13">
                                            <el-col :span="6" v-for="i in 12" :key="i">
                                                <div class="poll-card">
                                                    <div class="poll-card-head" @click="dialogImg=true">
                                                        <span>12</span>
                                                        <img :src="'../../../../static/wx/img/'+i+'.jpg'">
                                                        <p>
                                                            <span>858 票</span>
                                                            <i>图 5</i>
                                                        </p>
                                                    </div>
                                                    <div class="poll-card-cont">
                                                        <h2>蕾姆</h2>
                                                        <p>从零开始的异世界生活女主！</p>
                                                        <a>投票</a>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-right grid-right-sub">
                            <tip></tip>
                            <lastDynamic></lastDynamic>
                            <someIcon></someIcon>
                        </div>
                    </el-col>
                </el-row>
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
                    <div>你心目中的二次元女神是谁</div>
                </li>
                <li>
                    <span>积分奖励: </span>
                    <div>50 积分/天
                    </div>
                </li>
                <li>
                    <span>投票次数: </span>
                    <div>2 次/天/人
                    </div>
                </li>
                <li>
                    <span>连续可投: </span>
                    <div>
                       30天
                    </div>
                </li>
                <li>
                    <span>重复投票: </span>
                    <div>单日不能重复投票给同一对象</div>
                </li>
                <li>
                    <span>投票时间: </span>
                    <div>2017-06-25  至  2017-06-30</div>
                </li>
                <li>
                    <span>答题规则:</span>
                    <div>1、每人每天一共有5次投票机会，可以连续投票30天，当天不能重复投票给同一选举对象
                        2、每次投票完成后，均可获得对应的积分奖励</div>
                </li>
            </ul>
        </el-dialog>
        <el-dialog v-model="dialogImg" size="tiny" class="wzzy-dialog" :show-close="false">
            <span slot="title" class="wzzy-dialog-header" >
                人物详情
                <img src="../../../../static/wzzy/wzzy-close.png" @click="dialogImg=false">
            </span>
            <div class="person-slide">
                <el-carousel :interval="4000" height="600px" trigger="click" arrow="always" indicator-position="none" @change="changeSlide">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <img :src="'../../../../static/wx/img/'+item+'.jpg'" class="person-slide-img">
                        <div class="person-slide-cont">
                            <h2>如果真爱有颜色，那一定是蓝色！蕾姆的出现，像是极寒地狱里面的一道温暖阳光在486的心里，融化成了最温暖的眼泪。</h2>
                            <p>
                                雷姆，轻小说《Re：从零开始的异世界生活》及其衍生作品的主要角色，在罗兹沃尔的宅邸中一手担当全部杂务的双胞胎女仆中的妹妹，
                                小时候家人被魔女教所杀，姐姐角被斩断，从而憎恨魔女教，初识昴因其身上有魔女气味不待见昴，之后解开误会被昴拯救，认定昴是
                                她的英雄，一心一意的相信并照顾昴，看似毒舌冷漠，其实内心很坚强，很温柔。
                                身高大概150厘米左右，大大的眼睛和桃红色嘴唇，轮廓不太分明的面容显得可爱。发型是齐颈短发，然而头发分界线却有所不同，前留
                                海盖住她的右眼（姐姐是左眼）。一身以黑色为基调的围裙，头上是白色帽饰，除刘海方向、发色和瞳色外和姐姐长得几乎一样，胸部
                                比起姐姐拉姆要更加丰满。
                            </p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div class="showCount">图 {{imgIndex}} / 6</div>
            </div>

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
    export default{
        data(){
            return{
                dialogVisible: false,
                dialogImg:false,
                imgIndex:1
            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
            changeSlide(index){
                console.log(index);
                this.imgIndex = index+1;
            }
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
