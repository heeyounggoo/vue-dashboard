<template>
  <div class="main detail">
    <div class="top">
      <h2 class="tit">{{form.title}}</h2>
      <p class="sub">게시판 상세페이지입니다. 작성한 정보를 확인 또는 수정하세요.</p>
    </div>

    <el-form :ref="form" :model="form" label-width="120px">
      <el-form-item label="제목">
        <el-input v-model="form.title" readonly></el-input>
      </el-form-item>
      <el-form-item label="구분">
        <el-input v-model="form.type" readonly></el-input>
      </el-form-item>
      <el-form-item label="체브박스">
        <el-input v-model="form.checkbox" readonly></el-input>
      </el-form-item>
      <el-form-item label="라디오 버튼">
        <el-input v-model="form.radio" readonly></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <el-input v-model="form.conts" readonly></el-input>
      </el-form-item>
    </el-form>

    <div class="btnBottom">
      <el-button type="primary" round @click="onUpdate">수정하기</el-button>
      <el-button type="primary" round @click="handleDelete">삭제하기</el-button>
      <el-button round @click="$router.push('/tableList')">목록으로</el-button>
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
      form: {},
      no: this.$route.query.no,
    }
  },

  created() {
    console.log('no = ', this.$route.query.no)

    axios.get(`http://localhost:3000/table/detail/${this.no}`)
      .then(res => {
        console.log('res = ', res.data.body)
        const data = camelCase(res.data.body)
        console.log('data = ', data)

        this.form = data
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {

      })
  },

  methods: {
    onUpdate() {
      this.$router.push({
        path: '/tableRegister',
        query: {no:this.no}
      })
    },

    handleDelete() {
      this.$confirm('게시물을 삭제하사겠습니까?', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        center: true,
        type: 'warning'
      })
        .then(() => {
          // this.$router.push('./tableList')
          this.onDelete()
          this.$message({
            type: 'info',
            message: '삭제되었습니다'
          })
        })
        .catch((err) => {
          this.$message({
            type: 'info',
            message: '취소되었습니다'
          })
        })
    },

    onDelete() {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/table/delete',
        data: {no: this.no}
      })
        .then(res => {
          console.log('res = ', res);
          if(res.data.ok) this.$router.push('/tableList')
        })
        .catch(err => {
          console.log(err)
          alert('에러가 발생하였습니다')
        })
        .finally(() => {
          
        })
    },
  },
}
</script>
