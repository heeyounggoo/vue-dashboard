<template>
  <el-header>
    <div class="logo" @click="linkToHome">
      Dashboard
      <span class="round">v.1.0</span>
    </div>
    <el-dropdown trigger="click">
      <span class="userName">
        {{userName}}<i class="el-icon-setting" style="margin-right: 15px"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>사용자 정보</el-dropdown-item>
        <el-dropdown-item>F&Q</el-dropdown-item>
        <el-dropdown-item>Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import '@/style/Navigation.scss'

export default {
  name: 'navi',
  
  data() {
    return {
      userName: 'Goo heeyoung',
    }
  },

  methods: {
    linkToHome() {
      this.$router.push('/tableList')
    }
  },
}
</script>