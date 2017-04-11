<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./recruitSign.less";
</style>
<template>
    <div class="recruitSign" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
        <div class="formBox">
            <div class="form-group" flex>
                <label class="form__label"><span>*</span>姓名</label>
                <input class="form__input" name="name" placeholder="请输入您的名字">
            </div>
            <div class="form-group" flex>
                <label class="form__label"><span>*</span>性别</label>
                
            </div>
            <div class="form-group" flex>
                <label class="form__label"><span>*</span>姓名</label>
                <input class="form__input" name="name" placeholder="请输入您的名字">
            </div>
            <div class="form-group" flex>
                <label class="form__label"><span>*</span>姓名</label>
                <input class="form__input" name="name" placeholder="请输入您的名字">
            </div>
            <div class="form-group" flex>
                <label class="form__label"><span>*</span>姓名</label>
                <input class="form__input" name="name" placeholder="请输入您的名字">
            </div>
        </div>
        <div class="submitBtn">
            <a @click="submitForm('ruleForm')" class="baoming">提交</a>
            <p style="font-size:0.32rem;color:#999999;text-align: center;">提示：请认真填写每项信息，方便招聘人员了解你！</p>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import { XInput, Group, XButton, Cell ,XSwitch} from 'vux'
    export default{
        data(){
            return{
                ruleForm: {
                    name: '',
                    sex: '',
                    phone: '',
                    address: '',
                    age:'',
                    marriage:'',
                    hasjob:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    marriage: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    address: [
                        { required: true, message: '请填写籍贯', trigger: 'change' }
                    ],
                    age: [
                        { required: true, message: '请填写年龄', trigger: 'change' }
                    ],
                    hasjob: [
                        { required: true, message: '请选择是否有工作经验', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请填写手机号码', trigger: 'change' }
                    ]
                },
            }
        },
        components:{
            appHead, XInput, XButton, Group, Cell ,XSwitch
        },
        computed: {...mapGetters(['login','list'])},
        methods:{
            ...mapActions(['getMineMsg','clear','isEnd','goto']),
            ...filter,
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
        },
        created () {
            // this.getMineMsg();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
