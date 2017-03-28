<style lang="less">
    @import "../../../static/normal";
    @import "./centeredit";
</style>
<template>
   <div class="centeredit">
       <form>
           <div class="centereditHead">
               <el-upload
                       class="avatar-uploader"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :show-file-list="false"
                       :on-success="handleAvatarScucess"
                       :before-upload="beforeAvatarUpload">
                   <img v-if="imageUrl" :src="imageUrl" class="avatar">
                   <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
           </div>
           <div class="formDiv">
               <p>基本资料</p>
               <ul>
                   <li>
                       <div>
                           昵称
                       </div>
                       <div box="1">
                           <input>
                       </div>
                   </li>
               </ul>
           </div>
       </form>
   </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    export default{
        data(){
            return{
                imageUrl: ''
            }
        },
        components:{

        },
        computed: {

        },
        methods:{
            handleAvatarScucess(res, file) {
                // this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                console.log(file);
                this.imageUrl = URL.createObjectURL(file);
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    console.log('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    console.log('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt2M;
            }
        },
        created () {

        }
    }
</script>
