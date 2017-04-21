<style lang="less" scoped>
    @import "./healthManageEdit.less";
</style>
<template>
    <div class="healthManageEdit">
        <appHead title="查看编辑" v-if="!data.edit"></appHead>
        <appHead title="添加健身项目" v-if="data.edit"></appHead>

        <el-form :model="data" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="健身项目名称" prop="name" style="padding-top:0.5rem;">
                <el-input :value="data.name" @input="(v)=>setData({name:v})" placeholder="请输入招聘的标题，20字以内"></el-input>
            </el-form-item>
            <el-form-item label="选择项目图标" prop="name" style="padding-top:0.5rem;">
                <a class="addIcon" @click="showIcon=true">+
                    <img :src="data.picUrl" v-if="data.picUrl">
                </a>
            </el-form-item>
            <el-form-item label="选择类型" prop="type">
                <el-select :value="itemFilter(data.type)" placeholder="请选择项目类型" style="width:100%" @input="(v)=>setData({type:v})">
                    <el-option label="单人健身项目" :value="1"></el-option>
                    <el-option label="双人健身项目" :value="2"></el-option>
                    <el-option label="多人健身项目" :value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请输入多人健身项目人数上限：" prop="total" v-if="data.type==3">
                <el-input :value="data.total" @input="(v)=>setData({total:v})" placeholder="不限">
                    <template slot="append">人</template>
                </el-input>
            </el-form-item>
            <el-form-item label="预约所需积分：" prop="score">
                <el-input :value="data.score" @input="(v)=>setData({score:v})" placeholder="不限"></el-input>
            </el-form-item>
            <el-form-item label="开启日期：" prop="dates" required>
                <Calendar :value="data.dates" @on-change="(v)=>setData({dates:v})"/>
            </el-form-item>
            <el-form-item label="开启时间区间：" required>
                <el-row v-for="(time,idx) in times" :key="idx">
                    <el-col :span="10">
                        <el-time-select style="width:100%" placeholder="起始时间" @input="(v)=>changeTime('starts.'+idx,v)" :value="time.start" :picker-options="{start:'08:30',step:'00:15',end:'22:30'}"/>
                    </el-col>
                    <el-col class="line" :span="2" style="text-align:center">至</el-col>
                    <el-col :span="10">
                        <el-time-select style="width:100%"  placeholder="结束时间" @input="(v)=>changeTime('ends.'+idx,v)" :value="time.end" :picker-options="{start:'08:30',step:'00:15',end:'22:30',minTime:time.start}"/>
                    </el-col>
                    <el-col class="line" :span="2" style="text-align:center"><img src="/static/zhxt/error.png" style="width:0.5rem;    vertical-align: middle;" alt="close" @click="delTime(idx)"></el-col>
                </el-row>
                <img src="/static/zhxt/add.png" alt="add" @click="addTime" style="width:0.8rem">
            </el-form-item>



            <a @click="submitForm('ruleForm')" class="baoming" style="margin-bottom:0">提交</a>
        </el-form>

        <popup v-model="showIcon" height="100%">
            <div class="iconBox">
                <a @click="showIcon=false" class="closePopup">X</a>
                <div class="showIcon" flex="flex" wrap="wrap">
                    <a v-for="icon in healthIcon" @click="setData({picUrl:icon})">
                        <img :src="icon"/>
                        <span v-if="data.picUrl == icon">√</span>
                    </a>
                </div>
                <p>提示：图标为系统默认图标，如需要新增图标，请联系技术公司进行设计上传！</p>
                <a @click="showIcon=false" class="baoming closeIcon" style="margin-bottom:0">确定</a>
            </div>
        </popup>
    </div>
</template>
<script type="es6">
    import {mapGetters, mapActions} from 'vuex'
    import Calendar from '../../../components/public/calender/Calender.vue'
    import filter from '../../../filters'
    import MyUpload from '../../../components/public/MyUpload.vue'
    import {healthIcon} from '../../../constant'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import { Datetime, Group, XButton , XDialog, TransferDomDirective as TransferDom ,Popup} from 'vux'
    import moment from 'moment'
    export default {
        data() {
            return {
                healthIcon,
                times: [],
                rules: {
                    // name: [
                    //     {required: true, message: '请输入活动名称', trigger: 'change'},
                    //     {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change'}
                    // ],
                    // start: [
                    //     {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
                    // ],
                    // end: [
                    //     {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
                    // ],
                    // entryStart: [
                    //     {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
                    // ],
                    // entryEnd: [
                    //     {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
                    // ],
                },
                showIcon:false
            }
        },
        directives: {
            TransferDom
        },
        components: {
            MyUpload, Calendar,appHead,Datetime, Group, Popup
        },
        computed: {
            ...mapGetters(['data']),
        },
        watch: {
            data(){
                this.setTimes()
            }
        },
        methods: {
            ...filter,
            ...mapActions(['gethealthDetail', 'createHealth', 'updateHealth', 'setList', 'clear', 'setData', 'setListVal', 'delList', 'go']),
            submitForm(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.data.edit ? this.createHealth() : this.updateHealth();
                    } else {
                        this.$message.error('*号字段必须填写');
                        return false;
                    }
                });
            },
            setTimes(){
                this.times = this.data && this.data.starts ? this.data.starts.map((start, idx) => ({start: moment(start).format("HH:mm"), end: moment(this.data.ends[idx]).format("HH:mm")})) : [];
            },
            resetForm(formName) {
            },
            changeTime(key, val){
                this.setListVal([key, moment(`1970-01-01 ${val}`, 'YYYY-MM-DD HH:mm').format('x') * 1]);
                this.setTimes()
            },
            delTime(idx){
                this.delList(['starts', idx]);
                this.delList(['ends', idx]);
                this.setTimes()
            },
            addTime(){
                this.setListVal([`starts.${this.times.length}`, moment('1970-01-01 08:30', 'YYYY-MM-DD HH:mm').format('x') * 1])
                this.setListVal([`ends.${this.times.length}`, moment('1970-01-01 22:30', 'YYYY-MM-DD HH:mm').format('x') * 1])
                this.setTimes()
            }
        },
        created () {
            this.gethealthDetail()
        },
        destroyed () {
            this.clear('health')
        }
    }
</script>
