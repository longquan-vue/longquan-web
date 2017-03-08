export default {
  functional: true,
  render (h, context) {
    return (
      <el-dropdown-item
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-dropdown-item>
    )
  },
}
