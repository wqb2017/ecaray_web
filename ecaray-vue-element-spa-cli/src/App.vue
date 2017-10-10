<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

