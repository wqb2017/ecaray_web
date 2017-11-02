/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:48
 * @Last Modified by:   wangqibiao
 * @Last Modified time: 2017-11-02 20:20:48
 */
<template>
  <div id="login">
    <register @toLogin="_toLogin"></register>
  </div>
</template>
<script>
import Register from "@/components/register";
export default {
  components: {
    Register
  },
  methods: {
    _toLogin(formData) {
      this.$router.push({ path: '/workbench'});
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

