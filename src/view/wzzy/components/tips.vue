<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>公示公告 </span>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>
        <div class="wzzy-tab-cont">
            <div class="border-content" style="border-top: none;height: 220px;">
                <div class="wzzy-tab-cont-list">
                    <transition-group name="flip-tip" tag="p">
                        <router-link :to="'/view/wzzy/messageDetail/'+item.id" v-for="(item,index) in tipsList" style="margin-bottom: 12px;" :key="item"><span>{{item.title}}</span> <i>{{date3Filter(item.created)}}</i></router-link>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .border-content{ border: 1px solid #E7E7E7;padding: 20px;margin-bottom: 20px;
        .wzzy-tab-cont-list{
            padding:0 !important;width:100%;height:100%;overflow: hidden;position: relative;
        }
    }
    .flip-tip-move {
        transition: transform 0.8s;
    }
    .grid-right-sub{
        .border-content{ border: none;background-color: #FAFAFA;}
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
                tipsList:[],
            }
        },
        components:{

        },
        computed: {
            ...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear']),
            ...filters,
        },
        mounted(){

        },
        created () {
            findArticleApi({
                page: 1,
                pageSize: 10,
            }, 0, 0).then((data) => this.tipsList = data.list);
            setInterval(()=>{
                this.tipsList = [...this.tipsList.filter((item,index)=>index>0),this.tipsList[0]];
            },3000)
        },
        destroyed(){

        }
    }
</script>

