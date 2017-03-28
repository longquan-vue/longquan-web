<style lang="less">
  @import './health.css';
</style>
<template>
  <div class="activity">
    <div class="title"><span>健身中心管理</span></div>
<!--    <div class="btnGroup mgb20">
      <el-button type="primary" @click="dialogFormVisible = true" icon="plus">发起</el-button>
    </div>-->
    <div class="tableList mgb20">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="编号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="depatrmentPerson" label="发布者"></el-table-column>
        <el-table-column prop="publishDate" label="发布时间"></el-table-column>
        <el-table-column label="报名人员">
          <template scope="scope">
            <el-button
              size="small"
              type="text"
              @click="dialogTableVisible = true">查看</el-button>
            <el-button
              size="small"
              type="text"
              @click="">导出</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="text"
                       size="small"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="text"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageSlide">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>

    <!--删除单条健身项目-->
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>您确定要删除此条信息吗</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteClick(tbindex)">确 定</el-button>
        </span>
    </el-dialog>
    <!--查看报名人员-->
    <el-dialog title="报名人员" v-model="dialogTableVisible" size="large">
      <el-table :data="gridData">
        <el-table-column type="index" label="编号"></el-table-column>
        <el-table-column property="name" label="姓名"></el-table-column>
        <el-table-column property="sex" label="性别"></el-table-column>
        <el-table-column property="company" label="公司"></el-table-column>
        <el-table-column property="job" label="职位"></el-table-column>
        <el-table-column property="phone" label="电话"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
        <el-table-column property="status" label="状态"></el-table-column>
        <el-table-column label="审核">
          <template scope="scope">
            <el-button type="text"
                       size="small"
                       @click="">同意</el-button>
            <el-button
              size="small"
              type="text"
              @click="">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script type="es6">
  import VueCoreImageUpload  from 'vue-core-image-upload';
  export default {
    name: 'recruitment',
    data() {
      return {
        tableData: [{
          name:'单车',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'乒乓球',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'羽毛球',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        },{
          name:'综合训练',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        },{
          name:'哑铃',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        },{
          name:'保龄球',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }],
        gridData: [{
          name: '钟成',
          sex: '难',
          company: '成都爱创业科技有限公司',
          job: '前端',
          phone: '18683370859',
          address: '剑南大道天府四街逸都国际',
          status: '同意',
        }, {
          name: '钟成',
          sex: '难',
          company: '成都爱创业科技有限公司',
          job: '前端',
          phone: '18683370859',
          address: '剑南大道天府四街逸都国际',
          status: '同意',
        },{
          name: '钟成',
          sex: '难',
          company: '成都爱创业科技有限公司',
          job: '前端',
          phone: '18683370859',
          address: '剑南大道天府四街逸都国际',
          status: '同意',
        },{
          name: '钟成',
          sex: '难',
          company: '成都爱创业科技有限公司',
          job: '前端',
          phone: '18683370859',
          address: '剑南大道天府四街逸都国际',
          status: '同意',
        }],
        currentPage: 1,
        dialogVisible: false,  //删除
        dialogTableVisible:false, //查看报名人员
        tbindex:-1,
      }
    },
    components: {
      VueCoreImageUpload
    },
    computed: {

    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tbindex=index;
        this.dialogVisible=true;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);

      },
      deleteClick(index){
        this.tableData.splice(index,1);
        this.dialogVisible=false;
      }
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

