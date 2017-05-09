<template>
    <div class="wzzy-swiper">
        <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="wzzy-swiper-item" v-for="(item,index) in itemList" v-show="index==idx" :key="index">
                <div class="wzzy-swiper-item-left">
                    <img :src="item.picUrl" >
                    <div class="overlay"></div>
                    <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link"></router-link>
                </div>
                <div class="wzzy-swiper-item-right">
                    <h2>
                        <span>头条新闻</span><router-link :to="'/view/wzzy/messageDetail/'+item.id">{{item.title}}</router-link>
                    </h2>
                    <p>{{date3Filter(item.created)}}</p>
                    <div v-html="limitFilter(strFilter(decode(item.content)),80)"></div>
                </div>
            </div>
        </transition-group>
        <div class="tab-a">
            <a v-for="i in itemList.length" @click="switchSwiper(i)" :class="{'active':i-1==idx}">{{i}}</a>
        </div>
    </div>
</template>
<style lang="less">
    .wzzy-swiper{
        height: 210px;width: 100%;position: relative;margin-bottom: 40px;
        .wzzy-swiper-item{
            background-color: #FFF7F7;height: 100%;line-height: 100%;width: 100%;
            color: #ffffff;position: absolute;left: 0;top: 0;
            .wzzy-swiper-item-left{
                width: 45%;height: 100%;float: left;position: relative;cursor: pointer;
                img{ width: 100%;height: 100%;}
            }
            .wzzy-swiper-item-right{
                float: right;width: 55%;padding: 20px;position: relative;height: 100%;
                &:before{  content: '';  width: 0;  height: 0;position: absolute;left: -10px;top: 50%;
                    border-top: 10px solid transparent;
                    border-right: 10px solid #FFF7F7;
                    border-bottom: 10px solid transparent;
                }
                h2{ font-size: 18px;color: #333;line-height: 30px;margin-bottom: 20px;;
                    span{ background-color: #FF7E00;padding: 6px 10px;position: relative;color: #ffffff;border-radius: 4px;
                        font-size: 14px;line-height: normal;margin-right: 15px;;
                        &:before{  content: '';  width: 0;  height: 0;position: absolute;right: -5px;top: 10px;
                            border-top: 5px solid transparent;
                            border-left: 5px solid #FF7E00;
                            border-bottom: 5px solid transparent;
                        }
                    }
                    a{ color: #333;font-weight: bold;
                        &:hover{ color: #BC0000;}
                    }
                }
                p{ margin-bottom: 10px;color: #818181;font-size: 14px;}
                div{ color: #818181;font-size: 14px;line-height: 25px; text-align: justify;}
            }
        }
        .tab-a{
            position: absolute;left: 25%;bottom: 20px;
            a{ width: 18px;height: 18px;display: inline-block;border: 1px solid #fff;
                vertical-align: middle;cursor: pointer;
                color: rgba(255,255,255,0.8);text-align: center;line-height: 18px;margin: 0 5px;
                &.active{ background-color: rgba(255,255,255,0.4);border: none;color: #ffffff;}
            }
        }
    }
</style>
<script type="es6">
    import filters from '../../../filters'
    import {findArticleApi} from '../../../api/articleApi'
    export default{
        data(){
            return{
                itemList:[],
                idx:0,
                timer:null
            }
        },
        methods:{
            ...filters,
            createTimer(){
                this.timer =  setInterval(()=>{
                    this.idx =  this.idx<this.itemList.length-1?this.idx+1:0;
                },3000)
            },
            switchSwiper(i){
                this.timer && clearInterval(this.timer);
                this.idx = i-1;
                this.createTimer();
            }
        },
        created () {
            findArticleApi({page:1,pageSize:5,filed:['top'],keyWord:[1]},0,5).then((data)=>{
                this.itemList = data.list;
                this.createTimer();
            });
        },
        destroyed(){

        }
    }
</script>

