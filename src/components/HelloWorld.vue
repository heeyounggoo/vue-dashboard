<template>
  <div class="hello">
    <div class="main">
      <div class="top">
        <h2 class="tit">Welcome to my Dashboard!</h2>
        <p class="sub">안녕하세요. 대시보드입니다.</p>
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
