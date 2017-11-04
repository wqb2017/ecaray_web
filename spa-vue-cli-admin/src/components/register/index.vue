/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:08
 * @Last Modified by:   wangqibiao
 * @Last Modified time: 2017-11-02 20:20:08
 */
<template>
  <el-form id="register" :model="formData" :rules="rules" ref="formData">
    <el-form-item prop="login_name">
      <el-input placeholder="账号" :autofocus="true" @keyup.enter.native="_submit" v-model="formData.login_name"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" type="password" @keyup.enter.native="_submit" v-model="formData.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :disabled="formData.isClick" @click.prevent="_submit" style="width:100%;">登 录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        login_name: "",
        password: "",
        isClick: true,
      },
      rules: {
        login_name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      }
    };
  },
  watch: {
    'formData.login_name'() {
      this._taggle();
    },
    'formData.password'() {
      this._taggle();
    },
  },
  methods: {
    //登录按钮是否可点，当用户和密码长度都大于1时可点
    _taggle() {
      if (this.formData.login_name.length > 0 && this.formData.password.length > 0) {
        this.formData.isClick = false;
      } else {
        this.formData.isClick = true;
      }
    },
    _submit() {
      console.log(new Date());
      this.$emit('toLogin', this.formData);
    }
  }
};
</script>

<style lang="scss" scoped>
#register {
  width: 400px;
  background-color: #fff;
  padding: 20px 20px 1px 20px;
  border-radius: 4px;
}
</style>

