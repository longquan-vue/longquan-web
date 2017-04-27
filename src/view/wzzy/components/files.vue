<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>文件·资料</span>
            </div>
            <div class="tab-head-btn">
                <a :class="{'active':activeName==1}" @click="activeName=1">公会文件</a>
                <a :class="{'active':activeName==2}" @click="activeName=2">领导讲话</a>
                <a :class="{'active':activeName==3}" @click="activeName=3">上级文件</a>
                <a :class="{'active':activeName==4}" @click="activeName=4">公会相关</a>
                <a :class="{'active':activeName==5}" @click="activeName=5">政策法规</a>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>
        <transition-group enter-active-class="animated fadeIn">
            <div class="wzzy-tab-cont" v-show="activeName==i" :key="i" v-for="i in 5">
                <div class="wzzy-tab-cont-head">
                    <a><img src="../../../../static/wx/test/test1.jpg"></a>
                    <div class="wzzy-tab-cont-head-mess">
                        <h2>{{i}}这是标题哦哦哦哦哦哦哦哦哦</h2>
                        <p>2016-04-15 10:30</p>
                        <div>3月9日下午，由市委宣传部、市卫计委、市总工会、市商务委、市工商联等部门组成的成都市创建厂务公开民主管理示范单位复查验收组一行在区总工会、区卫计局等部门的参与下到我区2家成都市厂务公开民主管理示范创建申报单位（四川省远大专用凭...</div>
                    </div>
                </div>
                <el-row :gutter="20" class="wzzy-tab-cont-list">
                    <el-col :span="12" v-for="i in 12">
                        <a><span>第二届世界互联网大会发布《乌镇倡议》</span> <i>2016-04-15</i></a>
                    </el-col>
                </el-row>
            </div>
        </transition-group>
    </div>
</template>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                activeName: 1
            }
        },
        components:{

        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['go','clear']),
            ...filters,
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        created () {

        },
        destroyed(){

        }
    }
</script>

