<template>
    <div class="wzzy-tab">
        <div class="poll-head-tab">
            <span :class="{'active':activeIndex==2}" @click="change(2)">投票选举</span>
            <span :class="{'active':activeIndex==1}" @click="change(1)">问卷调查</span>
            <a @click="toUrl({path:'/view/wzzy/chat/'+['1','2','1'][activeIndex]})">更多 > </a>
        </div>
        <div class="border-content" style="border-top: none;">
            <ul class="wzzy-poll-ul">
                <li class="wzzy-poll-li" v-for="(item,index) in tipsList">
                  <div class="wzzy-poll-title">
                     <a @click="toUrl({path:'/view/wzzy/'+(activeIndex==2?'chatPoll/':'chatQuestion/')+item.id})">{{item.title}}</a>
                  </div>
                  <div class="wzzy-poll-content" v-html="limitFilter(item.description,60)"></div>
                  <a class="wzzy-poll-a" @click="toUrl({path:'/view/wzzy/chatPoll/'+item.id})">参与{{activeIndex==2?'投票':'调查'}} > </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
  .wzzy-poll-ul{
  .wzzy-poll-li:not(:last-child){ padding-bottom: 20px;border-bottom: 1px solid #E7E7E7;margin-bottom: 20px;}
  }
  .poll-head-tab{
    line-height: 32px;border-bottom: 1px solid #BC0000;overflow: hidden;
  span{ font-size: 16px;width: 90px;float: left;height: 32px;text-align: center;cursor: pointer;
  &.active{ background-color: #BC0000;color: #ffffff;border-top-left-radius: 4px;
     border-top-right-radius: 4px;
   }
  }
  a{ float: right;color: #999;font-size: 14px;cursor: pointer}
  }
  .wzzy-poll-head{ margin-bottom: 10px;overflow: hidden;
  img{ float: left;}
  a{ float: right;color: #bc0000;font-size: 14px;  }
  }
  .wzzy-poll-title{ margin-bottom: 10px;font-size: 16px;
  a{ color: #333;cursor: pointer}
  &:hover a{ color: #bc0000;}
  }
  .wzzy-poll-content{ font-size: 14px;color: #8a8a8a;line-height: 20px;}
  .wzzy-poll-a{ color: #BC0000;display: block;text-align: right;font-size: 14px;padding-top: 10px;cursor: pointer}

</style>
<script type="es6">
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {pollListApi} from '../../../api/pollApi'
    export default{
        data(){
            return{
                tipsList:[],
                activeIndex: 2
            }
        },
        methods:{
            ...mapActions(['go','getPollList','toUrl']),
            ...filters,
            change(index){
                this.activeIndex = index;
                this.getList(index-1)
            },
            getList(keyWord){
                pollListApi({page: 1,pageSize: 3,filed: ['type'],keyWord: [keyWord]}).then((data)=>this.tipsList = data.list);
            }
        },
        created () {
            this.change(2);
        },
    }
</script>

