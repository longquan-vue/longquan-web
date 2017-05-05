<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span><i class="iconfont icon-huodongzhanshi"></i> 活动展示</span>
            </div>
            <div class="tab-head-btn">
                <a v-for="(val,key) in articleType.activity" :class="{'active':activeName==key}" @click="activeName = key">{{val}}</a>
            </div>
            <a class="tab-head-more" @click="toUrl({path:'/view/wzzy/news/7/'+activeName})">更多 > </a>
        </div>

        <div class="wzzy-tab-cont">
            <transition-group enter-active-class="animated fadeIn" leave-active-class="pos">
                <activityComponents :newsList="list" v-for="(list,key) in newsList" v-show="activeName==key" :key="key"></activityComponents>
            </transition-group>
        </div>

    </div>
</template>
<style lang="less">
    .wzzy-tab{
        .activityShow{
            padding: 20px 0 40px 0;
            .activityShowLeft{ height: 237px;}
            .link-div{ position: relative;width: 100%;height: 100%;
                .link-div-mess{ height: 92px;position: absolute;left: 0;bottom: 0;width: 100%;
                    padding: 15px 20px;background-color: rgba(0,0,0,.8);
                    h2{ font-size: 16px;color: #ffffff;margin-bottom: 5px;overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;}
                    p{ font-size: 14px;color: #999999;}
                }
            }
            .little-link{ height: 115px;margin-bottom: 7px;
                .link-div{
                    .link-div-mess{ height: 36px;padding: 0 20px;line-height: 36px;
                        h2{ font-size: 14px;overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;}
                    }
                }
            }
        }
    }
</style>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import activityComponents from '../components/activityComponents.vue'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                activeName: '',
                newsList: {},
            }
        },
        components:{
            activityComponents
        },
        watch: {
            articleType(){
                this.getNews()
            }
        },
        computed: {...mapGetters([ 'page','list','articleType']),
        },
        methods:{
            ...mapActions(['clear','getMine','toUrl']),
            ...filters,
            getNews(){
                if(!this.articleType.activity){
                    return
                }
                const keys = Object.keys(this.articleType.activity);
                this.activeName = keys[0];
                keys.map((key) => {
                    findArticleApi({
                        page: 1,
                        pageSize: 5,
                        filed: ['subType'],
                        keyWord: [key]
                    }, 0, 7).then((data) => {
                        this.$set(this.newsList,key,data.list);
                        console.log("this.newsList",this.newsList)
                    });
                });
            }
        },
        created () {
            this.getNews()
        },
        destroyed(){

        }
    }
</script>

