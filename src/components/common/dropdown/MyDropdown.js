export default {
  functional: true,
  render (h, context) {
    return (
      <el-dropdown
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-dropdown>
    )
  },
  props: {
    type: {},
    trigger: {
      default: 'click'
    }
  }
}
