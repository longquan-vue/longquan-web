export default {
  name: 'my-tab-pane',
  functional: true,
  render: function (h, context) {
    return (
      <el-tab-pane {...{
        ...context.data,
        props: context.props,
      }}>
        {context.children}
      </el-tab-pane>
    )
  },
  props: {
    label: String, // 选项卡标题
    name: String // 与选项卡 activeName 对应的标识符，表示选项卡别名
  },
}
