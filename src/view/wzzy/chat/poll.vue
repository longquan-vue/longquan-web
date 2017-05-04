<style lang="less">
    .wzzy-toupiao{
        li{
            padding: 20px 0;border-bottom: 1px solid #E7E7E7;
            h2{
                margin-bottom: 10px;position: relative;
                a{ position: relative;color: #333;font-size: 16px;cursor: pointer;display: block;
                    width: 80%;padding-left: 15px;;
                    i{ border: 1px solid #7253e8;color: #7253e8;padding: 2px 4px;border-radius: 4px;font-size: 14px; }
                    &:hover{ color: #BC0000;}
                    &:before{  content: '';  width: 0;  height: 0;  position: absolute;  left: 0;  top: 5px;
                        border-top: 5px solid transparent;
                        border-left: 5px solid #999999;
                        border-bottom: 5px solid transparent;
                    }
                }
                span{ color: #ffffff;font-size: 14px;padding: 1px 10px;border-radius: 10px;
                    display: inline-block;position: absolute;right: 0;top: 5px;
                    &.ising{ background-color: #FF7E00;}
                    &.isover{ background-color: #999999;}
                }
            }
            p{
                overflow: hidden;
                span{ font-size: 14px;color: #999999;
                    img{ vertical-align: middle;position: relative;top: -1px;}
                    i{ color: #ff7e00;}
                }
                em{ float: right;color: #818181;font-size: 14px;position: relative;top: 4px;}
            }
        }
    }
</style>
<template>
    <div class="poll-wzzy">
        <ul class="wzzy-toupiao">
            <li v-for="(item,index) in newsList" :key="index">
                <h2>
                    <a @click="go(['chatPollDetail',item.id])"> {{item.title}} <i>已投票</i></a>
                    <span class="ising" v-if="!isEnd(item.end)">进行中</span>
                    <span class="isover" v-if="isEnd(item.end)">已结束</span>
                </h2>
                <p>
                <span>
                    <img src="../../../../static/wzzy/wzzy-point.png">
                    积分奖励 : <i>{{item.score}}</i>
                </span>
                    <em>{{ date3Filter(item.created) }}</em>
                </p>
            </li>
        </ul>
        <MyPagination style="margin:30px 0;" :method="getNews"/>
    </div>

</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {pollListApi} from '../../../api/pollApi'
    import MyPagination from '../../../components/public/page/MyPagination.vue'
    export default{
        data(){
            return{
                newsList:[]
            }
        },
        components:{
            MyPagination
        },
        computed: {
            ...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
            getNews(){
                const param = {...this.page};
                param.filed = ['type'];
                param.keyWord = [1];
                pollListApi(param).then((data) => {
                    console.log('data.list',data.list);
                    this.newsList = data.list;
                    delete data.list;
                    this.changePage(data);
                });
            }
        },
        beforeRouteUpdate (to, from, next) {
            next();
            this.getNews()
        },
        created () {
            this.getNews();
        },
        destroyed(){
            this.clear();
        }
    }
</script>
