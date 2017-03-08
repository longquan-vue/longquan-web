export default {
  name: 'my-button-group',
  functional: true,
  render: function (h, context) {
    return (
      <el-button-group {...{...context.data, props: context.props}}>
        {context.children}
      </el-button-group>
    )
  },
}
