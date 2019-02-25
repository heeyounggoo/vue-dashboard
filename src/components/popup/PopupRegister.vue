<template>
  <div class="main"> 
    <div v-if="!modifyYn" class="top">
      <h2 class="tit">Register</h2>
      <p class="sub">팝업 등록페이지입니다. 원하는 팝업정보를 입력해주세요.</p>
    </div>
    <div v-else class="top">
      <h2 class="tit">Register-v-else</h2>
      <p class="sub">팝업 수정페이지입니다. 원하는 팝업정보로 수정하세요.</p>
    </div>
    <el-form label-width="100px">

      <el-form-item label="제목" prop="subj" @keyup.native="onKeyup">
        <el-input v-model="form.subj"></el-input>
      </el-form-item>

      <el-form-item label="팝업구분">
        <el-select v-model="form.popupTp">
          <el-option
            v-for="item in tpOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="대체텍스트" v-show="form.popupTp === '대체텍스트 필요시'">
        <el-input v-model="form.subConts"></el-input>
      </el-form-item>

      <el-form-item label="바로가기">
        <el-radio-group v-model="form.cnntUrlYn">
          <el-radio label="사용"></el-radio>
          <el-radio label="미사용"></el-radio>
        </el-radio-group>
        <el-input v-model="form.cnntUrl" placeholder="팝업 이미지 클릭시 이동할 URL을 입력하세요.">
        </el-input>
      </el-form-item>

      <el-form-item label="이미지등록">
        <el-upload
          :disabled="form.popupTp === '대체텍스트 필요시'"
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
          <div slot="tip" class="ex-1">※ JPG,PNG 파일만 업로드 가능합니다. 해상도는 400 X 600에 최적화 되어있습니다.</div>
        </el-upload>
      </el-form-item>

    </el-form>

    <div class="btnBottom">
      <el-button type="primary" round  v-if="!modifyYn" @click="onSubmit('form')">등록하기</el-button>
      <el-button type="primary" round  v-else @click="onUpdate('form')">수정하기</el-button>
      <el-button type="primary" round @click="showModal = true">팝업보기</el-button>
      <el-button round plain @click="onCancel">취소하기</el-button>
    </div>
    
    <popup-modal 
      v-if="showModal" 
      @close="showModal = false"
      :form="this.form"
      :file="this.file"></popup-modal>
  </div>
</template>
<script>
  import '@/style/Main.scss'
  import PopupModal from '@/components/popup/PopupModal.vue'

  export default {

    components: {
      PopupModal,
    },
    data() {
      return {
       
        form: {
          subj: '',
          popupTp: '기본',
          subConts: '',
          cnntUrlYn: '',
          cnntUrl: ''
        },
        
        fileList: [],
        file: '',
        modifyYn: false,
        showModal: false,

        tpOptions: [{
          value: '기본',
          label: '기본'
        }, {
          value: '대체텍스트 필요시',
          label: '대체텍스트 필요시'
        }, {
          value: '이벤트',
          label: '이벤트'
        }]
      }
    },
    
    methods: {
   
      onSubmit() {
       
      },
    
      // 글 수정
      onUpdate() {
        
      },

      // 글 등록 취소
      onCancel() {
        
      },

      // 이미지 삭제
      onImgRemove(file, fileList) {

      },

      // 이미지 변환
      onImgChange(file, fileList) {
        // console.log(file)
        this.file = file.url
      },

      onKeyup(e) {
        if(this.form.subj.length > 10) {
          this.form.subj = this.form.subj.substring(0, 10)
        }
      },

      // showModal() {},
    }
    
  }
</script>
<style scoped>
  .ex-1 {
    color: red
  }
 
</style>

