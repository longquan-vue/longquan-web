import './style.less'
export default {
  name: 'my-upload',
  functional: true,
  render: function (h, context) {
    return (
      <el-upload {...{
        ...context.data,
        props: context.props,
      }}>
        {context.children}
      </el-upload>
    )
  },
  props: {
    type: String,
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    onPreview: {
      type: Function,
      default: function () {
      }
    },
    onRemove: {
      type: Function,
      default: function () {
      }
    },
  },
}
