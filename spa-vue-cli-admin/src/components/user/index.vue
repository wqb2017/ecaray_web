<template>
  <div id="user">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-button type="text" size="large">admin</el-button>
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<style lang="scss" scoped>
#user {
  float: right;
  line-height: 60px;
  height: 60px;
  margin-right: 24px;
}
</style>

