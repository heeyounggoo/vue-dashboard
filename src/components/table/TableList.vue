<template>
  <div class="main list">
    <div class="top">
      <h2 class="tit">Table</h2>
      <p class="sub">게시판입니다. 등록, 수정, 삭제가 가능합니다.</p>
    </div>
    <el-form class="searchbar" :inline="true" style="float: right">
      <el-form-item>
        <el-select v-model="tableOption" placeholder="Select" popper-class="search">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input 
          class="input"
          v-model="search" 
          @keyup.enter.native="onList" 
          placeholder="검색어를 입력하세요"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="onList">검색</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column prop="tableNo" label="No" align="center" width="100"></el-table-column>
      <el-table-column prop="title" label="제목" align="left">
        <template slot-scope="scope">
          <span class="link" @click="onDetail(scope.row.tableNo)">{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="구분" align="center" width="150"></el-table-column>
      <el-table-column prop="regDt" label="등록일" align="center" width="250"></el-table-column>
    </el-table>

    <el-pagination layout="prev, pager, next"
    :page-size="pageSize"
    :total="total"
    :current-page.sync="currentPage"
    @current-change="onPageChange"></el-pagination>

    <div class="btnBottom">
      <el-button type="primary" round @click="onSubmit">등록하기</el-button>
    </div>
  </div>
</template>

<script>
import '@/style/Main.scss'
// import axios from 'axios'
import camelCase from 'camelcase-keys'
import Cookies from 'js-cookie'
import { noticeList } from '@/api/app'

export default {
  data() {
    return {
      tableData: [],
      pageSize: 10,
      total: 1,
      currentPage: 1,
      options: [{
        value: '10',
        label: '전체',
      }, {
        value: '20',
        label: '제목',
      }, {
        value: '30',
        label: '내용',
      }],
      search: '',
      tableOption: '10',
    }
  },

  mounted() {
    this.onList()
  },

  methods: {
    onList() {
      noticeList({
        search: this.search
      })
        .then(res => {
          const data = camelCase(res.data.body)
          // console.log('res = ', res)
          // console.log('data = ', data)
          // console.log(data.length)

          this.total = data.length

          let currentMaxLow = this.currentPage * this.pageSize
          let currentMinLow = currentMaxLow - this.pageSize

          this.tableData = data.slice(currentMinLow, currentMaxLow)
        })
        .catch(res => {

        })
        .finally(res => {

        })
    },

    onSubmit() {
      this.$router.push({name: 'TableRegister'})
    },

    onDetail(no) {
      // console.log('no = ', no)
      this.$router.push({
        name: 'TableDetail',
        query: {no:no}
      })
    },

    onPageChange(pageNo) {
      // this.currentPage = pageNo
      this.onList()
    },
  },

  beforeRouteEnter (to, from, next) {
    if(Cookies.get('token')) { //로그인 되어있는지 
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
  }
}
</script>