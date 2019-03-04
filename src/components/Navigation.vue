<template>
  <el-header>
    <div class="logo" @click="linkToHome">
      Dashboard
      <span class="round">v.1.0</span>
    </div>
    <el-dropdown trigger="click">
      <!-- <span class="userName">
        {{userName}}<i class="el-icon-setting" style="margin-right: 15px"></i>
      </span> -->
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>사용자 정보</el-dropdown-item>
        <el-dropdown-item v-if="!isLogin" @click.native="$router.push('/login')">Login</el-dropdown-item>
        <el-dropdown-item v-else @click.native="handleLogout">Logout</el-dropdown-item>
        <el-dropdown-item v-if="!isLogin" @click.native="$router.push('/sign')">Join</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import '@/style/Navigation.scss'
import Cookies from 'js-cookie'

export default {
  name: 'navi',
  
  data() {
    return {
      userName: 'Goo heeyoung',
      isLogin: Cookies.get('token')
    }
  },

  methods: {

    linkToHome() {
      this.$router.push({path: '/'})
    }, 

    handleLogout() {
      // console.log(true)
      Cookies.remove('token')
      location.reload()
    },
  },
}
</script>