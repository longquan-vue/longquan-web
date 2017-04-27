<style lang="less" scoped>
    @import "./home.less";
</style>
<template>
    <div class="wzzyHome">
        <div class="pagewrap">
            <div class="weather">
                <span>天气预报 ：</span>
            </div>
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="17">
                        <div class="grid-left">
                            <wzzySwiper></wzzySwiper>
                            <newsDynamic></newsDynamic>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-right">

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
    import wzzySwiper from '../components/swiper.vue'
    import newsDynamic from '../components/newsDynamic.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            wzzySwiper,newsDynamic
        },
        computed: {...mapGetters([ 'page','list']),
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
