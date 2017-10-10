## 关于共有私有方法的定义
* 只在本文件中使用的方法称之为私有方法，私有方法要前面要加“_”下划线
* 在本文件外被调用的为公有方法
```javascript
   //私有方法
   function _person(){}
   //公有方法
   function say(){}
```

## 关于注释
* 方法的注释放在头部
* 变量的注释放到右边
```javascript
   //方法注释
   function say(){}
   let x = 100;//变量注释
```

## 关于语句
* 每条语句后面都要加上分号“;”
```javascript
   let x = 100;//加分号
```
## Vue属性书写顺序
```javascript
export default {
  mixins,
  props,
  components,
  data,
  computed,
  created,// => 生命周期顺序不赘述
  watch,
  methods
}
```

## 关于视图模板
* 每个文件的template下统一设定一个唯一的ID值，这个ID值为文件夹名称。如：
views/company/baseInfo/index.vue
```html
<template>
  <div id="baseInfo">

  </div>
</template>
```
