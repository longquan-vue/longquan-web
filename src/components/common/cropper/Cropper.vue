<style lang="less" scroped>
  @import "style.less";
</style>
<template>
  <div class="cropper" @keyup.esc="cancelCrop">
    <div class="cropper-left">
      <div>
        <input type="file"
               :name="name"
               :id="name"
               class="inputfile"
               @change="changeImage"
               :accept="accept"
        />
        <label :for="name" style="text-align: center">
          <span>{{btnText}}</span>
        </label>
      </div>
      <div>头像预览</div>
      <div>
        <img class="big-headimg" :src="cropImg">
        <div>大头像：100*100</div>
      </div>
      <div>
        <img class="little-headimg" :src="cropImg">
        <div>小头像：55*55</div>
      </div>
    </div>
    <div class="cropper-right">
      <div class="cropper-image">
        <vue-cropper
          class="raw-img"
          ref='cropper'
          :guides="false"
          :view-mode="2"
          drag-mode="crop"
          :min-container-width="250"
          :min-container-height="180"
          :src="src"
          :cropmove="moveEvent"
          :aspectRatio="1"
          :imgStyle="imgStyle"
        >
        </vue-cropper>
      </div>
      <span>仅支持jpg、gif、png格式，文件少于5M</span>
    </div>
  </div>
</template>
<script>
  import VueCropper from 'vue-cropperjs'
  import {uploadFileApi} from '../../../../src/api/file.js'
  export default{
    props: {
      imgStyle: { // 图片样式
        type: String,
        default () {
          return 'min-width: 600px;min-height: 300px; border:1px solid gray'
        }
      },
      accept: { // 限制的图片类型
        type: String,
        default () {
          return 'jpg,png,gif,pdf'
        }
      },
      btnText: { // 上传图片按钮的文本
        type: String,
        default () {
          return '上传图片'
        }
      },
      src: {
        type: String,
        default () {
          return require('./default.jpg')
        }
      },
    },
    components: {
      VueCropper,
    },
    name: 'cropper',
    data () {
      return {
        cropImg: require('./default.jpg'),
        name: 'uploadheadImage',
      }
    },
    mounted () {
      this.cropImg = this.src
      this.$refs.cropper.replace(this.src)
    },
    methods: {
      moveEvent () {
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      },
      change () {
        this.$refs.cropper.replace(this.cropImg)
      },
      // 本地图片加载到浏览器预览
      changeImage () {
        const proUrl = this.getFileUrl(this.name)
        this.$refs.cropper.replace(proUrl)
        this.cropImg = proUrl
      },
      // 将本地图片路径转成浏览器路径
      getFileUrl(sourceId) {
        var url
        if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
          url = document.getElementById(sourceId).value
        } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
          url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0))
        } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
          url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0))
        }
        return url
      },
      cancelCrop () {
        this.$refs.cropper.clear()
      },
      uploadImage () {
        this.$refs.cropper.getCroppedCanvas().toBlob(
          async(blob) => {
            const {url} = await uploadFileApi(blob)
            this.$emit('get-crop-url', url)
          })
      }
    }
  }
</script>
