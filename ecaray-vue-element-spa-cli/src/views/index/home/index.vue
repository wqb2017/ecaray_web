<template>
  <el-row id="home" class="container">
    <home-header></home-header>
    <section class="main">
      <sidebar class="main-sidebar"></sidebar>
      <section class="main-container">
        <router-view></router-view>
      </section>
    </section>
  </el-row>
</template>

<script>
export default {

};
</script>


