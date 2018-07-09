## vue ##

### SPA采用 https://github.com/wqb2017/ec-vue-cli做模板

### 组件组成
1. 开发者注释
2. template模板
3. script模板
4. style 模板
【注释：组成顺序为1 2 3 4】
如：login页
```js
1、开发者注释
/*
 * @Author: WangQiBiao
 * @Date: 2018-06-28 18:07:22
 * @Last Modified by: WangQiBiao
 * @Last Modified time: 2018-07-06 18:19:09
 */
<template>
  <div class="login">
    <h3>登录页面</h3>
  </div>
</template>
<script>
import module form 'module path';
export default {
  something...
}
</script>
<style lang="scss" scoped>
//【注释】
// 1. 每个组件样式一定要加上scoped，原因：减少对全局样式影响
.login{
  padding:0;
  margin:0;
}
</style>
```
【注释】
* 当style内容超过100行时，样式提取到vue模板同级的style.scss中
* 公司css预处理器统一采用scss

### 每个组件组成文件结构，如login页面
```js
|-login
    |-index.vue
    |-style.scss
    |-img
```
【注释】
* 每个组件内必须存在index.vue文件

### 组件内变量命名
* 组件内所有的方法统一加上'_'开头，原因：区别共有方法
