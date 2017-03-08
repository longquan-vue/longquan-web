export default [
  {path: '/user', component: require('../views/user/list/index.vue')},
  {path: '/user/:id', component: require('../views/user/edit/index.vue'), name: 'user_edit'},
]
