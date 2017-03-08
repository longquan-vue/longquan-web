<style lang="less" scoped>
  @import "./style.less";
</style>

<template>
  <div class="head_upload" :style="style">
    <span class="label">
      头像（请尽量上传120*158的图片）<br/>
            请点击下面按钮上传</span>
    <div class="img">
      <div v-if="loading">
        <my-progress class="progress" type="circle" :percentage="loaded" :width="100"></my-progress>
      </div>
      <img :src="url" alt="头像">
    </div>
    <label v-if="name">
      上传头像
      <input
        type="file"
        :name="name"
        :id="name"
        :accept="accept"
        @change="headUpload">
    </label>
  </div>
</template>

<script type="text/babel">
  import MyProgress from '../progress/MyProgress'
  import {uploadFileApi} from '../../../api/file'
  export default {
    name: 'head-upload',
    props: {
      style: String,
      name: {
        type: String,
        default: 'headimgurl'
      },
      accept: {
        type: String,
        default: 'jpg,png,gif,pdf'
      },
      url: {
        type: String,
        default: require('../../../../static/image/headimg.png')
      }
    },
    components: {
      MyProgress
    },
    data () {
      return {
        loaded: 0,
        loading: false
      }
    },
    methods: {
      headUpload: async function (e) {
        this.loading = true
        this.loaded = 0
        const file = e.target.files[0]
        this.$emit('head-upload', window.URL.createObjectURL(file))
        const {url} = await uploadFileApi(file, this.progress)
        this.loading = false
        this.$emit('head-upload', url)
      },
      progress ({loaded, total}) {
        this.loaded = parseInt(loaded * 1000 / total) / 10
      }
    }
  }
</script>
