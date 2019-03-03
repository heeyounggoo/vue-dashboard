<template>
  <div class="hello">
    <div class="main">
      <div class="top">
        <h2 class="tit">Welcome to my Dashboard!</h2>
        <div class="sub">
          <p>안녕하세요. 게시판 포트폴리오입니다.</p>
          <p>간한단 로그인, 로그아웃, 회원가입과 게시판기능을 구현했으니 확인부탁드릴게요!</p>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
