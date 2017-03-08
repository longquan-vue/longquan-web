import "./style.less"
import router from '../../../router'
export default {
  name: 'my-pagination',
  functional: true,
  render: function (h, context) {
    const {page} = router.history.current.query
    const currentPage = parseInt(page || 1)
    if (!page) {
      router.replace({
        query: {
          ...router.history.current.query,
          page: currentPage
        }
      })
    }
    return (
      <el-pagination {...{
        ...context.data,
        props: {
          ...context.props,
          currentPage
        },
        class: {
          ...context.data.class,
          'my-pagination': true
        },
        on: {
          'current-change': async(page) => {
            await router.replace({
              query: {
                ...router.history.current.query,
                page
              }
            })
            context.data.on.currentchange({page})
          }
        }
      }}>
        {context.children}
      </el-pagination>
    )
  },
  props: {
    small: Boolean, // 是否使用小型分页样式
    pageSize: { // 每页显示条目个数
      type: Number,
      default: 10
    },
    total: { // 总条目数
      type: Number,
      default: 0
    },
    layout: { // 组件布局，子组件名用逗号分隔。 sizes, prev, pager, next, jumper, ->, total
      type: String,
      default: 'prev, pager, next, jumper, ->, total'
    },
    pageSizes: { // 每页显示个数选择器的选项设置
      type: Array,
      default () {
        return [10, 20, 30, 40, 50, 100]
      }
    }
  },
}
