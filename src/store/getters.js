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
const editorOption = (state) => ({})
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
    path
}
