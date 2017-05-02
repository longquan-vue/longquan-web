<style lang="less">

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
                                    <el-breadcrumb-item>劳模风采</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>劳模风采</a></div>
                            <div class="wzzy-sub-content">
                                <div class="newsAct">
                                    <el-row :gutter="15">
                                        <el-col :span="8" v-for="i in 9" :key="i">
                                            <div class="newsAct-card">
                                                <img :src="'../../../../static/wx/img/'+i+'.jpg'">
                                                <div class="newsAct-card-box">
                                                    <h2>表面恭维内心瞧不起的毒舌担当，维持着宅邸的机能...</h2>
                                                    <p>2016-12-08 10:40</p>
                                                </div>
                                                <router-link to="" class="block-link"></router-link>
                                            </div>
                                        </el-col>
                                    </el-row>
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
