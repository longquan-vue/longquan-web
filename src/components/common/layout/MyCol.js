export default {
  functional: true,
  render (h, context) {
    return (
      <el-col
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-col>
    )
  },
  props: ['span', 'offset', 'push', 'pull', 'xs', 'sm', 'lg', 'md']
}
