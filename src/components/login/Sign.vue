<template>
  <div class="login-container sign">
    <div class="wrap">
      <div>
        <h2>회원가입</h2>
        <p>외국인, 법인,  만 19세 미만 개인은 가입이 불가합니다.</p>
      </div>
      <el-form ref="form" :model="form" :rules="rule" label-width="7rem" label-position="left">
        <el-form-item prop="userId" label="아아디">
          <el-input v-model="form.userId"></el-input>
        </el-form-item>
        <el-form-item prop="userEmail" label="이메일">
          <el-input v-model="form.userEmail" placeholder="이메일주소"></el-input>
        </el-form-item>
        <el-form-item prop="userPhone" label="연락처">
          <el-input v-model="form.userPhone" placeholder="'-'를 제외한 12자리를 입력해주세요"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="비밀번호">
          <el-input type="password" v-model="form.password" placeholder="영문/숫자/특수문자 조합 8~16자리"></el-input>
        </el-form-item>
        <el-form-item prop="password2" label="비밀번호 확인">
          <el-input type="password" v-model="form.password2" placeholder="영문/숫자/특수문자 조합 8~16자리"></el-input>
        </el-form-item>
        <el-button 
            type="primary" plain  
            @click="signIn" 
            :loading="signing">회원가입</el-button>
        <el-button 
            type="ifno" plain  
            @click="$router.push('/login')">로그인</el-button>    
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/style/Login.scss'
import { signIn } from '@/api/app'

export default {
  data() {
    const validatePass2 = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('비밀번호를 확인해주세요.'))
      } else if (value !== this.form.password) {
        callback(new Error('비밀번호가 일치하지 않습니다.'))
      } else {
        callback()
      }
    }
    return {
      signing: false,
      form: {
        userId: '',
        userEmail: '',
        userPhone: '',
        password: '',
        password2: '',
      },
      rule: {
        userId: [
          { required: true, message: '아이디를 입력하세요.', trigger: 'blur' },
          { required: true, pattern:/^[A-za-z0-9]/g, message: '영문이나 숫자를 이용하여 입력하세요.', trigger: 'blur' },
        ],
        userEmail: [
          { pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , message: '입력하신 이메일 주소로는 회원가입이 불가합니다.', trigger: 'blur' },
          { message: '이메일 주소를 입력하세요.', trigger: 'blur' },
        ],
        userPhone: [
          { pattern:/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g, message: '-를 제거한 핸드폰번호를 입력해주세요.', trigger: 'blur' },
          { message: '핸드폰 번호를 입력하세요.', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '비밀번호를 입력하세요.', trigger: 'blur' },
          { required: true, pattern:/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]|.*[0-9]).{6,24}$/, message: '영문, 숫자, 특수문자 포함 6~16자리로 입력하세요.', trigger: 'blur' },
        ],
        password2: [{required: true, validator: validatePass2, trigger: 'blur'}],
      },
    }
  },

  methods: {
    signIn() {
      // console.log('===== 회원가입 =====')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          // console.log('===== 밸류데이션 통과 ======')
          this.signing = true

          signIn({
            form: this.form
          })
            .then(res => {
              // console.log('===== res =====')
              // console.log(res)
              // console.log('===== res =====')
              if(res.data.ok) this.$router.push('/')
            })
            .catch(err => {
              console.log(err)
            })
            .finally(() => {
              this.signing = false
            })
        } else {
          // console.log('===== 밸류데이션 오류 ======')
        }
      })
    },
  },

}
</script>

<style>

</style>
