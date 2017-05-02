<style lang="less" scoped>
  .avatar {
    border-radius: 6px;
  }

  .avatar_box {
    display: inline-block;
    line-height: normal;
  }

  .avatar-uploader {
    display: inline-block;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    height: 100%;
  }

  .avatar-uploader:hover {
    border-color: #20a0ff;
  }
</style>
<template>
  <div class="avatar_box" :style="{width:width*1+2+'px',height:height*1+2+'px'}">
    <el-upload
      class="avatar-uploader"
      :action="action"
      :show-file-list="false"
      :http-request="upload"
      :on-success="successFun">
      <img v-if="pic" :src="pic" class="avatar" :style="{width:width+'px',height:height+'px'}">
      <i v-else class="el-icon-plus" :style="{width:width+'px',height:height+'px',lineHeight:height+'px'}"/>
    </el-upload>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        pic: '',
      }
    },
    props: {
      url: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '240'
      },
      height: {
        type: String,
        default: '240'
      },
      filed: {
        type: String,
        default: 'picUrl'
      },
      success: {
        type: Function,
      }
    },
    computed: {
      ...mapGetters(['action']),
    },
    watch: {
      url(val){
        this.pic = val || this.pic
      }
    },
    methods: {
      ...mapActions(['upload', 'delPic', 'setData']),
      successFun ({url}) {
        this.delPic(this.pic);
        this.pic = url
        this.success ? this.success(url) : this.setData({[this.filed]: url});
      },
    },
    created () {
      this.pic = this.url || this.pic
    },
  }
</script>
