<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="hello__announcement">
      <p>为了更好的合作请不要随意更改项目结构</p>
      <p>为了更好的开发维护请阅读相关文档内容</p>
      <p>手脚架配合vscode使用最佳</p>
      <p>eslint已经配置好，为了大家更好维护请不要更改</p>
      <p>上线前请先 npm run dll ，再npm run build</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "欢迎使用亿车科技基于vuejs自定义脚手架！",
      log_info: "welcome use"
    };
  }
};
</script>
<style lang="scss" scoped>
.hello {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
  .hello__announcement {
    p {
      padding-bottom: 20px;
      font-size: 16px;
    }
  }
}
</style>
