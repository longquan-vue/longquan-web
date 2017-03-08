export default {
  data: { // 显示的数据
    type: Array,
    default: function () {
      return []
    }
  },
  height: [String, Number], // table 的高度，默认高度为空，即自动高度，单位 px
  stripe: { // 是否为斑马纹 table
    type: Boolean,
    default: false
  },
  border: { // 是否带有纵向边框
    type: Boolean,
    default: false
  },
  fit: { // 列的宽度是否自撑开
    type: Boolean,
    default: true
  },
  rowClassName: Function, // 行的 className 的回调。
  rowKey: [Function, String], // 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的
  loading: Boolean,
}
