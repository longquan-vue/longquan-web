<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./welfare.less";
</style>
<template>
   <div class="welfareDetail">
       <div class="welfareDetailHead">
            <a href="javascript:history.go(-1);"><img class="return" src="/static/wx/return.png"></a>
            <img class="bg" src="/static/wx/centerbg.png">
            <div class="last">
                <h3>{{login.score}}</h3>
                <p>剩余积分</p>
            </div>
       </div>
       <div class="welfareDetailCont">
           <div class="welfareList" v-for="(value,key) in group(list,'recording',date7Filter)">
               <p>{{key}}</p>
               <ul class="welfareListBox">
                   <li flex justify="between" v-for="(item,index) in value">
                       <div box="1" flex items="center">
                           <div>
                               <h3>{{item.title}}</h3>
                               <p>{{date6Filter(item.recording)}}</p>
                           </div>
                       </div>
                       <div>{{item.score}}</div>
                   </li>
               </ul>
           </div>
       </div>
       <a href="javascript:;" @click="loadMore">查看更多</a>
   </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        computed: {...mapGetters(['login','data','list'])},
        methods:{
            ...mapActions(['clear','getMineScore','changePage']),
            ...filter,
            loadMore(){
              setTimeout(async() => {
                await this.changePage();
                if (this.$store.state.page.page>this.$store.state.page.pages){
                  // setTimeout(() => {
                  //   this.$refs.scroller.disablePullup();
                  // }, 100)
                }else {
                  await this.getMineScore();
                  // this.$nextTick(() => {
                  //   this.$refs.scroller.reset()
                  // });
                  // setTimeout(() => {
                  //   this.demo4Value.pullupStatus = 'default';
                  // }, 10);
                }
              }, 2000)
            }
        },
        created () {
            this.getMineScore();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
