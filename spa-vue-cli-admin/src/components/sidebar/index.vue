<template>
  <div id="sidebar">
    <el-menu mode="vertical" unique-opened :default-active="defaultActive" theme="light" class="el-menu-vertical-demo" :router="true" ref="menu" :collapse="false">
      <subMenuItem :routesData="menuData"></subMenuItem>
    </el-menu>
  </div>
</template>
<script>
import subMenuItem from "./subMenuItem";
import { sidebarList } from "@/api/datas";
export default {
  components: {
    subMenuItem
  },
  data() {
    return {
      defaultActive: "",
      menuData: []
    };
  },
  created() {
    this._pageInit();
    setTimeout(() => {
      this.defaultActive = this.$route.path;
    }, 10);
  },
  watch: {
    $route(route) {
      let path = route.path.split('/').splice(0, 3).join('/');
      this.$refs.menu.activedIndex = path;
      setTimeout(() => {
        this.defaultActive = path;
      }, 10);
    }
  },
  methods: {
    _pageInit() {
      sidebarList().then(res => {
        this.menuData = res.data;
      });
    }
  }
};
</script>

