const login = (state) => state.login;
const page = (state) => state.page;
const data = (state) => state.data;
const list = (state) => state.list;
const loading = (state) => state.loading;

const action = (state) => {
  let url = '/rest/file/upload';
  if (process.env.NODE_ENV == 'development') {
    url = `http://java.ichuangye.cn${url}?debug=weizidong&&appType=zhxt`;
  } else {

  }
  return url
};


export default {
  login,
  page,
  data,
  list,
  action,
  loading
}
