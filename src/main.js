// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/user'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

router.beforeEach((to, from, next) => {
  console.log('===== to =====')
  console.log(to)
  console.log('===== to =====')

  console.log('===== from =====')
  console.log(from)
  console.log('===== from =====')

  console.log(Cookies.get('token'))
  
  if(Cookies.get('token')) {
    if(to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if(to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
