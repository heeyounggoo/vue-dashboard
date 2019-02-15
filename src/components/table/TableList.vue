<template>
  <el-main class="list">
    <el-table :data="tableData">
      <el-table-column prop="tableNo" label="No" align="center" width="70"></el-table-column>
      <el-table-column prop="title" label="제목" align="center">
        <template slot-scope="scope">
          <span class="link" @click="onDetail(scope.row.tableNo)">{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="구분" align="center" width="200"></el-table-column>
      <el-table-column prop="regDt" label="등록일" align="center" width="300"></el-table-column>
    </el-table>

    <div class="btnBottom">
      <el-button type="info" @click="onSubmit">등록</el-button>
    </div>
  </el-main>
</template>

<script>
import '@/style/Main.scss'
import axios from 'axios'
import camelCase from 'camelcase-keys'

export default {
  data() {
    return {
      tableData: [],
    }
  },

  created() {
    console.log('noticeList')
    axios.get('http://localhost:3000/table/list')
      .then(res => {
        const data = camelCase(res.data.body)
        this.tableData = data
        console.log('res = ', res)
        console.log('res = ', data)
      })
      .catch(res => {

      })
      .finally(res => {

      })
  },

  methods: {
    onSubmit() {
      this.$router.push('/tableRegister')
    },

    onDetail(no) {
      console.log('no = ', no)
      this.$router.push({
        path: '/tableDetail',
        query: {no:no}
      })
    },
  },
}
</script>