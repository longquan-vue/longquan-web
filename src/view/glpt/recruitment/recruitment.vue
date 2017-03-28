<style lang="less">
  @import 'recruitment.less';
</style>
<template>
  <div class="recruitment">
      <div class="title"><span>招聘信息管理</span></div>
      <div class="btnGroup mgb20">
          <el-button type="primary" @click="dialogFormVisible = true" icon="plus">发起</el-button>
          <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="true" @select="handleSelect"></el-autocomplete>
          <el-button type="primary" icon="search">搜索</el-button>
          <el-button type="success" icon="upload2" @click="exportExl()">全部导出</el-button>
      </div>
      <div class="tableList mgb20">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="编号"></el-table-column>
            <el-table-column prop="job" label="招聘职位"></el-table-column>
            <el-table-column prop="useAddress" label="用人单位"></el-table-column>
            <el-table-column prop="companyAddress" label="公司地址"></el-table-column>
            <el-table-column prop="personNum" label="招聘人数"></el-table-column>
            <el-table-column prop="money" label="薪资待遇"></el-table-column>
            <el-table-column prop="connectPerson" label="联系人"></el-table-column>
            <el-table-column prop="phone" label="联系电话"></el-table-column>
            <el-table-column prop="require" label="招聘要求"></el-table-column>
            <el-table-column prop="welfare" label="福利待遇"></el-table-column>
            <el-table-column prop="depatrment" label="发布机关"></el-table-column>
            <el-table-column prop="date" label="发布时间"></el-table-column>
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

    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <span>您确定要删除此条信息吗</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteClick(tbindex)">确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog title="发起招聘" v-model="dialogFormVisible" size="small">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动图片" class="userUpload">
            <img class="userSrc" :src="userSrc">
            <vue-core-image-upload
              crop-ratio="1:1"
              v-bind:class="['el-button','el-button--primary','js-btn-crop']"
              v-bind:crop="true"
              url=""
              extensions="png,gif,jpeg,jpg"
              @:imageuploaded="imageuploaded"
              @:errorhandle="handleError"
              @:imagechanged="imagechanged"
              text='上传图片'>
            </vue-core-image-upload>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
  </div>
</template>
<script type="es6">
  export default {
    name: 'recruitment',
    data() {
      return {
        tableData: [],
        multipleSelection: [],  //全选的值
        currentPage: 1,
        dialogVisible: false,
        dialogFormVisible:false,
        tbindex:-1,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        formLabelWidth: '70px',
        userSrc:'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        restaurants: [],   //搜索框的下拉数据
        state2: ''   // 搜索框的value
      }
    },
    components: {
    },
      mounted(){
          this.getData();
          this.restaurants = this.loadAll();
          // dom.style.marginLeft=-(dom.offsetWidth/2)+'px';
      },
    computed: {

    },
    methods: {
        getData(){
            let _this=this;
            setTimeout(()=>{
                _this.loadingData=false;
                _this.tableData=[
                    {
                        job:'前端工程师',
                        useAddress:'成都爱创业科技有限公司',
                        companyAddress:'菁蓉国际广场',
                        personNum:'2',
                        money:'8000',
                        connectPerson:'钟成',
                        phone:'18683370859',
                        require:'工作认真，有上进行。',
                        welfare:'五险一金，双休，年假，餐补',
                        depatrment:'这是发布机关',
                        date: '2016-05-03'
                    }, {
                        job:'前端工程师',
                        useAddress:'成都爱创业科技有限公司',
                        companyAddress:'菁蓉国际广场',
                        personNum:'2',
                        money:'8000',
                        connectPerson:'钟成',
                        phone:'18683370859',
                        require:'工作认真，有上进行。',
                        welfare:'五险一金，双休，年假，餐补',
                        depatrment:'这是发布机关',
                        date: '2016-05-03'
                    }, {
                        job:'前端工程师',
                        useAddress:'成都爱创业科技有限公司',
                        companyAddress:'菁蓉国际广场',
                        personNum:'2',
                        money:'8000',
                        connectPerson:'钟成',
                        phone:'18683370859',
                        require:'工作认真，有上进行。',
                        welfare:'五险一金，双休，年假，餐补',
                        depatrment:'这是发布机关',
                        date: '2016-05-03'
                    }, {
                        job:'前端工程师',
                        useAddress:'成都爱创业科技有限公司',
                        companyAddress:'菁蓉国际广场',
                        personNum:'2',
                        money:'8000',
                        connectPerson:'钟成',
                        phone:'18683370859',
                        require:'工作认真，有上进行。',
                        welfare:'五险一金，双休，年假，餐补',
                        depatrment:'这是发布机关',
                        date: '2016-05-03'
                    }
                ]
            },1000)

        },
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
        exportExl(){
            console.log(this.multipleSelection);
        }
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

