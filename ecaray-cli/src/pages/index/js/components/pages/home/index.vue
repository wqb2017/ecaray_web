<template>
  <div class="home-index">
    <section class="index__header">
      <header-com></header-com>
    </section>
    <section class="index_main">
      <sidebar-com class="main__sidebar"></sidebar-com>
      <section class="main__container">
        <router-view></router-view>
      </section>
    </section>
    <section class="index__footer"></section>
  </div>
</template>

<script>
import HeaderCom from "@/common/components/header";
import SidebarCom from "@/common/components/sidebar";
export default {
  components: {
    SidebarCom,
    HeaderCom
  }
}
</script>
<style lang="scss" scoped>
@import "./../../../../../common/style/variable.scss";
.home-index {
  .index_main {
    .main__sidebar {
      width: $width-size_sidebar;
      margin-top: $height-size_header;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: $z-index_sidebar;
      border-radius: 0;
    }
    .main__container {
      min-width: $width-size_mix-wraper;
      margin-left: $width-size_sidebar;
      padding: $padding-size_20;
      margin-top: $height-size_header;
    }
  }
}
</style>