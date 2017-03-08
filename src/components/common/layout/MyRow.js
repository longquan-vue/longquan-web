export default {
  functional: true,
  render (h, context) {
    return (
      <el-row
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-row>
    )
  },
}
