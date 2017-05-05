<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span><i class="iconfont icon-xinwendongtai"></i> 新闻动态</span>
            </div>
            <div class="tab-head-btn">
                <a v-for="(val,key) in articleType.info" :class="{'active':activeName==key}" @click="activeName = key">{{val}}</a>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>
        <myLoading v-if="showLoading"></myLoading>
        <div class="wzzy-tab-cont">
            <transition-group enter-active-class="animated fadeIn" leave-active-class="pos">
                 <tabCont v-for="(list,key) in newsList" v-show="activeName==key" :key="key" :newsList="list" v-if="!showLoading"></tabCont>
            </transition-group>
        </div>
    </div>
</template>
<style lang="less">
</style>
<script type="es6">
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    import tabCont from '../components/tabCont.vue'
    import myLoading from '../../../components/public/Loading.vue'
    export default{
        data(){
            return {
                activeName: '',
                newsList: {},
                showLoading:true
            }
        },
        components: {
            tabCont,myLoading
        },
        computed: {
            ...mapGetters(['page', 'list', 'articleType']),
        },
        watch: {
            articleType(){
                this.getNews()
            }
        },
        methods: {
            ...mapActions(['go', 'clear']),
            ...filters,
            getNews(){
                if(!this.articleType.info){
                    return
                }
                const keys = Object.keys(this.articleType.info);
                this.activeName = keys[0];
                keys.map((key) => {
                    findArticleApi({
                        page: 1,
                        pageSize: 10,
                        filed: ['subType'],
                        keyWord: [key]
                    }, 0, 5).then(async (data) => {
                        await this.$set(this.newsList,key,data.list);
                        this.showLoading = false;
                    });
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

