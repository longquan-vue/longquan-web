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
                <h3>6500</h3>
                <p>剩余积分</p>
            </div>
       </div>
       <div class="welfareDetailCont">
           <div class="welfareList">
               <p>2017年2月</p>
               <ul class="welfareListBox">
                   <li flex justify="between">
                       <div box="1" flex items="center">
                           <div>
                               <h3>红包兑换</h3>
                               <p>02-25 10:30</p>
                           </div>
                       </div>
                       <div>-200</div>
                   </li>
                   <li flex justify="between">
                       <div box="1" flex items="center">
                           <div>
                               <h3>积分签到</h3>
                               <p>02-25 10:30</p>
                           </div>
                       </div>
                       <div class="active">+20</div>
                   </li>
                   <li flex justify="between">
                       <div box="1" flex items="center">
                           <div>
                               <h3>积分签到</h3>
                               <p>02-25 10:30</p>
                           </div>
                       </div>
                       <div class="active">+20</div>
                   </li>
                   <li flex justify="between">
                       <div box="1" flex items="center">
                           <div>
                               <h3>积分签到</h3>
                               <p>02-25 10:30</p>
                           </div>
                       </div>
                       <div class="active">+20</div>
                   </li>
                   <li flex justify="between">
                       <div box="1" flex items="center">
                           <div>
                               <h3>积分签到</h3>
                               <p>02-25 10:30</p>
                           </div>
                       </div>
                       <div class="active">+20</div>
                   </li>
                   <li flex justify="between">
                       <div box="1" flex items="center">
                           <div>
                               <h3>积分签到</h3>
                               <p>02-25 10:30</p>
                           </div>
                       </div>
                       <div class="active">+20</div>
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
