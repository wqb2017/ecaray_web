<template>
  <div id="subMenuWrap">
    <template v-for="item in routesData">
      <el-submenu :class="item.final_right" :index="item.id || '1'" :data-id="item.id" :key="item.id">
        <template slot="title">
          <i :class="['icon', 'iconfont', item.icon]"></i>{{item.name}}
        </template>
        <el-menu-item-group v-if="item.children">
          <template v-for="child in item.children">
            <template v-if='child.children && child.children.length>0'>
              <sub-menu-item :routesData="[child]"></sub-menu-item>
            </template>
            <template v-else>
              <el-menu-item :class="child.final_right" :url="child.url" :key="child.id" :index="child.url">{{child.name}}</el-menu-item>
            </template>
          </template>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'sub-menu-item',
  props: {
    routesData: {
      type: Array
    }
  }
};
</script>
<style lang='scss'>
#subMenuWrap {
  .icon {
    padding-right: 10px;
  }
  .el-submenu__title {
    color: #888;
  }
  .read {
    //菜单不可操作-不支持IE9
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
  }
}
</style>


