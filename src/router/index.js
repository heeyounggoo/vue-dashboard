import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableRegister from '@/components/table/TableRegister.vue'
import TableList from '@/components/table/TableList.vue'
import TableDetail from '@/components/table/TableDetail.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/tableRegister',
    name: 'TableRegister',
    component: TableRegister
  },
  {
    path: '/tableList',
    name: 'TableList',
    component: TableList
  },
  {
    path: '/tableDetail',
    name: 'TableDetail',
    component: TableDetail
  },
]

export default new Router({
  routes
})

