export default {
  name: 'my-tabs',
  functional: true,
  render: function (h, context) {
    return (
      <el-tabs {...{
        ...context.data,
        props: context.props,
      }}>
        {context.children}
      </el-tabs>
    )
  },
  props: {
    type: String, // 风格类型 card, border-card
    activeName: String, // 选中选项卡的 name
    closable: Boolean, // 标签是否可关闭
  },
}
