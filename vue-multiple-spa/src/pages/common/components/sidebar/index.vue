<template>
  <el-menu theme="dark" :unique-opened="true" :default-active="defaultActive" class="el-menu-vertical-demo" :router="true" ref="menu">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>
        导航一
      </template>
      <el-menu-item-group>
        <el-menu-item index="/table">表格</el-menu-item>
        <el-menu-item index="/form">表单</el-menu-item>
      </el-menu-item-group>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        导航二
      </template>
      <el-menu-item-group>
        <el-menu-item index="/progress">进度条</el-menu-item>
        <el-menu-item index="/switch">滑块</el-menu-item>
      </el-menu-item-group>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>
        导航三
      </template>
      <el-menu-item-group>
        <el-menu-item index="/time">时间</el-menu-item>
        <el-menu-item index="/rate">评分</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      defaultActive: ""
    };
  },
  watch: {
    $route(route) {
      let path = route.path.split('/').splice(0, 3).join('/');
      this.$refs.menu.activedIndex = path;
      setTimeout(() => {
        this.defaultActive = path;
      }, 200);
    }
  },
  created() {
    this.defaultActive = this.$route.path;
  }
};
</script>

