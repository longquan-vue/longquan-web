<style lang="less" scoped>
  @import "SearchSelect.less";
</style>

<template>
  <div class="search_select el-input el-input-group" :class="{'none-button':!button}" :style="allStyle">
    <div class="el-input-group__prepend">
      <el-select
        v-model="select"
        :placeholder="placeholder"
        filterable
        remote
        :multiple="multiple"
        :remote-method="search"
        :loading="loading">
        <el-option v-for="item in list" :key="item.id" :label="item[labelKey]" :value="item[valueKey]"></el-option>
      </el-select>
    </div>
    <div v-if="!!button" class="el-input-group__append">
      <el-button @click.native="submit">
        <slot>{{button}}</slot>
      </el-button>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'search-select',
    props: {
      valueKey: {
        type: String,
        default: 'id'
      },
      labelKey: {
        type: String,
        default: 'name'
      },
      button: {
        type: [Boolean, String],
        default: '添加'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请输入...'
      },
      remoteMethod: {
        type: Function,
        default: () => {
          return []
        }
      },
      width: {
        type: String,
        default: '100%'
      },
      value: String,
      initValue: { // 初始化的对象
        type: Object,
      }
    },
    data () {
      return {
        list: [],
        select: null,
        loading: false
      }
    },
    computed: {
      allStyle () {
        return {
          ...this.style,
          width: this.width
        }
      }
    },
    watch: {
      select () {
        if (!this.button) {
          this.submit()
        }
      },
      async value (newVal, oldVal) {
        if (!oldVal && newVal) {
          await
          this.search(newVal)
          const [select] = this.list.filter(item => item[this.labelKey] === newVal
        )
          this.select = select ? select[this.valueKey] : null
        }
      }
    },
    methods: {
      submit () {
        if (this.select && this.multiple) {
          this.$emit('submit', this.select)
        } else if (this.select && !this.multiple) {
          this.$emit('submit', this.list.filter(item => this.select === item[this.valueKey])[0] || {}
        )
        }
      },
      async search (value) {
        if (!value) {
          return
        }
        this.loading = true
        const res = await this.remoteMethod(value)
        this.loading = false
        this.list = res.list || res
      }
    },
    created () {
      const initObject = this.initValue
      if (initObject && initObject[this.valueKey]) {
        this.list.push(initObject)
        this.select = initObject[this.valueKey]
      }
    },
  }
</script>
