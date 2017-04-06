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
                    <el-table :data="activityList" border style="width: 100%">
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
    import {date2Filter, sex2Filter, date3Filter, marriage2Filter, date4Filter, date5Filter} from '../../../filters'
    export default {
        data() {
            return {
                tableData: [],
                multipleSelection: [],  //全选的值
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
                }, {
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
                }],
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
                uid:'',
                result:false  //删除弹框控制
            }
        },
        components: {
            VueCoreImageUpload, Loading, mySelect, mySelectInput, myPage, myDialog
        },
        computed: {...mapGetters(['activityList', 'page', 'enterList'])},
        mounted(){
            this.getData();
            this.restaurants = this.loadAll();
            // dom.style.marginLeft=-(dom.offsetWidth/2)+'px';
        },
        methods: {
            ...mapActions(['getActivity', 'getEnter', 'changePage', 'clearPage', 'changeSelect', 'delUser', 'go']),
            date2Filter, sex2Filter, date3Filter, marriage2Filter, date4Filter, date5Filter,
            handleDelete(index, row) {
                console.log(index, row);
                this.uid=row.id;
                this.result=true;
            },
            onResultChange(val){
                this.result=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
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
            loadAll() {
                return [
                    {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
                    {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
                    {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
                    {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
                    {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
                    {"value": "贡茶", "address": "上海市长宁区金钟路633号"},
                    {"value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号"},
                    {"value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号"},
                    {"value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107"},
                    {"value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号"},
                    {"value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号"},
                    {"value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号"},
                    {"value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"},
                    {"value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层"},
                    {"value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号"},
                    {"value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路"},
                    {"value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺"},
                    {"value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819"},
                    {"value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"},
                    {"value": "枪会山", "address": "上海市普陀区棕榈路"},
                    {"value": "纵食", "address": "元丰天山花园(东门) 双流路267号"},
                    {"value": "钱记", "address": "上海市长宁区天山西路"},
                    {"value": "壹杯加", "address": "上海市长宁区通协路"},
                    {"value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"},
                    {"value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室"},
                    {"value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"},
                    {"value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"},
                    {"value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号"},
                    {"value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号"},
                    {"value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号"},
                    {"value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号"},
                    {"value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号"},
                    {"value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室"},
                    {"value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1"},
                    {"value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号"},
                    {"value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"},
                    {"value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部"},
                    {"value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B"},
                    {"value": "浏阳蒸菜", "address": "天山西路430号"},
                    {"value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路"},
                    {"value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室"},
                    {"value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号"},
                    {"value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号"},
                    {"value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"},
                    {"value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号"},
                    {"value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼"},
                    {"value": "阳阳麻辣烫", "address": "天山西路389号"},
                    {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
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

        }
    }
</script>

