<style lang="less">
</style>
<template>
    <div class="question-wzzy">
        <ul class="wzzy-toupiao">
            <li v-for="(item,index) in newsList" :key="index">
                <h2>
                    <a @click="go(['chatQuestionDetail',item.id])"> {{item.title}} <i>已答题</i></a>
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
                param.keyWord = [0];
                pollListApi(param).then((data) => {
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
