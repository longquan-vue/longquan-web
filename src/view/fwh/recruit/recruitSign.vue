<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./recruitSign.less";
</style>
<template>
    <div class="recruitSign" style="background-color: #F0F0F0;height: 100%;overflow: scroll;padding-top:1.6533333rem;">
        <appHead title="意向报名" style="background-color:#FFB036"></appHead>
        <div class="formBox">
            <div class="form-group" flex :class="{ 'form-group--error': $v.name.$error }">
                <label class="form__label"><span>*</span>姓名</label>
                <input box="1" class="form__input" name="name" placeholder="请输入您的名字" v-model.trim="name" @input="$v.name.$touch()">
            </div>
            <span class="form-group__message" v-if="!$v.name.required">姓名必填</span>
            <span class="form-group__message" v-if="!$v.name.minLength">名字至少 {{$v.name.$params.minLength.min}} 个字符.</span>

            <div class="form-group" flex>
                <label class="form__label"><span>*</span>性别</label>
                <input type="radio" name="sex" value="1" v-model="sex" class="mgr mgr-primary form__radio" /> <i class="form__i">男</i>
                <input type="radio" name="sex" value="2" v-model="sex" class="mgr mgr-primary form__radio" /> <i class="form__i">女</i>
            </div>

            <!--<p>sex is: {{ sex }}</p>-->

            <div class="form-group" flex :class="{ 'form-group--error': $v.age.$error }">
                <label class="form__label"><span>*</span>年龄</label>
                <input box="1" class="form__input" name="age" placeholder="请输入您的年龄" v-model.trim="age" @input="$v.age.$touch()">
            </div>
            <span class="form-group__message" v-if="!$v.age.required">年龄必填</span>
            <span class="form-group__message" v-if="!$v.age.between">年龄必须大于 {{$v.age.$params.between.min}} 小于 {{$v.age.$params.between.max}}.</span>


            <div class="form-group" flex>
                <label class="form__label"><span>*</span>婚姻</label>
                <input type="radio" name="merrige" value="1" v-model="merrige" class="mgr mgr-primary form__radio" /> <i class="form__i">未婚</i>
                <input type="radio" name="merrige" value="2" v-model="merrige" class="mgr mgr-primary form__radio" /> <i class="form__i">已婚</i>
            </div>
            <div class="form-group" flex :class="{ 'form-group--error': $v.address.$error }">
                <label class="form__label"><span>*</span>籍贯</label>
                <input box="1" class="form__input" name="address" placeholder="请输入您的籍贯" v-model.trim="address" @input="$v.address.$touch()">
            </div>
            <span class="form-group__message" v-if="!$v.address.required">籍贯必填</span>
            <span class="form-group__message" v-if="!$v.address.between">籍贯在{{$v.address.$params.minLength.min}}到{{$v.address.$params.maxLength.max}} 之间.</span>

            <div class="form-group" flex>
                <label class="form__label"><span>*</span>有无工作经验</label>
                <input type="radio" name="job" value="1" v-model="job" class="mgr mgr-primary form__radio" /> <i class="form__i">有</i>
                <input type="radio" name="job" value="2" v-model="job" class="mgr mgr-primary form__radio" /> <i class="form__i">无</i>
            </div>
        </div>
        <div class="submitBtn">
            <a @click="subMit()" class="baoming">提交</a>
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
    import { required, minLength, between ,maxLength} from 'vuelidate/lib/validators'
    export default{
        data(){
            return{
                value:'',
                name: '',
                age:'',
                address:'',
                sex:1,
                merrige:1,
                job:2
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(2)
            },
            age: {
                required,
                between: between(20, 30)
            },
            address: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(20)
            },
        },
        components:{
            appHead, XInput, XButton, Group, Cell ,XSwitch
        },
        computed: {...mapGetters(['login','list'])},
        methods:{
            ...mapActions(['getMineMsg','clear','isEnd','goto','entryRecruit']),
            ...filter,
            subMit(){
                console.log(this.$v);
                let data = {
                    name:this.name,
                    age:this.age,
                    address:this.address,
                    sex:this.sex,
                    merrige:this.merrige
                };
               if(this.$v.$invalid){
                  this.$v.$touch();
               }else {
                   this.entryRecruit(data);
               }
            }
        },
        created () {
            // this.getMineMsg();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
