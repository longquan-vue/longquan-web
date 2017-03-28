<style lang="less">
  @import './tips.css';
</style>
<template>
  <div class="contentBody">
    <Loading v-if="loadingData"></Loading>
    <div v-if="!loadingData" class="activity">
      <div class="title"><span>公告</span></div>
      <div class="btnGroup mgb20">
        <el-button type="primary" @click="bulidAct('ruleForm')" icon="plus">发起</el-button>
        <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="true" @select="handleSelect"></el-autocomplete>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="success" icon="upload2" @click="exportExl()">全部导出</el-button>
      </div>
      <div class="tableList mgb20">
        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange" @select-all="handleSelectAll">
          <el-table-column type="selection"></el-table-column>
          <el-table-column type="index" label="编号" width="60px;"></el-table-column>
          <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
          <el-table-column prop="content" label="正文" show-overflow-tooltip></el-table-column>
          <el-table-column prop="release_department" label="发布机关/部门"></el-table-column>
          <el-table-column prop="release_user" label="发布者"></el-table-column>
          <el-table-column prop="date" label="发布时间" show-overflow-tooltip></el-table-column>
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
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>

      <!--删除单条活动-->
      <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <span>您确定要删除此条信息吗</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteClick(tbindex)">确 定</el-button>
        </span>
      </el-dialog>
      <!--接收人列表弹框-->
      <el-dialog title="请选择接收人" v-model="dialogSelect" size="tiny">
        <el-tree accordion
          :data="personData"
          show-checkbox
          :default-expand-all="false"
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps">
        </el-tree>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogSelect = false">取 消</el-button>
            <el-button type="primary" @click="getCheckedNodes">确 定</el-button>
        </span>
      </el-dialog>
      <!--发起、编辑公告-->
      <el-dialog :title="formTitle" v-model="dialogFormVisible" size="small" @close="closeDialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="正文" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
          </el-form-item>
          <el-form-item label="接收人">
            <span v-text="receive.join(',')" v-show="receive.length!=0"></span>
            <input type="hidden" v-model="receive">
            <el-button @click="openSelect">+</el-button>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              class="upload-demo"
              action="//jsonplaceholder.typicode.com/posts/"
              :on-change="handleChangeFile"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> <!-- //slot 可以在组件内使用其他元素-->
            </el-upload>
          </el-form-item>
          <el-form-item label="发布机关" prop="release_department">
            <el-input v-model="ruleForm.release_department" readonly></el-input>
          </el-form-item>
          <el-form-item label="发布者" prop="release_user">
            <el-input type="textarea" v-model="ruleForm.release_user" readonly></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm',tbindex)">{{formBtn}}</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
        <!--        <div slot="footer" class="dialog-footer">
                  <el-button @click="resetForm('ruleForm')">取 消</el-button>
                  <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                </div>-->
      </el-dialog>
    </div>
  </div>
</template>
<script type="es6">
  import Loading from '../../../../components/public/Loading.vue';
  import moment from 'moment';
  import person from './person';
  export default {
    name: 'recruitment',
    data() {
      return {
        tableData: [],
        multipleSelection: [],  //全选的值
        loadingData: true,// 控制loading显示
        currentPage: 1,//列表当前页
        total:100,//列表总数
        pageSize:10,//
        dialogVisible: false,   //控制删除弹窗
        dialogFormVisible:false,  //控制表单弹窗
        dialogSelect:false,
        tbindex:-1,   //删除当前数据的索引
        formTitle:'发起活动',
        formBtn:'立即创建',
        ruleForm: {    //表单数据
          title: '',
          content: '',
          release_department: '',
          release_user: '',
          date:''
        },
        rules: {     //表单验证
          title: [
            { required: true, message: '请输入公告名称', trigger: 'blur' },
            { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请填写活动地址', trigger: 'change' },
            { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ]
        },
        formLabelWidth: '70px',   //表单label标签长度
        userSrc:'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',  //默认用户头像
        restaurants: [],   //搜索框的下拉数据
        state2: '',   // 搜索框的value
        fileList:[
          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
        personData:person,  //树形结构数据
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        receive:[]

      }
    },
    components: {
      moment,Loading,person
    },
    computed: {

    },
    mounted(){
      this.getData();
      this.restaurants = this.loadAll();
    },
    methods: {
      getData(){
        let _this=this;
        setTimeout(()=>{
          _this.loadingData=false;
          _this.tableData=[
            {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-21'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }, {
              title: '成都高新区上班族的福音，Gofun川交进入成都不限行',
              content: '从去年开始，“共享经济”成为社会热词，打车软件、共享单车应运而生。在共享单车的竞争角逐战中，共享汽车这种新的租车模式进入人们的视线。',
              release_department: '技术部',
              release_user: '钟成',
              date:'2017-03-20'
            }
          ]
        },1000)

      },
      bulidAct(formName){   //发起
        this.dialogFormVisible=true;
        this.formTitle='发起公告';
        this.formBtn='立即创建';
        console.log(this.ruleForm);
      },
      handleEdit(index, row) {   //编辑
        //console.log(index);
        // console.log(this.tableData[index])
        console.log(row.title);
        console.log(moment().format('YYYY-MM-DD'));
        this.tbindex=index;
        /*console.log(index, row);*/
        this.dialogFormVisible=true;  //打开编辑弹框
        this.formTitle='编辑公告';
        this.formBtn='保存';
        this.ruleForm.title=row.title;
        this.ruleForm.content=row.content;
        this.ruleForm.release_department=row.release_department;
        this.ruleForm.release_user=row.release_user;
      },
      openSelect(){  //打开接收人列表
        this.dialogSelect=true;
      },
      getCheckedNodes(){
        console.log(this.$refs.tree.getCheckedNodes(true));   //接收一个 boolean 参数，为true的话只显示被选中的子节点
        let data=this.$refs.tree.getCheckedNodes(true);
        if (data.length>0){
          for(let i=0;i<data.length;i++){
            this.receive[i]=data[i].label;
          }
        }else {
          this.receive=[];
        }

        this.dialogSelect=false;
      },
      closeDialog(){
        this.$refs['ruleForm'].resetFields();  //this.$refs['ruleForm'] 获取元素   resetFields() 重置
      },
      handleDelete(index, row) {  //删除单条活动
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
      dateChange(val){
        return val;
      },
      submitForm(formName,index) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.formBtn=='保存'){   //如果是编辑状态
              // alert('这是编辑状态');
              // console.log(index);
              // console.log(this.tableData[index])
              this.tableData[index].title=this.ruleForm.title;
              this.tableData[index].content=this.ruleForm.content;
              this.tableData[index].date=moment().format('YYYY-MM-DD');
              this.tableData[index].release_department=this.ruleForm.release_department;
              this.tableData[index].release_user=this.ruleForm.release_user;
            }else {
              /*alert('这是创建状态');*/
              this.tableData.push({
                title:this.ruleForm.title,
                content:this.ruleForm.content,
                date:moment(),
                release_department:'技术部',
                release_user:'钟成',
              })
            }
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
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
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
      exportExl(){   //导出
        console.log(this.multipleSelection);
      },
      handleChangeFile(file, fileList) {
        console.log(file);
        console.log(fileList);
      }
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

