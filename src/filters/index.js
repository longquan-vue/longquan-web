import moment from 'moment'
// 性别过滤器   0->未知,1->男,2->女
export const sexFilter = (sex) => ['未知', '男', '女'][sex] || '未知'
// 性别过滤器   0->未知,1->男,2->女
export const sex2Filter = ({sex}) => sexFilter(sex)
// 性别过滤器   0->未知,1->男,2->女
export const marriageFilter = (marriage) => ['未知', '已婚', '未婚'][marriage] || '未知'
export const marriage2Filter = ({marriage}) => marriageFilter(marriage)
// 日期格式化过滤器
export const dateFilter = (date, pattern = 'YYYY-MM-DD') => moment(date).format(pattern)
export const date2Filter = ({birthday}) => dateFilter(birthday)
export const date3Filter = ({birthday}) => dateFilter(birthday,'YYYY-MM-DD HH:mm')
export const diffFilter = (date,type) => moment().diff(date,type)
//筛选过滤器
export const searchFilter=(value,data)=>value.indexOf(data)>-1?value:null

// 认证状态过滤器   0->未认证,1->已认证
export const auditFilter = ({audit}) => ['未认证','认证中', '已认证','认证失败' ][audit] || '未知'