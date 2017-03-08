import './style.less'
export default {
  name: 'my-radio-group',
  functional: true,
  render: function (h, context) {
    return (
      <el-radio-group {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my_radio_group': true
        }
      }}>
        {context.children}
      </el-radio-group>
    )
  },
  props: {
    value: [String, Number],
    size: String,
    name: String
  },
}
