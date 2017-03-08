import createLogger from 'vuex/dist/logger'

export default createLogger({
  collapsed: false, // 自动展开输出的 mutations
  transformer (state) {
    // 输出前对 state 进行转换
    // 比如说只返回一个 sub-tree
    return state
  },
  mutationTransformer (mutation) {
    // mutations 会格式化为 { type, payload } 输出
    // 我们可以按照自己的需求格式化成任何我们想要的结构
    return mutation
  }
})
