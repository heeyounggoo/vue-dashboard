<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
                {{form.subj}}
            </slot>
          </div>
            
          <div class="modal-body">
            <slot name="body">
              <span class="contsProps"></span>
              <img class="popupImg" :src="file" alt=""/><br/>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div>
                <el-checkbox></el-checkbox>
              </div>
              <p/>
              <p/>
                <!-- 푸터입니다 -->
            </slot>
          </div>
              <el-button class="popupBtn" type="primary" round @click="$emit('close')">닫기</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'form',
    'file',
    ],
  data() {
    return {

    }
  }
}
</script>