<style lang="less" scoped>
    @import "./introduce.less";
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
                                    <el-breadcrumb-item>机构介绍</el-breadcrumb-item>
                                    <el-breadcrumb-item>区总介绍</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-right">
                            <tip></tip>
                            <someIcon></someIcon>
                            <poll></poll>
                            <adver></adver>
                            <echo></echo>
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
    import poll from '../components/poll.vue'
    import adver from '../components/adver.vue'
    import echo from '../components/echo.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            tip,someIcon,poll,adver,echo
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
