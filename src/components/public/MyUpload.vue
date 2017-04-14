<template>
  <div>
    <el-upload
      :action="action"
      :http-request="upload"
      :on-success="success"
      :file-list="list"
      :list-type="type"
      :on-preview="preview"
      :on-remove="remove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="showPic" size="tiny">
      <img width="100%" :src="picUrl" alt="活动配图">
    </el-dialog>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        list: [],
        picUrl: '',
        showPic: false,
        first: true
      }
    },
    props: {
      filed: {
        type: String,
        default: 'files'
      },
      files: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default: 'picture-card'
      },
      edit: Boolean
    },
    computed: {
      ...mapGetters(['action']),
    },
    watch: {
      files(val){
        if (this.first && !this.edit) {
          val.forEach((v) => this.list.push({...v}))
        }
        this.first = false
      }
    },
    methods: {
      ...mapActions(['upload', 'setList', 'delFile']),
      success (data) {
        this.setList({key: this.filed, data})
        this.list = [...this.list, {...data}]
      },
      remove(file) {
        const idx = this.list.findIndex(({url}) => url == file.url)
        this.delFile([this.filed, idx])
        this.list.splice(idx, 1)
      },
      preview({url}) {
        this.picUrl = url;
        this.showPic = true;
      },
    },
  }
</script>
