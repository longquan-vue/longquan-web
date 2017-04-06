
const mine = (state) => state.mine;
const user = (state) => state.user;
const welfare = (state) => state.welfare;
const page = (state) => state.page;
const userList = (state) => state.userList;
const activityList = (state) => state.activityList;
const enterList = (state) => state.enterList;
const activityDetail = (state) => state.activityDetail;
const action = (state) => {
    let url = '/rest/file/upload';
    if (process.env.NODE_ENV == 'development') {
        url = `http://java.ichuangye.cn${url}?debug=weizidong&&appType=zhxt`;
    }else{

    }
    return url
};
const healthList = (state) => state.healthList;


export default {
    mine,
    user,
    welfare,
    page,
    userList,
    activityList,
    enterList,
    activityDetail,
    action,
    healthList
}
