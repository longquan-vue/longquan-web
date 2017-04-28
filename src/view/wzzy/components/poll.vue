<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>投票·调查</span>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>

        <div class="border-content" style="border-top: none;">
            <ul class="wzzy-poll-ul">
                <li class="wzzy-poll-li" v-for="i in 2">
                    <div class="wzzy-poll-head" v-if="i==1">
                        <img src="../../../../static/wzzy/toupiao.png" >
                        <a>参与投票 ></a>
                    </div>
                    <div class="wzzy-poll-head" v-if="i==2">
                        <img src="../../../../static/wzzy/wenjuan.png" >
                        <a>参与调查 ></a>
                    </div>
                    <div class="wzzy-poll-title">
                       <router-link to="">孙政才主持召开市委常委会会议，听取扶贫开发工作成效考核情况的汇报。</router-link>
                    </div>
                    <div class="wzzy-poll-content">区总工会、区卫计局等部门的参与下到我区2家成都市厂务公开民主管理示范创建申报单位（四川省远大专用凭证印务有限公司、...</div>
                </li>
            </ul>
        </div>

    </div>
</template>
<style lang="less">
    .wzzy-poll-ul{
        .wzzy-poll-li:not(:last-child){ padding-bottom: 20px;border-bottom: 1px solid #E7E7E7;margin-bottom: 20px;}
    }

    .wzzy-poll-head{ margin-bottom: 10px;overflow: hidden;
        img{ float: left;}
        a{ float: right;color: #bc0000;font-size: 14px;  }
    }
    .wzzy-poll-title{ margin-bottom: 10px;font-size: 16px;
        a{ color: #333;}
        &:hover a{ color: #bc0000;}
    }
    .wzzy-poll-content{ font-size: 14px;color: #999;line-height: 20px;}

</style>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                tipsList:[

                ],
                activeIndex: 0
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
        created () {

        },
        destroyed(){

        }
    }
</script>

