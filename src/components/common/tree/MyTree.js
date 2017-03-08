import './MyTree.less'

export default {
  functional: true,
  render (h, context) {
    return (
      <el-tree
        class="my-tree"
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-tree>
    )
  },
}
