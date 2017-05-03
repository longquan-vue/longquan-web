<style lang="less">

</style>
<template>
    <div class="newsAct">
        <el-row :gutter="15">
            <el-col :span="8" v-for="(item,index) in newsList" :key="index">
                <div class="newsAct-card">
                    <img :src="item.picUrl">
                    <div class="newsAct-card-box">
                        <h2>{{item.title}}</h2>
                        <p>{{date3Filter(item.created)}}</p>
                    </div>
                    <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link"></router-link>
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
                    keyWord: ['1493121733116']
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
