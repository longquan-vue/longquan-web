export default {
  name: 'my-radio',
  functional: true,
  render: function (h, context) {
    return (
      <el-radio {...{
        ...context.data,
        props: context.props,
      }}>
        {context.children}
      </el-radio>
    )
  },
  props: {
    value: [String, Number],
    label: {
      type: [String, Number],
      required: true
    },
    disabled: Boolean,
    name: String
  },
}
