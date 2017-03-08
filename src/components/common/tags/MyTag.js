export default {
  name: 'my-tag',
  functional: true,
  render: function (h, context) {
    return (
      <el-tag {...{
        ...context.data,
        props: context.props,
      }}>
        {context.children}
      </el-tag>
    )
  },
  props: {
    type: String, // 主题 'primary', 'gray', 'success', 'warning', 'danger'
    closable: Boolean, // 是否可关闭
    closeTransition: Boolean, // 是否禁用关闭时的渐变动画
    hit: Boolean, // 	是否有边框描边
  },
}
