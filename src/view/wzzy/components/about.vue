<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>文件·资料</span>
            </div>
            <div class="tab-head-btn">
                <a :class="{'active':activeName==1}" @click="activeName=1">政府类</a>
                <a :class="{'active':activeName==2}" @click="activeName=2">企业类</a>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>
        <transition-group enter-active-class="animated fadeIn">
            <div class="aboutsLink" v-show="activeName==i" :key="i" v-for="i in 2">
                <a>{{i}}成都工会职工帮扶网</a>
                <a>成都市龙泉驿区人民政府门户网站</a>
                <a>四川省总工会</a>
                <a>四川省人民政府中华全国总工会</a>
                <a>中华人民共和国中央人民政府</a>
            </div>
        </transition-group>
    </div>
</template>
<style lang="less">
    .aboutsLink{
        margin: 20px 0 40px 0;overflow: hidden;
        a{ cursor: pointer;padding: 4px 8px;border: 1px solid #E7E7E7;font-size: 14px;color: #333333;float: left;margin-right: 20px;
            margin-bottom: 15px;}
    }
</style>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                activeName: 1
            }
        },
        components:{

        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear']),
            ...filters,
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        created () {

        },
        destroyed(){

        }
    }
</script>

