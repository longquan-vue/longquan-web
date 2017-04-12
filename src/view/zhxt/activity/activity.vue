<style lang="css">
  @import './activity.css';
</style>
<template>
  <div class="contentBox">
    <Loading v-if="loadingData"></Loading>
    <div v-if="!loadingData">
      <div class="contentBoxtitle"><span>活动列表</span></div>
      <div class="contentBoxCont">
        <div class="mgb20">
          <mySelect title="活动状态" field="status" :options="{0:'全部',1:'报名中',2:'已结束'}" value="0"
                    :change="change"></mySelect>
          <mySelect title="报名权限" field="entry" :options="{0:'全部',1:'全部用户可报名',2:'认证用户可报名'}" value="0"
                    :change="change"></mySelect>
          <mySelectInput title="搜索条件"
                         :options="{'name':'活动名称','idCard':'主办单位','depName':'协办单位','phone':'承办单位'}"
                         valueLabel="name" :change="change" :searchVal="searchVal"
                         :handleIconClick="handleIconClicked"></mySelectInput>
          <el-button type="primary" @click="go(['activityEdit','creat'])" icon="plus">添加工会活动</el-button>
        </div>
        <div class="tableList mgb20">
          <el-table :data="list" border style="width: 100%">
            <el-table-column type="index" label="编号" fixed="left"></el-table-column>
            <el-table-column prop="name" label="活动名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="sponsor" label="主办方"></el-table-column>
            <el-table-column prop="coSponsor" label="协办方" show-overflow-tooltip></el-table-column>
            <el-table-column prop="organizer" label="承办方"></el-table-column>
            <el-table-column prop="start" label="报名时间" :formatter="date5Filter" show-overflow-tooltip></el-table-column>
            <el-table-column prop="entryStart" label="活动时间" :formatter="date4Filter" show-overflow-tooltip></el-table-column>
            <el-table-column prop="place" label="活动地点" show-overflow-tooltip></el-table-column>
            <el-table-column prop="entry" label="报名权限" show-overflow-tooltip></el-table-column>
            <el-table-column prop="current" label="报名人数" show-overflow-tooltip></el-table-column>
            <el-table-column prop="score" label="报名所需积分" show-overflow-tooltip></el-table-column>
            <el-table-column prop="status" label="活动状态" show-overflow-tooltip></el-table-column>
            <el-table-column prop="freeze" label="是否暂停活动">
            </el-table-column>
            <el-table-column label="操作" fixed="right" width="300px">
              <template scope="scope">
                <el-button type="text" size="small" @click="go(['activityEdit',scope.row.id])">编辑
                </el-button>
                <el-button size="small" type="text" @click="go(['activityEnter',scope.row.id])">查看报名表单
                </el-button>
                <el-button size="small" type="text" @click="">二维码</el-button>
                <el-button size="small" type="text" @click="go(['activitySigned',scope.row.id])">签到管理</el-button>
                <el-button size="small" type="text" @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pageSlide">
          <myPage :method="getActivity"/>
        </div>
      </div>
    </div>
    <myDialog title="提示" :uid="uid" :delNum="1" content="您确定要删除此条信息吗" :result="result" @on-result-change="onResultChange" :method="delUser"></myDialog>
  </div>
</template>
<script type="es6">
  import VueCoreImageUpload  from '../../../components/public/vue.core.image.upload.vue';
  import Loading from '../../../components/public/Loading.vue';
  import {mapGetters, mapActions} from 'vuex'
  import mySelect from '../../../components/public/select/mySelect.vue'
  import mySelectInput from '../../../components/public/selectInput/mySelectInput.vue'
  import myPage from '../../../components/public/page/page.vue'
  import myDialog from '../../../components/public/dialog/dialog.vue'
  import filter from '../../../filters'
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],  //全选的值
        loadingData: true,// 控制loading显示
        tbindex: -1,   //删除当前数据的索引
        formTitle: '发起活动',
        formBtn: '立即创建',
        ruleForm: {    //表单数据
          name: '',
          region: '',
          date1: '',
          date2: '',
          num: '',
          desc: ''
        },
        rules: {     //表单验证
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请填写活动地址', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          num: [
            {required: true, message: '请填写活动人数'},
            {type: 'number', message: '必须是数字'}
          ],
          desc: [
            {required: true, message: '请填写活动内容', trigger: 'blur'}
          ]
        },
        formLabelWidth: '70px',   //表单label标签长度
        userSrc: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',  //默认用户头像
        restaurants: [],   //搜索框的下拉数据
        state2: '',   // 搜索框的value
        searchVal: '',
        dialogFormVisible: false,
        uid: '',
        result: false  //删除弹框控制
      }
    },
    components: {
      VueCoreImageUpload, Loading, mySelect, mySelectInput, myPage, myDialog
    },
    computed: {...mapGetters(['list', 'page'])},
    mounted(){
      this.getData();
    },
    methods: {
      ...mapActions(['clear','getActivity']),
      ...filter,
      handleDelete(index, row) {
        console.log(index, row);
        this.uid = row.id;
        this.result = true;
      },
      onResultChange(val){
        this.result = val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
      },
      getData(){
        let _this = this;
        setTimeout(() => {
          _this.loadingData = false;

        }, 1000)
      },
      dateChange(val){
        return val;
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleSelectionChange(val) {     //当选择项发生变化时会触发该事件
        this.multipleSelection = val;
        console.log(val);
      },
      handleSelectAll(selection){  //全选的操作
        console.log(selection);
      },
      exportExl(){
        console.log(this.multipleSelection);
      },
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getActivity();
      },
      inputSearch(key, value){
        // console.log(this.score);
        this.changeSelect({key, value});
        this.getActivity();
      },
      handleIconClicked(data){  //搜索的函数
        console.log(data);
        // let {key,value}=data;
        // console.log({key,value});
        this.changeSelect(data);
        this.getActivity();
      }
    },
    created () {
      this.getActivity();
    },
    destroyed () {
      this.clear()
    }
  }
</script>

