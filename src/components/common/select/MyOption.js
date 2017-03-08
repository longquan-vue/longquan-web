export default {
  name: 'my-option',
  functional: true,
  render: function (h, context) {
    return (
      <el-option {...{...context.data, props: context.props}}>
        {context.children}
      </el-option>
    )
  },
  props: {
    value: { // 选项的值
      type: [Boolean, String, Number, Object],
      required: true
    },
    label: [String, Number], // 选项的标签，若不设置则默认与 value 相同
    disabled: { // 是否禁用该选项
      type: Boolean,
      default: false
    }
  },
}
