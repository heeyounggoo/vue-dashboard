<template>
  <div class="main register">
    <div v-if="!modifyYn" class="top">
      <h2 class="tit">Register</h2>
      <p class="sub">게시판 등록페이지입니다. 원하는 정보를 입력해주세요.</p>
    </div>
    <div v-else class="top">
      <h2 class="tit">{{form.title}}</h2>
      <p class="sub">게시판 수정페이지입니다. 원하는 정보로 수정하세요.</p>
    </div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="제목">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="구분">
        <el-select v-model="form.type" placeholder="선택해주세요" popper-class="register">
          <el-option label="A type" value="A"></el-option>
          <el-option label="B type" value="B"></el-option>
          <el-option label="C type" value="C"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="체크박스">
        <el-checkbox-group v-model="form.checkbox">
          <el-checkbox label="A checkbox" ></el-checkbox>
          <el-checkbox label="B checkbox"></el-checkbox>
          <el-checkbox label="C checkbox"></el-checkbox>
          <el-checkbox label="D checkbox"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="라디오 버튼">
        <el-radio-group v-model="form.radio">
          <el-radio label="A"></el-radio>
          <el-radio label="B"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="내용">
        <el-input type="textarea" v-model="form.conts"></el-input>
      </el-form-item>
      <el-form-item label="이미지등록">
        <el-upload 
          class="upload-demo"
          action=""
          name="file"
          :multiple="false"
          :on-remove="onImgRemove"
          :on-change="onImgChange"
          :auto-upload="false"
          :limit="1"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="info">파일업로드</el-button>
        </el-upload>
      </el-form-item>
    </el-form>

    <div class="btnBottom">
      <el-button type="primary" round v-if="!modifyYn" @click="onSubmit">등록하기</el-button>
      <el-button type="primary" round v-else @click="onModify">수정하기</el-button>
      <el-button round plain @click="onCancel">취소하기</el-button>
    </div>
  </div>
</template>

<script>
import '@/style/Main.scss'
import axios from 'axios'
import camelCase from 'camelcase-keys'
import { noticeRegister, noticeDetail, noticeModify } from '@/api/app'

export default {
  data() {
    return {
      form: {
        title: '',
        type: '',
        checkbox: [],
        radio: '',
        conts: ''
      },
      no: this.$route.query.no,
      modifyYn : false,
      fileList: [],
      imgFile: '',
    }
  },

  created() {
    if(this.no) {
      this.modifyYn = true

      noticeDetail(this.no)
        .then(res => {
          // console.log('res = ', res)
          const data = camelCase(res.data.body)
          
          this.form.title = data.title
          this.form.type = data.type
          this.form.checkbox = data.checkbox
          this.form.radio = data.radio
          this.form.conts = data.conts

          if(data.phyImgName) {
            this.fileList = [{
              name: data.oriImgName,
              url: `http://localhost:3000/images/${data.phyImgName}`
            }]
          }

          this.form.phyImgName = data.phyImgName
          this.form.oriImgName = data.oriImgName

          // console.log(data.checkbox)

          if(data.checkbox !== '') {
            this.form.checkbox = data.checkbox.split(',')
            // console.log(this.form.checkbox)
          }
        })
        .catch(err => {

        })
        .finally(_ => {

        })
    }
  },

  methods: {
    onSubmit() {
      // console.log(this.form)
      // console.log('file = ', this.imgFile)

      const formData = new FormData()

      formData.append('form', JSON.stringify(this.form))
      if(this.imgFile) {
        formData.append('image', this.imgFile.raw)
      }

      noticeRegister(formData)
        .then(res => {
          // console.log('res = ', res);
          if(res.data.ok) this.$router.push({name: 'TableList'})
        })
        .catch(err => {
          console.log(err)
          alert('에러가 발생하였습니다')
        })
        .finally(() => {
          
        })
    },

    onModify() {
      const formData = new FormData()

      formData.append('form', JSON.stringify(this.form))
      formData.append('no', this.no)

      if(this.imgFile) {
        formData.append('image', this.imgFile.raw)
      }


      noticeModify(formData)
       .then(res => {
        //  console.log('res = ', res)
         if(res.data.ok) this.$router.push({
           name: 'TableDetail',
           query: {no: this.no}
         })
       })
       .catch(err => {
         console.log(err)
         alert('에러가 발생했습니다')
       })
       .finally(() => {

       })
    },

    onCancel() {
      this.$confirm('등록을 취소하시겠습니까?', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        center: true,
        type: 'warning'
      })
        .then(() => {
          this.$router.push({name: 'TableList'})
        })
        .catch((err) => {
          this.$message({
            type: 'info',
            message: '취소되었습니다'
          })
        })
    },

    onImgRemove(file) {
      // console.log('==== onImgRemove ====')
      // console.log(file)
      // console.log('==== onImgRemove ====')

      this.imgFile = ''
      this.form.oriImgName = ''
    },

    onImgChange(file) {
      // console.log('==== onImgChange ====')
      // console.log(file)
      // console.log('==== onImgChange ====')

      let fileName = file.name
      let lasDot = fileName.lastIndexOf('.')
      let fileExt = fileName.substring(lasDot).toLowerCase()

      // console.log(fileName, lasDot, fileExt)

      if(fileExt !== '.jpg' && fileExt !== '.png' && fileExt !== '.jpeg') {
        alert('JPG, PNG 파일만 업로드 가능합니다')
        this.fileList = []
      } else {
        this.imgFile = file
      }
    },
  },
}
</script>