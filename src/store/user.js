import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const user = {
  state: {
    id: '',
    loading: false
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },

    SET_LOGIN: (state, loading) => {
      state.loading = false
    },
  },

  actions: {
    //비동기 로직
    Login({commit}, userInfo) {
      axios.post('http://localhost:3000/login', {
        data: userInfo
      })
        .then(res => {
          console.log('==== res ====')
          console.log(res)
          console.log('==== res ====')

          commit('SET_ID', res.data.body.LOGIN_ID)
          Cookies.set('token', res.data.body.LOGIN_ID, {expires:1})
        })
        .catch(err => {
          alert('로그인 정보가 일치하지 않습니다.')
        })
        .finally(() => {
          commit('SET_LOGIN', false)
        })
    },
  }
}

export default new Vuex.Store({
  modules: {
    user
  }
})