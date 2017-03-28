<style lang="less">
  @import './redenvelope.css';
</style>
<template>
  <div class="activity">
    <div class="title"><span>红包福利</span></div>
    <div class="btnGroup mgb20">
      <el-button type="primary" @click="dialogFormVisible = true" icon="plus">发起</el-button>
    </div>
    <div class="tableList mgb20">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="编号"></el-table-column>
          <el-table-column prop="act_name" label="标题"></el-table-column>
          <el-table-column prop="wishing" label="祝福语"></el-table-column>
          <el-table-column prop="command" label="口令"></el-table-column>
          <el-table-column prop="all" label="总金额"></el-table-column>
          <el-table-column prop="total_num" label="红包个数"></el-table-column>
          <el-table-column prop="depatrment" label="发布机关"></el-table-column>
          <el-table-column prop="starttime" label="开始时间"></el-table-column>
          <el-table-column prop="endtime" label="结束时间"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                type="text"
                @click="">暂停</el-button>
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

    <!--删除单条红包-->
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>您确定要删除此条信息吗</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteClick(tbindex)">确 定</el-button>
        </span>
    </el-dialog>
    <!--发起红包-->
    <el-dialog title="发起红包" v-model="dialogFormVisible" size="small">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
        <el-form-item label="标题" prop="act_name">
          <el-input v-model="ruleForm.act_name"></el-input>
        </el-form-item>
        <el-form-item label="祝福语" prop="wishing">
          <el-input v-model="ruleForm.wishing"></el-input>
        </el-form-item>
        <el-form-item label="口令" prop="command">
          <el-input v-model="ruleForm.command"></el-input>
        </el-form-item>
        <el-form-item label="回复内容" prop="reply">
          <el-input v-model="ruleForm.reply"></el-input>
        </el-form-item>
        <el-form-item label="重复输入口令" prop="repeat_text">
          <el-input v-model="ruleForm.repeat_text"></el-input>
        </el-form-item>
        <el-form-item label="红包领完" prop="over">
          <el-input v-model="ruleForm.over"></el-input>
        </el-form-item>
        <el-form-item label="单个金额" prop="avg_amount">
          <el-input v-model="ruleForm.avg_amount"></el-input>
        </el-form-item>
        <el-form-item label="红包个数" prop="total_num">
          <el-input v-model.number="ruleForm.total_num"></el-input>
        </el-form-item>
        <el-form-item label="红包时间" required>
          <el-col :span="11">
            <el-form-item prop="starttime">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.starttime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="endtime">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.endtime" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="发布人" prop="send_name">
          <el-input v-model="ruleForm.send_name" readonly></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
      <!--        <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
              </div>-->
    </el-dialog>
    <!--编辑红包-->

  </div>
</template>
<script type="es6">
  export default {
    name: 'recruitment',
    data() {
      return {
        tableData: [{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        }, {
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        },{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        },{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        },{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        }],
        currentPage: 1,
        dialogVisible: false,
        dialogFormVisible:false,
        dialogTableVisible:false,
        tbindex:-1,
        ruleForm: {
          act_name: '',
          wishing: '',
          command: '',
          reply: '',
          repeat_text: '',
          over: '',
          avg_amount: '',
          total_num: '',
          starttime: '',
          endtime: '',
          send_name:'李寻欢'
        },
        rules: {
          act_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],
          wishing: [
            { required: true, message: '请填写祝福语', trigger: 'change' },
            { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
          ],
          command: [
            { required: true, message: '请填写口令', trigger: 'change' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          reply: [
            { required: true, message: '请填写回复内容', trigger: 'change' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          repeat_text: [
            { required: true, message: '请填写重复输入口令', trigger: 'change' },
            { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
          ],
          over: [
            { required: true, message: '请填写红包领完后的回复', trigger: 'change' },
            { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
          ],
          avg_amount: [
            { required: true, message: '请填写单个金额', trigger: 'change' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],
          total_num: [
            { required: true, message: '请填写红包个数' },
            { type: 'number', message: '必须是数字' }
          ],
          starttime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          endtime: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
        formLabelWidth: '80px',
        userSrc:'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      }
    },
    components: {
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
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.dialogFormVisible=false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.dialogFormVisible=false;
        this.$refs[formName].resetFields();
      },
      imageuploaded(res) {
        console.log(res);
        if (res.errcode == 0) {
          this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
        }
      },
      imagechanged(res) {
        console.log(res.name)
      },
      handleError(){
        this.$notify.error({
          title: '上传失败',
          message: '图片上传接口上传失败，可更改为自己的服务器接口'
        });
      }
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

