<template>
  <div class="hello">
    <div class="main">
      <div class="top">
        <h2 class="tit">Welcome to my Dashboard!</h2>
        <div class="sub">
          <p>안녕하세요. 게시판 포트폴리오입니다.</p>
          <p>간한단 로그인, 로그아웃, 회원가입과 게시판기능을 구현했습니다.</p>
          <ul>
            <li>개발환경설명
              <p>프론트는 Vue.js, 서버는 Node.js의 Express.js로 작업했습니다. 데이터는 axios를 통해 작업했습니다.
                <br>프론트에서는 Element UI를 기본으로했으며 추가적으로 SCSS를 사용해 작업했습니다.
                <br>axios는 api를 모듈화하여 만들어 코드관리를 유용하게 했습니다.
              </p>
            </li>
            <li>로그인, 회원가입
              <p>Vuex를 통해 로그인을 구현했습니다. action, mutation, state를 모두 사용해봄으로써 vuex를 이해하고 있습니다.
                <br>로그인, 회원가입은 모두 validate 검사 후에 기능 구현을하도록 했습니다.
                <br>회원가입시에는 필수 기입항목과 아닌 항목을 나누어 validate 검사를 했고 모든 항목은 정규식을 사용했습니다.
              </p>
            </li>
            <li>게시판
              <p>List, Register, Modify, Delete 기능을 구현한 기본적인 게시판입니다.
                <br>List에서는 axios를 통해 데이터를 불러오며 간단한 검색기능까지 구현됩니다.
                <br>Register에서는 multer를 사용해 이미지까지 글 등록이 가능합니다.
                <br>Modify는 글 번호로 구분해 수정기능을 구현했고 Delete 구현은 구분값에 따라 0,1로 나누어 기능 구현했습니다.
              </p>
            </li>
            <li>코드확인
              <p>
                하단 깃헙주소를 클릭하면 코드를 확인할 수 있습니다.<br>
                더 자세하게 작업방식을 정리했습니다.<br>
                <a href="https://github.com/heeyounggoo/vue-dashboard" target="_blank">깃헙주소</a>
              </p>
            </li>
          </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import '@/style/Main.scss'

export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0.5rem 0;
  color: #606266;
}
ul {
  background: #F2F6FC;
  padding: 2rem;
  margin-top: 2rem;
}
li {
  list-style-type: disc;
  font-weight: bold;
  color: #606266;
}
li > p {
  font-weight: normal;
}
li > p > a {
  display: block;
  padding-top: 1rem;
  color: #409EFF;
  font-weight: bold;
}
</style>
