<template>
  <div class="login-container login">
    <div class="wrap">
      <h2>LOGIN</h2>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" auto-complete="on">
        <el-form-item prop="username">
          <el-input 
            v-model="loginForm.username" 
            name="userName"
            auto-complete="on" 
            type="text"
            placeholder="아이디를 입력해주세요"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input 
            v-model="loginForm.password" 
            auto-complete="on" 
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            @keyup.enter.native="handleLogin"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary" plain 
            :loading="loading" 
            @click.native.prevent="handleLogin">로그인</el-button>
        </el-form-item>
        <p class="signIn">ID: admin PW:admin</p>
        <div class="signIn">
          <p><router-link to="/sign">회원가입 하러가기</router-link></p>
          <p><router-link to="/">회원가입 없이 사용하기</router-link></p>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/style/Login.scss'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if(!value.length) {
        callback(new Error('아이디를 입력해주세요'))
      } else {
        callback()
      }
    }

    const validatePassword = (rule, value, callback) => {
      if(!value.length) {
        callback(new Error('비밀번호를 입력해주세요'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: '',
        password: '',
      },

      loginRules: {
        username: [{validator: validateUsername, trigger: 'blur'}],
        password: [{validator: validatePassword, trigger: 'blur'}],
      },
    }
  },

  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      
      },
      immediate: true
    },

    userId(id) {
      console.log('watch id = ', id)
      this.$router.push('/')
    }
  },

  computed: {
    ...mapState({
      userId: state => state.user.id,
      loading: state => state.user.loading
    })
  },

  methods: {
    handleLogin() {
      console.log('===== 로그인 =====')

      this.$refs.loginForm.validate(valid => {
        if(valid) {
          console.log('===== 벨류데이션 체크 =====')

          console.log(this.$store.state.user.loading)
          this.$store.state.user.loading = true
          console.log(this.$store.state.user.loading)

          this.Login(this.loginForm)
        }
      })
    },

    // linkToSign() {
    //   this.$router.push({path: '/sign'})
    // },

    ...mapActions([
      'Login',
    ]),
  }
}
</script>
