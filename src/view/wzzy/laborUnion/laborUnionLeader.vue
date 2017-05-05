<style lang="less">
    .union-leader{
        ul{
            li{ padding: 20px 0;border-bottom: 1px solid #E7E7E7;overflow: hidden;
                .union-leader-img{ width: 170px;height: 220px;overflow: hidden;float: left;
                    img{ width: 100%;height: 100%;
                        -webkit-transition: all 0.8s;
                        -moz-transition: all 0.8s;
                        -ms-transition: all 0.8s;
                        -o-transition: all 0.8s;
                        transition: all 0.8s;
                        &:hover{
                            -webkit-transform: scale(1.2);
                            -moz-transform: scale(1.2);
                            -ms-transform: scale(1.2);
                            -o-transform: scale(1.2);
                            transform: scale(1.2);}

                    }
                }
                .union-leader-intro{ margin-left: 200px;
                    h2{ font-size: 22px;color: #333;margin: 50px 0 20px 0}
                    p{ font-size: 16px;color: #666666;margin-bottom: 10px;}
                }

            }
        }
    }
</style>
<template>
    <div class="laborUnionLeader">
        <div class="union-leader">
            <ul>
                <li v-for="(item,i) in list" :key="i">
                    <div class="union-leader-img">
                        <img :src="item.picUrl">
                    </div>
                    <div class="union-leader-intro">
                        <h2>{{item.name}}</h2>
                        <p>{{item.position}}</p>
                        <p>{{item.descript}}</p>
                    </div>
                </li>
            </ul>
        </div>
      <MyPagination :method="findLeader" style="margin:30px 0;"/>
    </div>
</template>

<script type="es6">
    import { mapGetters,mapActions } from 'vuex'
    import MyPagination from '../../../components/public/page/MyPagination.vue'
    export default{
        components:{
          MyPagination
        },
        computed: {
            ...mapGetters([ 'list']),
        },
        methods:{
            ...mapActions(['clear','findLeader']),
        },
        created () {
          this.findLeader()
        },
        destroyed(){
          this.clear()
        }
    }
</script>
