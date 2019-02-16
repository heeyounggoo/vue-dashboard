import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/helloWorld',
    name: 'HelloWorld',
    hidden: true, //layout을 보이지 않게 한다, 자식만 보이게 한다.
    children: [{
      path: '/',
      component: () => import('@/components/HelloWorld')
    }]
  },
  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'lsit',
        name: 'TableList',
        component: () => import('@/components/table/TableList.vue')
      },
      {
        path: 'register',
        name: 'TableRegister',
        component: () => import('@/components/table/TableRegister.vue')
      },
      {
        path: 'detail',
        name: 'TableDetail',
        component: () => import('@/components/table/TableDetail.vue')
      },
    ]
  },
]

export default new Router({
  routes
})

