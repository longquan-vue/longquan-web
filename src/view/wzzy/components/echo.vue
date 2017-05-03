<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>回音壁</span>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>

        <div class="border-content" style="border-top: none;">
            <ul class="echo-ul">
                <li v-for="(item,index) in list">
                    <div class="echo-title">
                       问：{{item.title}}
                    </div>
                    <div class="echo-cont" v-html="limitFilter(strFilter(decode(item.answer)),100)"></div>
                </li>
            </ul>
            <!--<a class="askQuestion">我要咨询</a>-->
            <question></question>
        </div>

    </div>
</template>
<style lang="less">
    .echo-ul{
       li{
           padding-bottom: 15px; margin-bottom: 15px;border-bottom: 1px solid #E7E7E7;
           .echo-title{ font-size: 16px;color: #bc0000;margin-bottom: 10px;}
           .echo-cont{ font-size: 14px;color: #8a8a8a;;}
       }
    }
    .askQuestion{ display: block;height: 40px;line-height: 40px;text-align: center;border: 1px solid #bc0000;
        color: #bc0000;font-size: 16px;border-radius: 4px;;
    }
</style>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findEchoApi} from '../../../api/echoApi'
    import question from '../components/question.vue'
    export default{
        data(){
            return{
                list:[],
                activeIndex: 0
            }
        },
        components:{
            question
        },
        computed: {
            ...mapGetters([ 'page']),
        },
        methods:{
            ...mapActions(['go','clear']),
            ...filters,
        },
        created () {
            findEchoApi({
                page: 1,
                pageSize: 3,
            }).then((data)=>{
                console.log("echo",data.list);
                this.list = data.list;
            })
        },
        destroyed(){

        }
    }
</script>
