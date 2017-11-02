<template>
  <div id="subMenuItem">
    <template v-for="item in routesData">
      <template v-if="!item.hidden&&!item.children">
        <el-menu-item :index="'/'+item.url" :class="item.rights ? 'read':'all' ">
          <span slot="title"><i :class="item.icon"></i>{{item.name}}</span>
        </el-menu-item>
      </template>
      <el-submenu :index="item.name" v-if="!item.hidden&&item.children" :key="item.id">
        <template slot="title">
          <span><i :class="item.icon"></i>{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sub-menu-item v-if='child.children&&child.children.length>0' class='nest-menu' :routesData='[child]' :key="child.id"> </sub-menu-item>
          <template v-else>
            <el-menu-item :index="'/'+item.url+'/'+child.url" :class="child.rights ? 'read':'all' ">
              <span>{{child.name}}</span>
            </el-menu-item>
          </template>
        </template>
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
