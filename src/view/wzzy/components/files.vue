<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span><i class="iconfont icon-wenjianheziliao"></i> 文件·资料</span>
            </div>
            <div class="tab-head-btn">
                <a v-for="(val,key) in articleType.file" :class="{'active':activeName==key}" @click="activeName = key">{{val}}</a>
            </div>
            <a class="tab-head-more" @click="toUrl({path:'/view/wzzy/filesList/'+activeName})">更多 > </a>
        </div>

        <div class="wzzy-tab-cont">
            <transition-group enter-active-class="animated fadeIn" leave-active-class="pos">
                <el-row style="margin-bottom:0" :gutter="20" class="wzzy-tab-cont-list" v-for="(list,key) in newsList" v-show="activeName==key" :key="key">
                    <el-col :span="12" v-for="(item,index) in list" :key="index">
                        <router-link :to="'/view/wzzy/messageDetail/'+item.id"><span>{{item.title}}</span> <i>{{MMddFilter(item.created)}}</i></router-link>
                    </el-col>
                </el-row>
            </transition-group>
        </div>

    </div>
</template>
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
        computed: {...mapGetters(['articleType']),
        },
        methods:{
            ...mapActions(['toUrl']),
            ...filters,
            getNews(){
                if(!this.articleType.file){
                    return
                }
                const keys = Object.keys(this.articleType.file);
                this.activeName = keys[0];
                keys.map((key) => {
                    findArticleApi({
                        page: 1,
                        pageSize: 10,
                        filed: ['subType'],
                        keyWord: [key]
                    }, 0, 4).then((data) => this.$set(this.newsList,key,data.list));
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

