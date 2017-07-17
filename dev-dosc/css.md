## css ##

* 统一缩进两个空格
* 每个属性声明末尾都要加分号
* 不允许使用!important
* 注释统一用'/* */'（scss中也不要用'//'）
```css
/* Modal header */
.modal-header {
    ...
}
```
* 引号
   * 最外层统一使用双引号；
   * url的内容要用引号；
   * 属性选择器中的属性值需要引号。

* 命名
   * 使用小写字母，以中划线分隔
   * scss中的变量、函数、混合、placeholder采用驼峰式命名

* 颜色
   * 颜色16进制用小写字母；
   * 颜色16进制尽量用简写。

```css
/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```
* 用 border: 0; 代替 border: none;
* 发布的代码中不要有 @import；
* 尽量少用'*'选择器。