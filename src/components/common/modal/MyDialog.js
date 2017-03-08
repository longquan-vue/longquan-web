import './style.less'
export default {
  name: 'my-dialog',
  functional: true,
  render: function (h, context) {
    return (
      <el-dialog {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my_dialog': context.props.prop && !context.props.none
        }
      }}>
        {context.children}
      </el-dialog>
    )
  },
  props: {
    title: String, // Dialog 的标题
    size: { // Dialog 的大小 tiny/small/large/full
      type: String,
      default: 'small'
    },
    top: { // Dialog CSS 中的 top 值（仅在 size 不为 full 时有效）
      type: String,
      default: '15%'
    },
    modal: { // 是否需要遮罩层
      type: Boolean,
      default: true
    },
    lockScroll: { // 是否在 Dialog 出现时将 body 滚动锁定
      type: Boolean,
      default: true
    },
    customClass: String, // Dialog 的自定义类名
    closeOnClickModal: { // 是否可以通过点击 modal 关闭 Dialog
      type: Boolean,
      default: true
    },
    closeOnPressEscape: { // 是否可以通过按下 ESC 关闭 Dialog
      type: Boolean,
      default: true
    }
  },
}
