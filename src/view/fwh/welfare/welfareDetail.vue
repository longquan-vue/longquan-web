<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./welfare";
</style>
<template>
   <div class="welfareDetail">
       <div class="welfareDetailHead">
            <a href="javascript:history.go(-1);"><img class="return" src="../../../../static/wx/return.png"></a>
            <img class="bg" src="../../../../static/wx/centerbg.png">
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
       <a href="javascript:;">查看更多</a>
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
            ...mapActions(['clear','getMineScore']),
            ...filter
        },
        created () {
            this.getMineScore();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
