export default {
  name: 'my-time-picker',
  functional: true,
  render: function (h, context) {
    return (
      <el-time-picker {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my-button': true
        }
      }}>
        {context.children}
      </el-time-picker>
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
