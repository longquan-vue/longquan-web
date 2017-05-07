<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>积分记录</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="filterBox mgb20">
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围"/>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="nickname" label="昵称" min-width="100"/>
          <MyColumn prop="name" label="姓名" min-width="100"/>
          <MyColumn prop="depName" label="所属单位" min-width="140"/>
          <MyColumn prop="title" label="描述" min-width="140"/>
          <MyColumn prop="recording" label="时间" :formatter="date8Filter" min-width="160"/>
          <MyColumn prop="point" label="获得积分" min-width="100"/>
          <MyColumn label="操作" width="120">
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
            <el-input placeholder="请输入..."  v-model="point.score" auto-complete="on"/>
          </el-form-item>
          <el-form-item label="积分管理" label-width="80px">
            <el-row>
              <el-col :span="8">
                <el-select v-model="point.type">
                  <el-option label="增加" value="1"/>
                  <el-option label="减少" value="-1"/>
                </el-select>
              </el-col>
              <el-col :span="16">
                <el-input placeholder="请输入..."  v-model="point.point" auto-complete="on"/>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="show = false">取 消</el-button>
          <el-button type="primary" @click="changePoint">确 定</el-button>
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
  import {success} from '../../../actions'
  export default {
    data() {
      return {
        dateValue: [],
        show: false,
        point: {
          type: '1'
        }
      }
    },
    components: {MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getMineScore', 'updateUser', 'clear', 'changeSelect', 'go', 'changePage']),
      ...filter,
      change(key, value){
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
        this.point = {...this.point, id, score, point: 0};
        this.show = true
      },
      changePoint(){
        const {id, score, type, point} =this.point
        this.point.score = score + type * point
        this.updateUser({id, score: this.point.score}).then(() => success('修改成功！'));
        this.show = false;
      }
    },
    created () {
      // this.getMineScore();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
