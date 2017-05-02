<style lang="less">
    .modelWorkerDetail{
        overflow: hidden;padding: 40px 0;
        .modelWorkerDetailLeft{
            width: 160px;float: left;
            img{ width: 100%;height: 200px;display: block;margin-bottom: 10px;}
            h2{ font-size: 22px;color: #333333;}
            p{ color: #999999;font-size: 14px;}
        }
        .modelWorkerDetailRight{
            line-height: 30px;font-size: 16px;color: #333;margin-left: 180px;
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
                            <div class="the-place">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>先进人物</el-breadcrumb-item>
                                    <el-breadcrumb-item>详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-content">
                                <div class="modelWorkerDetail">
                                    <div class="modelWorkerDetailLeft">
                                        <img src="../../../../static/wx/img/2.jpg">
                                        <h2>蕾姆</h2>
                                        <p>RE0 女主</p>
                                    </div>
                                    <div class="modelWorkerDetailRight">
                                            宅邸篇中对昴的情感（好感度）随着昴在几次重新读档后的不同表现而不同，曾因昴的行为可疑（不知道昴是读档重来的）怀疑昴是爱蜜莉亚敌对势力或者魔女教派来的间谍而伤害或杀死昴
                                            雷姆TV动画形象
                                            雷姆TV动画形象(5张)
                                            昴一周目行为自然，雷姆起初对其有疑心，但疑心随着昴在宅邸的笨拙而努力的工作渐渐消夷。
                                            二周目昴行为可疑，第一次来宅邸却十分熟悉宅邸，最后发现昴在半夜居然要去艾米莉亚房间便独断专行地了结了其生命（事后称不忍再看昴受诅咒折磨而下手的，真实原因不知，也可能是因为昴的魔女气息跟可疑行为的原因）
                                            三周目则因为昴选择了当食客而不是佣人，没有好感度，并且昴行为可疑，对其没有丝毫好感，在发现昴出了宅邸后居然监视着宅邸，便判断其绝对是魔女教或者敌对势力间谍，就私自在森林中追杀并拷问昴，后拉姆因看不下去雷姆折磨昴便下手杀了昴。
                                            四周目，昴因为前几周目发现雷姆跟拉姆对其下手而心灰意冷，最后一天躲在贝阿朵莉丝的禁书库里。雷姆只能自己前去村子购买物资（一周目是和男主一起去，男主被魔兽咬伤而受到诅咒死）被魔兽咬伤，受到诅咒，当晚便衰弱死。后来昴在拉姆追杀时终于想通，并立誓“下一次”一定要拯救雷姆跟拉姆后跳崖自杀读档。
                                            五周目，由于昴知道了原先自己昏迷时握住的双手是拉姆跟雷姆的，立誓拯救她们，并发现
                                            鬼化雷姆
                                            鬼化雷姆
                                            下咒的是在村里的小狗（魔兽）判断小孩们有危险，想前去村子救小孩们，而拉姆雷姆则一方面对昴存有疑虑一方面也怕小孩有危险，于是雷姆跟昴去村子救人，拉姆则守护宅邸（实际是找贝尔托里丝核实诅咒的事）[2]  ，后雷姆跟昴推测小孩在结界破坏掉的树林里，一起进去救人，在逃离时被魔兽袭击，雷姆鬼化后大意差点被魔兽从背后袭击，昴则推开了她自己被魔兽袭击重伤（事后雷姆自责不已，知道那时候自己还能回头再救昴的，却因为他的魔女气息犹豫了）在这次事件中也喜欢上了昴。
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
