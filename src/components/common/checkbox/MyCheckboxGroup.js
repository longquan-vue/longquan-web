import './style.less'
export default {
  name: 'my-checkbox-group',
  functional: true,
  render: function (h, context) {
    return (
      <el-checkbox-group {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my-checkbox-group': true
        }
      }}>
        {context.children}
      </el-checkbox-group>
    )
  },
  props: {},
}
