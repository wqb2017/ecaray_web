<template>
  <section class="login-index">
    <el-form class="index__container" ref="form" :model="form">
      <h3 class="index__title">亿车手脚架</h3>
      <el-form-item>
        <el-input v-model="form.name" @change="_isClick" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" @change="_isClick" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="isDisabled" @click="_submit" style="width:100%;">登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      isDisabled: true
    }
  },
  methods: {
    //账号和密码长度都大于5才可以点击
    _isClick() {
      if (this.form.name.length > 5 && this.form.password.length > 5) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    //提交跳转到home页
    _submit() {
      this.$router.push({ path: "/table" });
    }
  }
}
</script>
<style lang="scss" scoped>
.login-index {
  position: relative;
  width: 100%;
  height: 100%;
  height: 100vh;
  .index__container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    transform: translate(-50%,-50%);
    padding: 35px 35px 15px 35px;
    border-radius: 4px;
    box-shadow: 1px 1px 10px rgba(000, 000, 000, .5);
    background-color: #fff;
    .index__title {
      font-weight: 500;
      font-size: 28px;
      text-align: center;
    }
  }
}
</style>


