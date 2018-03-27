# 文档规范

# css

## 1、class 命名

* 统一采用 BEM（BEM 的意思就是块（block）、元素（element）、修饰符（modifier））

# js

## 1、方法命名

* 私有方法统一在方法前面加“\_”
* 构造函数首字母必须大写

# .vue 文件

## 文件组成

文件包含

```html
<template>
  <div id="文件名"></div>
</template>
<script></script>
<style lang="scss" scoped></style>
```

注意事项

* 每个.vue 的 style 必须在上 scoped，如有必须要省略的请注释说明
* 每个模板除了共用组件采用 class 外，业务组件必须存在样式时必须标明 id 作为唯一标识
* 公共组件命名一般采用 class="ec-组件名称"【ec 为公司名字开头缩写作为命名空间】
