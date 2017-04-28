<style lang="less">
    .messageDetail{
        .messageDetailTitle{
            h2{ font-size: 30px;color: #333333;margin: 40px 0 20px 0;}
            p{ font-size: 14px;color: #818181;line-height: 40px;border-bottom: 1px solid #E7E7E7;
                i{ float: right;}
            }
        }
        .messageDetailCont{
            padding-top: 20px;min-height: 600px;line-height: 25px;font-size: 14px;color: #666;
            .messageDetailCont-down{ font-size: 14px;color: #333;margin: 40px 0;
                a{ color: #007ee8;cursor: pointer}
            }
            img{ max-width: 100%;display: block;margin: auto}
        }
        .messageDetailContPage{
            margin: 20px 0;
            a:nth-child(1){ float: left;color: #818181;font-size: 14px;cursor: pointer;}
            a:nth-child(2){ float: right;color: #818181;font-size: 14px;cursor: pointer;}
            a:hover{ color: #BC0000;}
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
                                    <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
                                    <el-breadcrumb-item>详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-content">
                                <div class="messageDetail">
                                    <div class="messageDetailTitle">
                                        <h2>市总工会举办企（事）业单位新任工会主席岗位资格培训</h2>
                                        <p>
                                            <span>文章来源：发布者所属机关部门  &nbsp;&nbsp;&nbsp; 2016-09-29  &nbsp;&nbsp;10:30  </span>
                                            <i>点击次数：<em style="color:#333;">387</em></i>
                                        </p>
                                    </div>
                                    <div class="messageDetailCont">
                                        <img src="../../../../static/wx/img/1.jpg">

                                        其实，如今不仅是速递易，整个智能快递柜行业，包括顺丰丰巢、邮政易邮柜、中集e栈等“新贵”，都面临一个拷问：未来究竟从何处盈利？

                                        身处险境的三泰控股，必须寻找新的出路，来填补13亿的大坑。三泰控股在年报中最新提出，将发力逆向物流，剑指快递行业“最先100米”，颠覆人们的寄件习惯。

                                        据了解，过去一年，速递易集结了一批来自京东、尚品、收货宝等在末端快递行业身经百战的人才，打造从寄件到派件、从业务到用户的全新营运团队，构建更敏捷与高质量的速递易运营服务体系。目前，这个更有执行力、更加高效、更会玩会折腾的80后团队已经整装待发。

                                        速递易板块运营负责人表示，团队下一步的工作重心不再是此前粗放的攻城拔寨、网点拓展，而是一边利用社区的卡位优势，进一步探索商业变现，一边回归本质“修内功”。

                                        速递易正集中力量做好三件事：优化网点，扩大重点核心城市密度；更加完善取件体验；最便捷的寄件服务。其中，逆向物流的商业模式是速递易探索流量新变现渠道的又一次创新之举。

                                        快递行业的利润大头在于寄件，尤其在收寄快递的“最先100米”，目前由快递员和代收网点构成。速递易板块运营负责人分析，久等快递员上门、随意开价、粗糙包装，都是寄快递用户的切身痛点。虽然目前也有一些智能柜自助寄件设备，但格口资源不足、密度不够、成本太高的问题亦逐渐暴露。

                                        受有桩公共自行车夭折、无桩共享单车兴起的启发，2017年，速递易将利用其规模优势和用户粘性，推出智能寄件产品——速递易“小黄筒”、“边柜”、“小黄袋”，发力逆向物流市场。“小黄筒”外表酷似邮政邮筒，内心则充满黑科技。太阳能供电、GPS跟踪定位、GPRS数据传输，还搭载了超声波测距模块，更重要的是，它是“无桩”的寄件设备，为用户提供“随时取，随手寄”服务。
                                        <div class="messageDetailCont-down">
                                            <span>附件：XXXXXXXXXX.XXXX</span>
                                            <a>下载 ↓</a>
                                        </div>
                                    </div>
                                    <div class="messageDetailContPage">
                                        <a>上一篇：职工劳动竞赛收官之战工会知识竞功举行...</a>
                                        <a>下一篇：职工劳动竞赛收官之战工会知识竞功举行...</a>
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
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
