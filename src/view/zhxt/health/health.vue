<style lang="less">
  @import './health.css';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>健身项目列表</span></div>
    <div class="contentBoxCont">
        <div class="mgb20">

            <mySelect title="项目类型" field="type" :options="{0:'全部',1:'单人项目',2:'双人项目',3:'多人项目'}" value="0"
                      :change="change"></mySelect>

            <mySelectInput title="搜索条件"
                           :options="{'name':'项目名称'}"
                           valueLabel="name" :change="change" :searchVal="searchVal"
                           :handleIconClick="handleIconClicked"></mySelectInput>
            <el-button type="primary" @click="go(['activityEdit','creat'])" icon="plus">添加健身项目</el-button>
        </div>
        <div class="tableList mgb20">
            <el-table :data="healthList" border style="width: 100%">
                <el-table-column type="index" label="编号"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="score" label="报名所需积分"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button type="text" size="small" @click="">编辑</el-button>
                        <el-button size="small" type="text" @click="">预约管理</el-button>
                        <el-button size="small" type="text" @click="">暂停</el-button>
                        <el-button size="small" type="text" @click="">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pageSlide">
            <myPage :method="getHealth"/>
        </div>
    </div>

  </div>
</template>
<script type="es6">
    import Loading from '../../../components/public/Loading.vue';
    import {mapGetters, mapActions} from 'vuex'
    import mySelect from '../../../components/public/select/mySelect.vue'
    import mySelectInput from '../../../components/public/selectInput/mySelectInput.vue'
    import myPage from '../../../components/public/page/page.vue'
    import myDialog from '../../../components/public/dialog/dialog.vue'
    import {date2Filter, sex2Filter, date3Filter, marriage2Filter, date4Filter, date5Filter} from '../../../filters'
  export default {
    name: 'recruitment',
    data() {
      return {
        tbindex:-1,
        searchVal: '',
      }
    },
    components: {
        Loading, mySelect, mySelectInput, myPage, myDialog
    },
    computed: {...mapGetters(['healthList', 'page', 'enterList'])},
    methods: {
        ...mapActions(['getHealth', 'changePage', 'clearPage', 'changeSelect', 'go']),
        date2Filter, sex2Filter, date3Filter, marriage2Filter, date4Filter, date5Filter,
        change(key, value){   //这是每个 change
            this.changeSelect({key, value});
            this.getHealth();
        },
        inputSearch(key, value){
            // console.log(this.score);
            this.changeSelect({key, value});
            this.getHealth();
        },
        handleIconClicked(data){  //搜索的函数
            console.log(data);
            // let {key,value}=data;
            // console.log({key,value});
            this.changeSelect(data);
            this.getHealth();
        }
    },
    created () {
        this.getHealth();
    },
    destroyed () {

    }
  }
</script>

