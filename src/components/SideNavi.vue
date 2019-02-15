<template>
  <div class="sideNavi">
    <div class="logo">
      Dashboard
      <span class="round">v.1.0</span>
    </div>
    <el-menu 
      class="el-menu-vertical-demo" 
      :router="true">
      <!-- <el-menu-item class="logo">920</el-menu-item> -->
      <el-menu-item index="1"><i class="el-icon-menu"></i>HOME</el-menu-item>
      <el-menu-item index="2" :route="{name: 'TableList'}"><i class="el-icon-edit"></i>TABLE</el-menu-item>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>Me</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">Navigation03</el-menu-item>
          <el-menu-item index="3-2">Navigation03</el-menu-item>
          <el-menu-item index="3-3">Navigation03</el-menu-item>
          <el-menu-item index="3-4">Navigation03</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>Navigation</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">Navigation04</el-menu-item>
          <el-menu-item index="4-2">Navigation04</el-menu-item>
          <el-menu-item index="4-3">Navigation04</el-menu-item>
          <el-menu-item index="4-4">Navigation04</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import '@/style/Navigation.scss'

export default {
  name: 'side-navi',
}
</script>