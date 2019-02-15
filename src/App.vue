<template>
  <div id="app">
    <el-container>
      <side-navi></side-navi>
      <el-container>
        <navi></navi>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navi from '@/components/Navigation.vue'
import SideNavi from '@/components/SideNavi.vue'
import '@/style/App.scss'

export default {
  name: 'App',
  components: {
    Navi,
    SideNavi,
  },
}
</script>
