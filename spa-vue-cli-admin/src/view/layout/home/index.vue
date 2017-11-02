<template>
  <div id="home">
    <div class="home-header">
      <headerView></headerView>
    </div>
    <div class="home-sidebar">
      <sidebar></sidebar>
    </div>
    <div class="home-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/sidebar";
import headerView from "./header";
export default {
  components: {
    sidebar,
    headerView,
  }
};
</script>

<style lang="scss" scoped>
$width-size_sidebar:200px;
$height-size_header:60px;
$min-width-size_main:1024px;
$z-index_header:9999;
$z-index_sidebar:9998;
#home {
  .home-header {
    width: 100%;
    height: $height-size_header;
    background-color: #373D41;
    color: #fff;
    z-index: $z-index_header;
  }
  .home-sidebar {
    position: fixed;
    overflow: auto;
    width: $width-size_sidebar;
    height: 100%;
    background: #fff;
    color: #888;
    z-index: $z-index_sidebar;
  }
  .home-main {
    margin-left: $width-size_sidebar;
    min-width: $min-width-size_main;
    padding: 24px;
  }
}
</style>

