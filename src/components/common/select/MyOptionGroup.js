export default {
  name: 'my-option',
  functional: true,
  render: function (h, context) {
    return (
      <el-option-group {...{...context.data, props: context.props}}>
        {context.children}
      </el-option-group>
    )
  },
  props: {
    value: {
      required: true
    },
    label: [String, Number],
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
}
