<style lang="less">
    .defImg{
        p{ color: #8391a5;}
        li{
            &.check{ border-color: #20a0ff;
                .selectImg{ display: block;}
            }
            margin-right: 10px;;height: 110px;;border: 1px solid #efefef;
            >div{ width: 100%;height: 100%;cursor: pointer;position: relative;
                >img{ width: 100%;height: 100%;object-fit: cover;}
            }
            .selectImg{ position: absolute;right: 10px;;bottom: 20px;width: 16px;height: 16px;display: none;
                img{ width: 100%;}
            }
        }
    }
</style>
<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span v-if="show==1">编辑券类福利</span>
            <span v-else>新增券类福利</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div style="width:80%;margin:auto;">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="福利配图" prop="name">
                        <div class="defImg mgb20">
                            <p>您可以选择一张图片，也可自己添加图片。</p>
                            <ul flex justify="between">
                                <li box="1" v-for="(item,index) in defImg" :class="{'check':index==currentIndex}" @click="currentIndex=index">
                                    <div class="imgBox">
                                        <img :src="item.url">
                                        <div class="selectImg"><img src="../../../../static/wx/img/select.png"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="福利名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利数量" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="兑换时间" prop="name">
                        <el-date-picker v-model="ruleForm.time" type="datetimerange" placeholder="选择时间范围">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="所需积分" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="人均兑换次数" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利提供方" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利提供方链接" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="兑换规则" prop="name">
                        <el-input type="textarea" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <div v-if="show==1">
                        <el-form-item label="福利发布者" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="发布时间" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
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
    export default {
        data() {
            return {
                currentIndex:0,  //当前选择的图片
                defImg:[{  //默认图片列表
                    url:'../../../../static/wx/img/1.jpg',
                },{
                    url:'../../../../static/wx/img/2.jpg',
                },{
                    url:'../../../../static/wx/img/3.jpg',
                },{
                    url:'../../../../static/wx/img/4.png',
                },{
                    url:'../../../../static/wx/img/5.jpg',
                }],
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
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
                show:false
            }
        },
        computed:{

        },
        mounted: function() {
            this.isEdit();
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            isEdit(){  // 判断是否为 编辑 或者 新增
                let status=this.$route.query.id;
                if (status==1){
                    this.show=true;
                }else {
                    this.show=false;
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {  //删除图片
                console.log(file, fileList);
            }
        }
    }
</script>
