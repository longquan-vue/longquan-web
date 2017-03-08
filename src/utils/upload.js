import {upload} from '../api/file'
export const uploadUtil = function (store, file) {
  console.log(store)
  console.log(file)
  try {
    if (file.size > 2097152) {
      alert('上传的图片不能超过2m！')
      return
    }
    const formData = new FormData()
    formData.append('file', file)
    const fileSrc = upload(formData)
    return fileSrc
  } catch (res) {
    alert('图片上传失败')
  }
}
