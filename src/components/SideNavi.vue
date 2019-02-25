<template>
  <div class="sideNavi">
    <el-menu 
      class="el-menu-vertical-demo" 
      :router="true">
      <el-menu-item index="1" :route="{name: 'TableList'}"><i class="el-icon-edit"></i>TABLE</el-menu-item>
      <el-menu-item index="2" :route="{name: 'PopupRegister'}"><i class="el-icon-edit"></i>POPUP</el-menu-item>
      <!-- <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>MYPAGE</template>
        <el-menu-item-group>
          <el-menu-item index="4-1" :route="{name: 'MeStatus'}">ABOUT ME</el-menu-item>
          <el-menu-item index="4-2" :route="{name: 'MeStatus'}">STATUS</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import '@/style/Navigation.scss'

export default {
  name: 'side-navi',
}
</script>