<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span v-if="!isEdit">添加工会活动</span>
            <span v-if="isEdit">编辑工会活动</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div style="width:80%;margin:auto;">
                <el-form :model="activityDetail" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="活动配图" prop="picUrl">
                        <el-upload
                                :action="action"
                                :http-request="upload"
                                :on-success="successActivity"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item label="活动名称" prop="name">
                        <el-input :value="activityDetail.name" @input="(v)=>changeWC({name:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="活动时间" required>
                        <el-col :span="11">
                            <el-form-item prop="start">
                                <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始日期" :value="activityDetail.start" @input="(v)=>changeWC({start:v.getTime()})" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="end">
                                <el-date-picker type="datetime" placeholder="选择结束日期" :value="activityDetail.end" @input="(v)=>changeWC({end:v.getTime()})" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="报名时间" required>
                        <el-col :span="11">
                            <el-form-item prop="entryStart">
                                <el-date-picker type="datetime" placeholder="选择开始日期" :value="activityDetail.entryStart" @input="(v)=>changeWC({entryStart:v.getTime()})" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="entryEnd">
                                <el-date-picker type="datetime" placeholder="选择结束日期" :value="activityDetail.entryEnd" @input="(v)=>changeWC({entryEnd:v.getTime()})" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="报名人数" prop="total">
                        <el-input :value="activityDetail.total" @input="(v)=>changeWC({total:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="报名权限" prop="entry">
                        <el-radio-group :value="activityDetail.entry" @input="(v)=>changeWC({entry:v})">
                            <el-radio :label="0">所有用户可报名</el-radio>
                            <el-radio :label="1">认证用户可报名</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="报名所需积分" prop="score">
                        <el-input :value="activityDetail.score" @input="(v)=>changeWC({score:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="主办方" prop="sponsor">
                        <el-input :value="activityDetail.sponsor" @input="(v)=>changeWC({sponsor:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="协办方" prop="coSponsor">
                        <el-input :value="activityDetail.coSponsor" @input="(v)=>changeWC({coSponsor:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="承办方" prop="organizer">
                        <el-input :value="activityDetail.organizer" @input="(v)=>changeWC({organizer:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="活动地点" prop="place">
                        <el-input :value="activityDetail.place" @input="(v)=>changeWC({place:v})"></el-input>
                    </el-form-item>
                    <el-form-item label="福利提供方链接" prop="website">
                        <el-input :value="activityDetail.website" @input="(v)=>changeWC({website:v})"></el-input>
                    </el-form-item>

                    <el-form-item label="活动内容" prop="detail">
                        <quill-editor ref="myTextEditor" :content="activityDetail.detail" @input="(v)=>changeWC({detail:v})" :config="editorOption" @change="onEditorChange($event)"></quill-editor>
                    </el-form-item>

                    <el-form-item label="活动规则介绍" prop="rule">
                        <quill-editor ref="myTextEditor" :content="activityDetail.rule" @input="(v)=>changeWC({rule:v})" :config="editorOption" @change="onEditorChange1($event)"></quill-editor>
                    </el-form-item>
                    <div v-if="isEdit">
                        <el-form-item label="福利发布者" prop="adminId">
                            <el-input v-model="activityDetail.adminId" readonly></el-input>
                        </el-form-item>
                        <el-form-item label="发布时间" prop="created">
                            <el-input :value="date3Filter(activityDetail.created)" readonly></el-input>
                        </el-form-item>
                    </div>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>
<script type="es6">
    import { mapGetters,mapActions } from 'vuex'
    import {date2Filter,sex2Filter,date3Filter} from '../../../filters'
    export default {
        data() {
            return {
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'change' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
                    ],
                    start: [
                        { type:'number', required: true, message: '请选择开始日期', trigger: 'change' }
                    ],
                    end: [
                        { type:'number', required: true, message: '请选择开始日期', trigger: 'change' }
                    ],
                    entryStart: [
                        { type:'number', required: true, message: '请选择开始日期', trigger: 'change' }
                    ],
                    entryEnd: [
                        { type:'number', required: true, message: '请选择开始日期', trigger: 'change' }
                    ],
                },
                isaudit:'是',
                dialogImageUrl: '',
                dialogVisible: false,
                content: '<p>Hello BBK</p>',
                editorOption: {
                    // something config
                },
                actTime:[this.$store.state.activityDetail.start,this.$store.state.activityDetail.end],
                actEntryTime:[this.$store.state.activityDetail.entryStart,this.$store.state.activityDetail.entryEnd],
                isEdit:false
            }
        },
        computed: {
            ...mapGetters(['activityDetail','action']),
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        methods:{
            date2Filter,sex2Filter,date3Filter,
            ...mapActions(['getActivityDetail','changeWC','upload','successActivity','createActivity']),
            goBack(){
                this.$router.go(-1);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                console.log(file);
                // this.dialogImageUrl = file.url;
                // this.dialogVisible = true;
            },
            onEditorChange({ editor, html, text }) {
                // this.content = html;
            },
            onEditorChange1({ editor, html, text }) {
                // this.content = html;
            },
            submitForm(formName){
                // console.log(this.content);
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.createActivity();
                    } else {
                        this.$message.error('*号字段必须填写');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            dateChange(v){
                console.log( typeof v);
            }
        },
        mounted(){
            
        },
        created () {
            if (this.$route.path.indexOf('creat')>-1){
                this.$message.success('这是创建操作哦');
            }else {
                this.$message.success('这是编辑操作哦');
                this.isEdit=true;
            }
            this.getActivityDetail()
        },
        destroyed () {

        }
    }
</script>
