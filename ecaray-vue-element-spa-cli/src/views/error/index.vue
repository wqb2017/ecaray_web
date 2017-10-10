<template>
  <div id="error">
    <el-row>
      <el-col :span="24">
        <img class="logo" src="./error.png" alt="">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="info">获取数据失败，请点击刷新</el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="_refreshPage" style="width:120px;">刷新</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    _refreshPage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#error {
  margin-top: 100px;
  text-align: center;
  .logo{
    width: 258px;
    height: 115px;
  }
  .info{
    font-size: 16px;
    color: #333;
  }
}
</style>

