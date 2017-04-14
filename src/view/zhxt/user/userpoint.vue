<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>积分记录</span>
      <a @click="go(['userList'])" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="filterBox mgb20">
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围"/>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list" border style="width: 100%">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="nickname" label="昵称"/>
          <MyColumn prop="name" label="姓名"/>
          <MyColumn prop="depName" label="所属单位"/>
          <MyColumn prop="title" label="描述"/>
          <MyColumn prop="recording" label="时间" :formatter="date8Filter" width="160"/>
          <MyColumn prop="point" label="获得积分" width="100"/>
          <!--<MyColumn prop="score" label="剩余积分" width="100"/>-->
          <MyColumn label="操作" fixed="right" width="120">
            <template scope="scope">
              <el-button type="text" size="small" @click="showPoint(scope.row)">积分管理</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getMineScore"/>
      </div>
      <el-dialog title="积分管理" v-model="show" size="tiny">
        <el-form :model="point">
          <el-form-item label="当前积分" label-width="80px">
            <el-input v-model="point.score" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="积分管理" label-width="80px">
            <el-row>
              <el-col :span="8">
                <el-select v-model="point.type">
                  <el-option label="增加" value="+"></el-option>
                  <el-option label="减少" value="-"></el-option>
                </el-select>
              </el-col>
              <el-col :span="16">
                <el-input v-model="point.point" auto-complete="off"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="show = false">取 消</el-button>
          <el-button type="primary" @click="show = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import filter from '../../../filters'
  export default {
    data() {
      return {
        dateValue: [], //时间筛选默认值
        show: false,
        point: {
          type: '+'
        }
      }
    },
    components: {
      MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getMineScore', 'clear', 'changeSelect', 'go', 'changePage']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getMineScore();
      },
      search(){
        if (this.dateValue.length > 0) {
          this.changePage({start: this.dateValue[0].getTime(), end: this.dateValue[1].getTime()})
        } else {
          this.changePage({start: null, end: null})
        }
        this.getMineScore();
      },
      reset(){
        this.dateValue = [];
        this.search();
      },
      showPoint({id, score}){
        this.point = {...this.point, id, score, point:0      }        ;
        this.show = true
      }
    },
    created () {
      this.getMineScore();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
