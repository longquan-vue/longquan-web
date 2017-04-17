import moment from 'moment'
// 性别过滤器   0->未知,1->男,2->女
export const sexFilter = (sex) => ['未知', '男', '女'][sex] || '未知'
export const freezeFilter = ({deleted}) => ['否', '是'][deleted] || '否'
export const signFilter = ({status}) => ['否', '是'][status] || '否'
// 性别过滤器   0->未知,1->男,2->女
export const sex2Filter = ({sex}) => sexFilter(sex)
// 性别过滤器   0->未知,1->男,2->女
export const marriageFilter = (marriage) => ['未知', '已婚', '未婚'][marriage] || '未知'
export const marriage2Filter = ({marriage}) => marriageFilter(marriage)
// 日期格式化过滤器
export const dateFilter = (date, pattern = 'YYYY-MM-DD') => date ? moment(date).format(pattern) : '无'
export const dateFilter2 = (date, pattern = 'YYYY-M-DD') => date ? moment(date).format(pattern) : '无'
export const date2Filter = ({birthday}) => dateFilter(birthday)
export const date3Filter = (birthday) => dateFilter(birthday, 'YYYY-MM-DD HH:mm')

export const date4Filter = ({start, end}) => dateFilter(start, 'YYYY-MM-DD HH:mm') + '--' + dateFilter(end, 'YYYY-MM-DD HH:mm')
export const date4Filter2 = ({start, end}) => dateFilter(start, 'HH:mm') + '--' + dateFilter(end, 'HH:mm')
export const date5Filter = ({entryStart, entryEnd}) => dateFilter(entryStart, 'YYYY-MM-DD HH:mm') + '--' + dateFilter(entryEnd, 'YYYY-MM-DD HH:mm')
export const diffFilter = (date, type) => moment().diff(date, type)
export const date6Filter = (time) => dateFilter(time, 'MM-DD HH:mm');
export const date7Filter = (time) => dateFilter(time, 'YYYY年MM月');
export const date8Filter = ({recording}) => dateFilter(recording, 'YYYY-MM-DD HH:mm')
export const ageFilter = (age) => age ? moment().subtract(age - 0, 'years').format('x') - 0 : null;
//是否结束、开始过滤器
export const isEnd = (endTime) => {
  return new Date().getTime() > endTime;
};
//单人，双人，多人项目
export const itemFilter = (item) => ['多人项目', '单人项目', '双人项目', '多人项目'][item] || '多人项目';
export const spotType = ({type}) => ['多人项目', '单人项目', '双人项目', '多人项目'][type] || '多人项目';
export const entryType = ({entry}) => ['所有用户可报名', '认证用户可报名'][entry]|| '所有用户可报名';
export const stateType = ({status}) => ['未开始', '进行中','暂停','已结束'][status]|| '未开始';

//筛选过滤器
export const searchFilter = (value, data) => value.indexOf(data) > -1 ? value : null


// 认证状态过滤器   0->未认证,1->已认证
export const auditFilter = ({audit}) => ['未认证', '认证中', '已认证', '认证失败'][audit] || '未知'
export const userFilter = ({audit}) => ['普通用户', '普通用户', '职工认证用户'][audit] || '普通用户'
export const group = (list, field = 'recording', filter = date7Filter) => {
  const g = {};
  list.map((item) => g[filter(item[field])] ? g[filter(item[field])].push(item) : g[filter(item[field])] = [item]);
  return g;
};

export default {
  sexFilter,
  sex2Filter,
  marriageFilter,
  marriage2Filter,
  dateFilter,
  dateFilter2,
  date2Filter,
  date3Filter,
  date4Filter,
  date4Filter2,
  date5Filter,
  date6Filter,
  date7Filter,
  date8Filter,
  diffFilter,
  searchFilter,
  auditFilter,
  group,
  isEnd,
  ageFilter,
  freezeFilter,
  itemFilter,
  spotType,
  entryType,
  stateType,
  userFilter,
  signFilter
}

