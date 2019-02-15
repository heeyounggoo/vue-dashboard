<template>
  <div id="app">
    <div class="app-wrapper">
      <side-navi></side-navi>
      <div class="container">
        <navi></navi>
        <section class="app-main">
          <router-view/>
        </section>
      </div>
    </div>
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
