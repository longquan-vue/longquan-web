<style lang="less" scoped>
  @import "./style.less";
</style>

<template>
  <div class="file_upload">
    <my-button :type="type" :size="size" :plain="plain" :disabled="disabled" :icon="icon" :nativeType="nativeType" @click.native="show">{{title}}</my-button>
    <my-dialog title="上传文档" v-model="showDialog" size="small">
      <my-form :model="fileData" :rules="rules" ref="fileDataForm">
        <my-item label="文档类型：" prop="fileTypeId">
          <my-select :value="fileData.fileTypeId" placeholder="请选择文档类型" @input="setData({fileTypeId:$event})">
            <my-option v-for="type in fileTypes" :label="type.name" :value="type.code"></my-option>
          </my-select>
        </my-item>
        <my-item label="选择文档：" prop="file">
          <input
            type="file"
            :name="name"
            :id="name"
            :accept="accept"
            @change="checkFile">
        </my-item>
        <my-item>
          <my-progress show-text text-inside :stroke-width="18" :percentage="loaded"></my-progress>
        </my-item>
      </my-form>
      <div slot="footer" class="dialog-footer">
        <my-button type="primary" @click.native="submit" :loading="loading">{{loading?'上传中':'确定'}}</my-button>
        <my-button @click.native="cancel">取 消</my-button>
      </div>
    </my-dialog>
  </div>
</template>

<script type="text/babel">
  import MyButton from '../button/MyButton'
  import MyDialog from '../modal/MyDialog'
  import MyForm from '../form/MyForm'
  import MyItem from '../form/MyItem'
  import MyProgress from '../progress/MyProgress'
  import MySelect from '../select/MySelect'
  import MyOption from '../select/MyOption'
  import MyUpload from './MyUpload'
  import {uploadDocApi} from '../../../api/file'
  import {getDict} from '../../../store/actions/dict'
  import {DOC_TYPE} from '../../../store/getters/dict'
  export default {
    name: 'file-upload',
    props: {
      type: String, // 类型 primary,success,warning,danger,info,text
      size: String, // 尺寸 large,small,mini
      plain: Boolean, // 是否朴素按钮 true,false
      disabled: Boolean, // 禁用 true, false
      icon: String, // 图标，已有的图标库中的图标名
      nativeType: String, // 原生 type 属性 button,submit,reset
      title: { // 图标文字
        type: String,
        default: '上传'
      },
      name: {
        type: String,
        default: 'file'
      },
      accept: {
        type: String,
        default: 'jpg,png,gif,pdf'
      },
      group: {
        type: String,
        default: 'normal'
      },
      recordId: {
        type: String,
        default: ''
      }
    },
    components: {
      MyDialog,
      MyButton,
      MyForm,
      MyItem,
      MySelect,
      MyOption,
      MyUpload,
      MyProgress
    },
    data () {
      return {
        loaded: 0,
        loading: false,
        showDialog: false,
        fileTypes: null,
        fileData: {
          fileTypeId: '',
          fileTypeName: '',
          file: {},
          group: '',
          recordId: '',
        },
        rules: {}
      }
    },
    methods: {
      checkFile () {
        const files = document.getElementById(this.name).files
        this.setData({file: files[0]})
      },
      setData (value) {
        this.fileData = {
          ...this.fileData,
          ...value
        }
      },
      progress ({loaded, total}) {
        this.loaded = parseInt(loaded * 1000 / total) / 10
      },
      show () {
        this.showDialog = true
        this.fileData = {
          fileTypeId: '',
          fileTypeName: '',
          file: {},
          group: this.group,
          recordId: this.recordId,
        }
      },
      async submit () {
        this.loading = true
        const file = await uploadDocApi({...this.fileData, progress: this.progress})
        this.loading = false
        this.$emit('submit', file)
        this.cancel()
      },
      cancel () {
        if (this.loaded > 0 && this.loaded < 100) {
          return
        }
        this.file = {}
        this.showDialog = false
      },
      async init () {
        if (this.fileTypes) {
          return
        }
        const data = await getDict(this.$store, DOC_TYPE)
        this.fileTypes = data
      },
    },
    created () {
      this.init()
    },
  }
</script>
