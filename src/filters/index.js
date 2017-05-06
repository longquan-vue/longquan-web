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

export const date4Filter = ({start, end}) => dateFilter(start, 'YYYY-MM-DD HH:mm') + ' 至 ' + dateFilter(end, 'YYYY-MM-DD HH:mm')
export const date4Filter2 = ({start, end}) => dateFilter(start, 'HH:mm') + ' 至 ' + dateFilter(end, 'HH:mm')
export const date5Filter = ({entryStart, entryEnd}) => dateFilter(entryStart, 'YYYY-MM-DD HH:mm') + ' 至 ' + dateFilter(entryEnd, 'YYYY-MM-DD HH:mm')
export const diffFilter = (date, type) => moment().diff(date, type)
export const date6Filter = (time) => dateFilter(time, 'MM-DD HH:mm');
export const MMddFilter = (time) => dateFilter(time, 'MM-DD');
export const date7Filter = (time) => dateFilter(time, 'YYYY年MM月');
export const HHmmFilter = (date) => dateFilter(date, 'HH:mm')
export const date8Filter = ({recording}) => dateFilter(recording, 'YYYY-MM-DD HH:mm')
export const ageFilter = (age) => age ? moment().subtract(age - 0, 'years').format('x') - 0 : null;

//是否结束、开始过滤器
export const isEnd = (endTime) => new Date().getTime() > endTime;
export const isStart = (startTime) => new Date().getTime() < startTime;
//单人，双人，多人项目
export const itemFilter = (item) => ['多人项目', '单人项目', '双人项目', '多人项目'][item] || '多人项目';
export const spotType = ({type}) => ['多人项目', '单人项目', '双人项目', '多人项目'][type] || '多人项目';
export const entryType = ({entry}) => ['所有用户可报名', '认证用户可报名'][entry] || '所有用户可报名';
export const stateType = ({status}) => ['未开始', '进行中', '暂停', '已结束'][status] || '未开始';
export const typeFilter = (type, idx) => type ? type[idx] : '无'
export const type2Filter = (type, idx) => type && type[idx] && type[idx].name ? type[idx].name : '无'
//筛选过滤器
export const searchFilter = (value, data) => value.indexOf(data) > -1 ? value : null
//限制字数
export const limitFilter = (str = '', l = 0) => str.length > l ? str.substr(0, l) + '...' : str;
//过滤文字
export const strFilter = (str = '') => str.replace(/<[^>]+>/g, '');
//过滤文字
export const str2Filter = (str = '',str2='') => str.replace(new RegExp(str2,'g'),`<span style="color: #bc0000">${str2}</span>`)
//url补充矫正
export const urlFilter = (url = '') => url.startsWith('http://')?url:'http://'+url;

// 认证状态过滤器   0->未认证,1->已认证
export const auditFilter = ({audit}) => ['未认证', '认证中', '已认证', '认证失败'][audit] || '未知'
export const audit2Filter = (audit) => ['未审核', '审核中', '审核成功', '审核失败'][audit] || '未审核'
export const userFilter = ({audit}) => ['普通用户', '普通用户', '职工认证用户'][audit] || '普通用户'
export const group = (list, field = 'recording', formate = date7Filter, filter = (v) => v) => {
  const g = {};
  list.map((item) => filter(item) ? g[formate(item[field])] ? g[formate(item[field])].push(item) : g[formate(item[field])] = [item] : '');
  return g;
};

// 报名列表过滤
export const groupList = (list = [], {flagFn = () => false, field = 'start', keys = ['start', 'end']}) => {
  const g = [];
  list.map((item, idx) => {
    if (idx > 0 && item[field] == g[g.length - 1][field]) {
      g[g.length - 1].list.push(item);
      g[g.length - 1].num += 1;
      g[g.length - 1].flag = flagFn && flagFn(item);
    } else {
      g.push({num: 1, flag: flagFn && flagFn(item), list: [item]});
      keys.map((key) => g[g.length - 1][key] = item[key]);
    }
  });
  return g;
};
export const groupMap = (list = [], {flagFn = () => false, filed = 'start', keys = ['start', 'end'], group = []}) => {
  const m = {};
  group.forEach((g, idx) => m[moment(g).format('HH:mm')] = {idx, num: 1, flag: false, list: []});
  list.map((item) => {
    m[moment(item[filed]).format('HH:mm')].list.push(item);
    m[moment(item[filed]).format('HH:mm')].num += 1;
    m[moment(item[filed]).format('HH:mm')].flag = flagFn && flagFn(item);
    keys.map((key) => m[moment(item[filed]).format('HH:mm')][key] = item[key]);
  });
  return m
};
//ABCDE过滤器
export const words = (val) => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'][val] || 'A';

export const numFilter = (num) => ['', '十', '二十', '三十', '四十', '五十', '六十', '七十', '八十', '九十'][(num - num % 10) / 10] + ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'][num % 10]
export const syncFilter = ({sync}) => sync ? JSON.parse(sync).map(s => ['网站', '服务号'][s]).join('，') : '无'
export const encode = (str = '') => (new Buffer(str, 'utf8')).toString('base64');
export const decode = (str = '') => (new Buffer(str, 'base64').toString('utf8'));
export const filesFilter = (files = []) => files.map(({name}) => name).join('，')
export const filesNumFilter = (files = []) => files.reduce((p, {num = 0}) => p + num, 0)


export default {
  str2Filter,
  urlFilter,
  filesNumFilter,
  strFilter,
  type2Filter,
  filesFilter,
  encode,
  decode,
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
  isStart,
  ageFilter,
  freezeFilter,
  itemFilter,
  spotType,
  entryType,
  stateType,
  userFilter,
  signFilter,
  HHmmFilter,
  MMddFilter,
  groupList,
  numFilter,
  syncFilter,
  groupMap,
  words,
  typeFilter,
  limitFilter,
  audit2Filter

}

