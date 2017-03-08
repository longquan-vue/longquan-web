<style lang="less" scoped>
  @import "style.less";
</style>

<template>
  <el-input class="my-search" :placeholder="placeholder" :value="value" @input="onInput" @keyup.enter.native="onSearch" :style="{width : width+'px'}">
    <el-button slot="append" icon="search" @click.native="onSearch"></el-button>
  </el-input>
</template>

<script type="text/babel">
  import debounce from 'lodash/debounce'
  import {mapGetters} from '../../../utils/vuex'
  import router from '../../../router'
  // getters
  import {queryGetter} from '../../../store/getters/route'
  export default {
    name: 'Search',
    props: {
      name: {
        type: String,
      },
      width: {
        type: String,
        default: '250'
      },
      placeholder: {
        type: String,
        default: '请输入...'
      },
      inputSearch: {
        type: Boolean,
        default: true
      },
      inputDelay: {
        type: Number,
        default: 800
      },
    },
    data () {
      return {
        value: '',
        key: ''
      }
    },
    computed: {
      ...mapGetters({
        query: queryGetter
      }),
    },
    methods: {
      async onSearch () {
        await router.replace({
          query: {
            ...this.query,
            [this.key]: this.value,
            page: 1
          }
        })
        this.$emit('search', {[this.key]: this.value, page: 1})
      },
      onInput (val) {
        this.value = val
        if (this.inputSearch) {
          debounce(this.onSearch, this.inputDelay)
        }
      }
    },
    created () {
      this.key = this.name || 'keyword'
      this.value = this.query[this.key]
//      this.$emit('search', this.value)
    },
  }
</script>
