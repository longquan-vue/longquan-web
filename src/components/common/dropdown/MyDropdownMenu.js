export default {
  functional: true,
  render (h, context) {
    return (
      <el-dropdown-menu
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-dropdown-menu>
    )
  },
}
