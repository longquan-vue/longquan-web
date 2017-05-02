// import Delta from 'quill-delta'
// import Emitter from 'quill/core/emitter'
// import {fileApi} from '../api/fileApi'
const login = (state) => state.login;
const page = (state) => state.page;
const data = (state) => state.data;
const list = (state) => state.list;
const loading = (state) => state.loading;
const setting = (state) => state.setting;
const query = (state) => state.route.query;
const params = (state) => state.route.params;
const path = (state) => state.route.path;
const sub = (state) => state.setting && state.setting.sub ? JSON.parse(state.setting.sub) : {};

const action = (state) => {
  let url = '/rest/file/upload';
  if (process.env.NODE_ENV == 'development') {
    url = `http://java.ichuangye.cn${url}?debug=weizidong&&appType=zhxt`;
  } else {

  }
  return url
};
const articleType = (state) => state.setting && JSON.parse(state.setting.articleType || '{}');
const editorOption = (state) => ({
  placeholder: '请输入...',
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        // [{'header': 1}, {'header': 2}],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        // [{'script': 'sub'}, {'script': 'super'}],
        [{'indent': '-1'}, {'indent': '+1'}],
        // [{'direction': 'rtl'}],
        [{'size': ['small', false, 'large', 'huge']}],
        // [{'header': [1, 2, 3, 4, 5, 6, false]}],
        [{'color': []}, {'background': []}],
        // [{'font': []}],
        [{'align': []}],
        ['clean'],
        ['link', 'image', 'video'],
      ],
      // handlers: {
      //   'image': function () {
      //     let fileInput = this.container.querySelector('input.ql-image[type=file]');
      //     if (fileInput == null) {
      //       fileInput = document.createElement('input');
      //       fileInput.setAttribute('type', 'file');
      //       fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      //       fileInput.classList.add('ql-image');
      //       fileInput.addEventListener('change', () => {
      //         if (fileInput.files != null && fileInput.files[0] != null) {
      //           fileApi(fileInput.files[0]).then(({url}) => {
      //             let range = this.quill.getSelection(true);
      //             this.quill.updateContents(new Delta()
      //                 .retain(range.index)
      //                 .delete(range.length)
      //                 .insert({image: url})
      //               , Emitter.sources.USER);
      //             fileInput.value = "";
      //           })
      //         }
      //       });
      //       this.container.appendChild(fileInput);
      //     }
      //     fileInput.click();
      //   }
      // }
    },
    imageResize: {displaySize: true},
  },
})
const editorOption2 = (state) => ({theme: 'bubble', placeholder: '请输入...', modules: {toolbar: [['bold', 'italic', 'underline', 'strike'], [{'list': 'ordered'}, {'list': 'bullet'}],]}})
export default {
  login,
  page,
  data,
  list,
  action,
  loading,
  setting,
  sub,
  query,
  params,
  articleType,
  editorOption,
  editorOption2,
  path
}
