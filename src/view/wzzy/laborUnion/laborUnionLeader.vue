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
                <li v-for="i in 5" :key="i">
                    <div class="union-leader-img">
                        <img :src="'../../../../static/wx/img/'+i+'.jpg'">
                    </div>
                    <div class="union-leader-intro">
                        <h2>蕾姆</h2>
                        <p>区委常委、区总工会主席</p>
                        <p>主持区总工会全面工作</p>
                    </div>
                </li>
            </ul>
        </div>
        <el-pagination layout="prev, pager, next" :total="50" style="margin:20px auto;text-align:center"></el-pagination>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
