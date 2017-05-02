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
                                    <el-breadcrumb-item>问卷调查详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>问卷调查详情</a></div>
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
                                            <i @click="dialogVisible=true" style="float:right">查看规则></i>
                                        </p>
                                        <div class="questionBox">
                                            <ul>
                                                <li>
                                                    <div class="questionBox-head">一、您的性别 <span>（单选）</span></div>
                                                    <div class="questionBox-cont">
                                                        <p><label><input class="my-radio" type="radio" name="radio" >A、  男</label></p>
                                                        <p><label><input class="my-radio" type="radio" name="radio" >B、 女</label></p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="questionBox-head">二、您喜欢的角色 <span>（多选）</span></div>
                                                    <div class="questionBox-cont">
                                                        <p><label><input class="my-checkbox" type="checkbox"  > 蕾姆</label></p>
                                                        <p><label><input class="my-checkbox" type="checkbox"  > 艾米莉亚</label></p>
                                                        <p><label><input class="my-checkbox" type="checkbox"  > 比斯缇</label></p>
                                                        <p><label><input class="my-checkbox" type="checkbox"  > 斯巴鲁</label></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="questionBox-head">三、您喜欢从零开始的异世界生活的理由 <span>（问答）</span></div>
                                                    <div class="questionBox-cont">
                                                        <div class="questionBox-text">
                                                            <span>答：</span>
                                                            <el-input type="textarea"  :rows="2" placeholder="请输入内容"></el-input>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
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
