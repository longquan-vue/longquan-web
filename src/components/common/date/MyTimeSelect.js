export default {
  name: 'my-time-select',
  functional: true,
  render: function (h, context) {
    return (
      <el-time-select {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my-button': true
        }
      }}>
        {context.children}
      </el-time-select>
    )
  },
  props: {
    format: String,
    readonly: Boolean,
    placeholder: String,
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    haveTrigger: {},
    pickerOptions: {}
  },
}
