import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout.vue'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    component: () => import('@/components/login/index.vue')
  },
  {
    path: '/sign',
    component: () => import('@/components/login/Sign.vue')
  },
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
        path: 'list',
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
  {
    path: '/popup',
    component: Layout,
    children: [
      {
        path: 'register',
        name: 'PopupRegister',
        component: () => import('@/components/popup/PopupRegister.vue')
      },
      {
        path: 'modal',
        name: 'PopupModal',
        component: () => import('@/components/popup/PopupModal.vue')
      },
    ]
  },
  {
    path: '/me',
    component: Layout,
    children: [
      {
        path: '/status',
        name: 'MeStatus',
        component: () => import('@/components/me/MeStatus.vue')
      },
    ]
  },
]

export default new Router({
  routes
})

