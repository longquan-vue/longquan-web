<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="/static/wzzy/wzzy-tab.png">
                <span><i class="iconfont icon-xianjinrenwu"></i> 先进人物</span>
            </div>
            <div class="tab-head-btn">
                <a v-for="(val,key) in articleType.advanced" :class="{'active':activeName==key}" @click="activeName = key">{{val.name}}</a>
            </div>
            <a class="tab-head-more" @click="toUrl({path:'/view/wzzy/advanced/1/'+activeName})">更多 > </a>
        </div>
        <div class="wzzy-tab-cont" >
            <transition-group enter-active-class="animated fadeIn" leave-active-class="pos">
                <div class="modelWorker" v-for="(list,key) in newsList" v-show="activeName==key" :key="key" v-if="articleType.advanced[key].name=='优秀职工'">
                    <el-row :gutter="10">
                        <el-col :span="6" v-for="(item,index) in list" :key="index">
                            <div class="img-card">
                                <img :src="item.picUrl">
                                <div class="card-bg">
                                    <h2>{{item.title}}</h2>
                                    <p v-html="limitFilter(strFilter(decode(item.content)),45)"></p>
                                    <router-link :to="'/view/wzzy/messageDetail/'+item.id">查看详情</router-link>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="newsAct" style="margin:20px 0" v-for="(list,key) in newsList" v-show="activeName==key" :key="key" v-if="articleType.advanced[key].name=='劳模风采'">
                  <el-row :gutter="15">
                    <el-col :span="6" v-for="(item,index) in list" :key="index">
                      <div class="newsAct-card">
                        <img :src="item.picUrl" style="height:100px;">
                        <div class="newsAct-card-box">
                          <h2 style="overflow: auto;white-space: wrap;text-overflow: clip;">{{strFilter(item.title),20}}</h2>
                        </div>
                        <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link"></router-link>
                      </div>
                    </el-col>
                  </el-row>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<style lang="less">
    .modelWorker{
        padding-bottom: 20px;padding-top: 20px;
        .img-card{ height: 252px;position: relative;overflow: hidden;margin-bottom:20px;cursor: pointer;
            &:hover{
                .card-bg{   top: 0;
                    h2{ top: 50px;}
                    p{ top: 72px;}
                }
            }
            img{ width: 100%;height: 100%}
            .card-bg{ position: absolute;height: 100%;width: 100%;left: 0;text-align: center;
                background-color:rgba(0,0,0,.8);top: 192px;
                -webkit-transition: all 0.4s;
                -moz-transition: all 0.4s;
                -ms-transition: all 0.4s;
                -o-transition: all 0.4s;
                transition: all 0.4s;
                h2{ position: absolute;width: 100%;top: 10px;left: 0;color: #ffffff;font-size: 16px;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -ms-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                    transition-delay: 0.2s;
                }
                p{
                    position: absolute;width: 100%;top: 32px;left: 0;font-size: 14px;color: #999;
                    overflow: hidden;  text-overflow:ellipsis;  white-space: nowrap;padding: 0 20px;;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -ms-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                    transition-delay: 0.2s;
                }
                a{ position: absolute;width: 120px;height: 36px;line-height: 36px;border: 1px solid #ffffff;color: #ffffff;
                    top: 50%;left: 50%;margin-left: -60px;
                }
            }
        }
    }
</style>


<script type="es6">
    import { mapGetters,mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                activeName: '',
                newsList: {},
            }
        },
        components:{

        },
        watch: {
            articleType(){
                this.getNews()
            }
        },
        computed: {...mapGetters([ 'articleType']),
        },
        methods:{
            ...mapActions(['toUrl']),
            ...filters,
            getNews(){
                if(!this.articleType.advanced){
                    return
                }
                const keys = Object.keys(this.articleType.advanced);
                this.activeName = keys[0];
                keys.map((key) => {
                    findArticleApi({
                        page: 1,
                        pageSize: 4,
                        filed: ['subType'],
                        keyWord: [key]
                    }, 0, 1).then(async (data) => {
                        await this.$set(this.newsList,key,data.list);
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
