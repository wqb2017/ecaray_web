## scss ##

* 统一缩进两个空格
* @import 引入的文件不需要开头的'_'和结尾的'.scss'；
* 嵌套最多不能超过4层；
    * 如果超过4层应该考虑用嵌套的方式来写
* @extend 中使用placeholder选择器；
* 去掉不必要的父级引用符号'&'。
```css
/* not good */
@import "_dialog.scss";

/* good */
@import "dialog";
```