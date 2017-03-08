<style lang="less" scoped>
</style>
<script type="text/babel">
  //  import {FormItem} from 'element-ui'
  export default {
    name: 'my-radio-button',
//    components: {
//      ElFormItem: FormItem
//    },
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean,
      name: String
    },
    render (h) {
      return h('el-radio-button', {
        props: this,
        on: {
          input: (val) => this.$emit('input', this.name, val),
        },
      })
    }
  }
</script>


