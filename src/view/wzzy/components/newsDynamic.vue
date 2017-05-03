<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>新闻动态</span>
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
    .wzzy-tab {
        .wzzy-tab-head {
            border-bottom: 1px solid #E7E7E7;
            height: 32px;
            line-height: 32px;
            .tab-head-title {
                float: left;
                position: relative;
                width: 130px;
                height: 32px;
                line-height: 32px;;
                text-align: center;
                .tab-head-title-img {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                span {
                    position: relative;
                    color: #ffffff;
                    font-size: 16px;
                }
            }
            .tab-head-btn {
                float: left;
                margin-left: 35px;
                font-size: 16px;
                height: 32px;
                a {
                    color: #333;
                    height: 32px;
                    display: inline-block;
                    line-height: normal;
                    position: relative;
                    top: -4px;
                    margin-right: 20px;
                    cursor: pointer;
                    &.active {
                        color: #BC0000;
                        border-bottom: 2px solid #BC0000;
                    }
                }
            }
            .tab-head-more {
                float: right;
                color: #a6a6a6;
                font-size: 14px;
            }
        }
        .wzzy-tab-cont {
            position:relative;
            .wzzy-tab-cont-head {
                padding: 20px 0;
                border-bottom: 1px solid #E7E7E7;
                min-height: 174px;
                > a {
                    float: left;
                    width: 240px;
                    height: 134px;
                    margin-right: 20px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .wzzy-tab-cont-head-mess {
                    h2 {
                        font-size: 18px;
                        color: #333;
                        margin-bottom: 10px;
                        a {
                            color: #333;
                            &:hover {
                                color: #BC0000;
                            }
                        }
                    }
                    p {
                        font-size: 14px;
                        color: #818181;
                        margin-bottom: 16px;
                    }
                    div {
                        font-size: 14px;
                        color: #8a8a8a;
                        line-height: 24px;
                        text-align: justify;
                    }
                }
            }
            .wzzy-tab-cont-list {
                padding: 30px 0 40px 0;
                a {
                    position: relative;
                    display: block;
                    color: #333;
                    font-size: 14px;
                    margin-bottom: 15px;
                    padding-right: 100px;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    &:before {
                        content: '';
                        width: 0;
                        height: 0;
                        position: absolute;
                        left: 0;
                        top: 4px;
                        border-top: 5px solid transparent;
                        border-left: 5px solid #FF7E00;
                        border-bottom: 5px solid transparent;
                    }
                    span {
                        color: #333;
                        margin-left: 15px;
                    }
                    i {
                        color: #8a8a8a;
                        position: absolute;
                        right: 0;
                        top: 2px;
                    }
                    &:hover span {
                        color: #FF7E00;
                    }
                }
            }
        }
    }
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
                        pageSize: 13,
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

