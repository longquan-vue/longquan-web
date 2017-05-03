<style lang="less">

</style>
<template>
    <div class="modelWorker">
        <el-row :gutter="10">
            <el-col :span="6" v-for="(item,index) in newsList" :key="index">
                <div class="img-card">
                    <img :src="item.picUrl">
                    <div class="card-bg">
                        <h2>{{item.title}}</h2>
                        <p v-html="limitFilter(strFilter(decode(item.content)),45)"></p>
                        <router-link :to="'/view/wzzy/workerDetail/'+item.id">查看详情</router-link>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                newsList: [],
            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','list','articleType']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
            getNews(){
                findArticleApi({
                    page: 1,
                    pageSize: 4,
                    filed: ['subType'],
                    keyWord: ['1493121726821']
                }, 0, 1).then((data) => {
                    console.log('data.list',data.list);
                    this.newsList = data.list;
                });

            }
        },
        created () {
            this.getNews();
        },
        destroyed(){

        }
    }
</script>
