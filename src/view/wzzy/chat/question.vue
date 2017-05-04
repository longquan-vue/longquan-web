<style lang="less">
</style>
<template>
    <ul class="wzzy-toupiao">
        <li v-for="(item,index) in newsList" :key="index">
            <h2>
                <a @click="go(['chatPollDetail','qweihwehig23245a'])"> {{item.title}} <i>已答题</i></a>
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
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {pollListApi} from '../../../api/pollApi'
    export default{
        data(){
            return{
                newsList:[]
            }
        },
        components:{
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
            pollListApi({
                page: 1,
                pageSize: 12,
                filed: ['type'],
                keyWord: [0]
            }, 0, 1).then((data) => {
                console.log('data.list',data.list);
                this.newsList = data.list;
            });
        },
        destroyed(){
            this.clear();
        }
    }
</script>
