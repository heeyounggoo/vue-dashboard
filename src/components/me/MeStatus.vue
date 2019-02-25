<template>
  <div class="main status">
    <div class="top">
      <h2 class="tit">Status</h2>
      <p class="sub">개인정보를 수정 가능합니다. 자신의 개인정보를 수정해보세요.</p>
    </div>
    <el-form :model="status" label-width="100px" style="width: 50%">
      <el-form-item label="이름">
        <el-input v-model="status.name" readonly></el-input>
      </el-form-item>
      <el-form-item label="아이디">
        <el-input v-model="status.id" readonly></el-input>
      </el-form-item>
      <el-form-item label="비밀번호">
        <el-input v-model="status.pw" readonly></el-input>
      </el-form-item>
      <el-form-item label="이메일">
        <el-input v-model="status.email" readonly></el-input>
      </el-form-item>
    </el-form>

    <div class="btnBottom" style="text-align: right; width:50%;">
      <el-button type="primary" round @click="onModify">수정하기</el-button>
      <el-button round plain @click="onCancel">취소하기</el-button>
    </div>
  </div>
</template>

<script>
import '@/style/Main.scss'
import axios from 'axios'
import camelCase from 'camelcase-keys'

export default {
  data() {
    return {
      status: {},
      // no: this.$route.query.no,
    }
  }, 

  methods: {
    onModify() {},

    onCancel() {},
  },
}
</script>

<style>

</style>
