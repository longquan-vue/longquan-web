<template>
    <div>
        <div class="contentBoxtitle"><span>用户列表</span></div>
        <div class="contentBoxCont">
            <div class="btnGroup mgb20">
                    <span>
                        性别：<el-select v-model="sexSelect.value" placeholder="请选择" style="width:100px;">
                                <el-option v-for="item in sexSelect.options"  :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                    </span>
                <span>
                        年龄：<el-input v-model="ageValue" placeholder="" style="width:100px;"></el-input> <em>岁以上</em>
                    </span>
                <span>
                        婚姻：<el-select v-model="merrySelect.value" placeholder="请选择" style="width:100px;">
                                <el-option v-for="item in merrySelect.options" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                    </span>
                <span>
                        职工认证：<el-select v-model="certificationSelect.value" placeholder="请选择" style="width:100px;">
                                <el-option v-for="item in certificationSelect.options" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                    </span>
                <span>
                        是否冻结：<el-select v-model="freezeSelect.value" placeholder="请选择" style="width:100px;">
                                <el-option v-for="item in freezeSelect.options" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                    </span>
                <span>
                        积分：<el-input v-model="pointValue" placeholder="" style="width:100px;"></el-input> <em>以上</em>
                    </span>

                <span>
                        搜索条件：<el-select v-model="typeSelect.value" placeholder="请选择" style="width:120px;">
                                <el-option v-for="item in typeSelect.options" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                                <el-input style="width:150px;"
                                          placeholder="请输入搜索内容"
                                          icon="search"
                                          v-model="searchVal"
                                          :on-icon-click="handleIconClick">
                                </el-input>
                    </span>
            </div>
            <div class="btn mgb20">
                <el-button type="primary" @click="dialogFormVisible = true" icon="plus">群发站内信</el-button>
            </div>
            <div class="tableList mgb20">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column type="index" label="编号" fixed="left"></el-table-column>
                    <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="idcard" label="身份证" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="sex" label="性别"></el-table-column>
                    <el-table-column prop="merry" label="婚姻"></el-table-column>
                    <el-table-column prop="birth" label="生日" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="phone" label="电话" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="mail" label="邮箱" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="address" label="邮寄地址" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="department" label="所属单位" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="jobname" label="岗位名称" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="certification" label="职工认证"></el-table-column>
                    <el-table-column prop="point" label="剩余积分"></el-table-column>
                    <el-table-column prop="freeze" label="是否冻结用户"></el-table-column>
                    <el-table-column prop="regtime" label="注册日期" show-overflow-tooltip></el-table-column>
                    <el-table-column label="操作" fixed="right" width="150px">
                        <template scope="scope">
                            <el-button type="text"
                                       size="small"
                                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                                    size="small"
                                    type="text"
                                    @click="handlePoint">积分</el-button>
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
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                tableData: [{
                    nickname:'柚子',
                    name:'钟成1',
                    idcard:'510322199212282114',
                    sex:'男',
                    merry:'未婚',
                    birth:'1992-12-28',
                    phone:'18683370859',
                    mail:'690517217@qq.com',
                    address:'剑南大道天府四街逸都国际',
                    department:'成都爱创业科技有限公司',
                    jobname:'前端工程师',
                    certification:'是',
                    point:3000,
                    freeze:'否',
                    regtime:'2017-03-18 00:00',
                }, {
                    nickname:'柚子',
                    name:'钟成2',
                    idcard:'510322199212282114',
                    sex:'男',
                    merry:'未婚',
                    birth:'1992-12-28',
                    phone:'18683370859',
                    mail:'690517217@qq.com',
                    address:'剑南大道天府四街逸都国际',
                    department:'成都爱创业科技有限公司',
                    jobname:'前端工程师',
                    certification:'是',
                    point:3000,
                    freeze:'否',
                    regtime:'2017-03-18 00:00',
                },{
                    nickname:'柚子',
                    name:'钟成3',
                    idcard:'510322199212282114',
                    sex:'男',
                    merry:'未婚',
                    birth:'1992-12-28',
                    phone:'18683370859',
                    mail:'690517217@qq.com',
                    address:'剑南大道天府四街逸都国际',
                    department:'成都爱创业科技有限公司',
                    jobname:'前端工程师',
                    certification:'是',
                    point:3000,
                    freeze:'否',
                    regtime:'2017-03-18 00:00',
                },{
                    nickname:'柚子',
                    name:'钟成4',
                    idcard:'510322199212282114',
                    sex:'男',
                    merry:'未婚',
                    birth:'1992-12-28',
                    phone:'18683370859',
                    mail:'690517217@qq.com',
                    address:'剑南大道天府四街逸都国际',
                    department:'成都爱创业科技有限公司',
                    jobname:'前端工程师',
                    certification:'是',
                    point:3000,
                    freeze:'否',
                    regtime:'2017-03-18 00:00',
                },{
                    nickname:'柚子',
                    name:'钟成5',
                    idcard:'510322199212282114',
                    sex:'男',
                    merry:'未婚',
                    birth:'1992-12-28',
                    phone:'18683370859',
                    mail:'690517217@qq.com',
                    address:'剑南大道天府四街逸都国际',
                    department:'成都爱创业科技有限公司',
                    jobname:'前端工程师',
                    certification:'是',
                    point:3000,
                    freeze:'否',
                    regtime:'2017-03-18 00:00',
                },],
                currentPage: 1,
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
                sexSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '男'
                    }, {
                        value: '选项3',
                        label: '女'
                    }],
                    value: ''
                },
                merrySelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '已婚'
                    }, {
                        value: '选项3',
                        label: '未婚'
                    }],
                    value: ''
                },
                ageValue:'',
                certificationSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '已认证'
                    }, {
                        value: '选项3',
                        label: '未认证'
                    }, {
                        value: '选项3',
                        label: '审核中'
                    }],
                    value: ''
                },
                freezeSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '是'
                    }, {
                        value: '选项3',
                        label: '否'
                    }],
                    value: ''
                },
                pointValue:'',
                typeSelect:{
                    options: [{
                        value: '选项1',
                        label: '姓名'
                    }, {
                        value: '选项2',
                        label: '身份照号'
                    }, {
                        value: '选项3',
                        label: '所属单位'
                    }, {
                        value: '选项4',
                        label: '电话号码'
                    }, {
                        value: '选项5',
                        label: '昵称'
                    }],
                    value: ''
                },
                searchVal:''
            }
        },
        components: {
        },
        computed: {

        },
        methods: {
            handleEdit(index, row) {
                this.$router.push('user/edit');
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
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            },
            handleIconClick(){  //搜索

            },
            handlePoint(){   //积分管理
                this.$router.push('point');
            }
        },
        created () {

        },
        destroyed () {

        }
    }
</script>