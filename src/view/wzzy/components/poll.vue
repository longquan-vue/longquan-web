<template>
    <div class="wzzy-tab">

        <div class="poll-head-tab">
            <span :class="{'active':activeIndex==1}" @click="change(1)">投票选举</span>
            <span :class="{'active':activeIndex==2}" @click="change(2)">问卷调查</span>
            <a>更多 > </a>
        </div>
        <div class="border-content" style="border-top: none;">
            <ul class="wzzy-poll-ul">
                <li class="wzzy-poll-li" v-for="(item,index) in tipsList">
                    <div class="wzzy-poll-title">
                       <router-link to="">{{item.title}}</router-link>
                    </div>
                    <div class="wzzy-poll-content" v-html="limitFilter(item.description,60)"></div>
                    <a class="wzzy-poll-a">参与投票 > </a>
                </li>
            </ul>
        </div>

    </div>
</template>
<style lang="less">
    .wzzy-poll-ul{
        .wzzy-poll-li:not(:last-child){ padding-bottom: 20px;border-bottom: 1px solid #E7E7E7;margin-bottom: 20px;}
    }

    .poll-head-tab{
        line-height: 38px;border-bottom: 1px solid #BC0000;overflow: hidden;
        span{ font-size: 16px;width: 90px;float: left;height: 38px;text-align: center;cursor: pointer;
            &.active{ background-color: #BC0000;color: #ffffff;border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }
        a{ float: right;color: #999;font-size: 14px;}
    }
    .wzzy-poll-head{ margin-bottom: 10px;overflow: hidden;
        img{ float: left;}
        a{ float: right;color: #bc0000;font-size: 14px;  }
    }
    .wzzy-poll-title{ margin-bottom: 10px;font-size: 16px;
        a{ color: #333;}
        &:hover a{ color: #bc0000;}
    }
    .wzzy-poll-content{ font-size: 14px;color: #8a8a8a;line-height: 20px;}
    .wzzy-poll-a{ color: #BC0000;display: block;text-align: right;font-size: 14px;padding-top: 10px;}

</style>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {pollListApi} from '../../../api/pollApi'
    export default{
        data(){
            return{
                tipsList:[],
                activeIndex: 1
            }
        },
        components:{

        },
        computed: {
            ...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear','getPollList', 'changeSelect']),
            ...filters,
            change(index){
                this.clear();
                this.activeIndex = index;
                if (this.activeIndex == 1){
                    this.getList('type',0)
                }else {
                    this.getList('type',1)
                }
            },
            getList(filed,keyWord){
                pollListApi({
                    page: 1,
                    pageSize: 3,
                    filed: [filed],
                    keyWord: [keyWord]
                }).then((data)=>{
                    console.log(data.list);
                    this.tipsList = data.list
                });
            }
        },
        async created () {
            await this.getList('type',0);
        },
        destroyed(){
            this.clear()
        }
    }
</script>

