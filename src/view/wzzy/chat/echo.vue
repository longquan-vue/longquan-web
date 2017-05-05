<style lang="less">
    .wzzy-echo{
        li{
            padding: 18px 0;border-bottom: 1px solid #E7E7E7;
            h2{ font-size: 16px;color: #333;margin-bottom: 10px;
                a{ color: #333;cursor: pointer;
                    &:hover{ color: #BC0000;}
                }
                span{ color: #818181;font-size: 14px;float: right;}
            }
            p{ font-size: 14px;color: #8a8a8a;}
        }
    }
</style>
<template>
    <div class="wzzy-echo-box">
      <ul class="wzzy-echo">
        <li v-for="(item,index) in list">
          <h2><a @click="go(['chatEchoDetail',item.id])">问： {{item.title}}</a><span>{{date3Filter(item.created)}}</span></h2>
          <p v-html="limitFilter(strFilter(decode(item.answer)),100)"></p>
        </li>
      </ul>
      <MyPagination :method="getNews" style="margin:30px 0;"/>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import {findEchoApi} from '../../../api/echoApi'
    import MyPagination from '../../../components/public/page/MyPagination.vue'
    export default{
        data(){
            return{
                list:[],
            }
        },
        components:{
          MyPagination
        },
        computed: {
            ...mapGetters([ 'page']),
            active(){
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
            getNews(){
              const param = {...this.page};
              findEchoApi(param).then((data)=>{
                this.list = data.list;
                delete data.list;
                this.changePage(data);
              })
            }
        },
        created () {
          this.getNews();
        },
        destroyed(){

        }
    }
</script>
