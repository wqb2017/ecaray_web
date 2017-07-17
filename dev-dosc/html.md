## html ##

* 统一缩进两个空格
* 尽量使用有意义标签
* 记得在头部加入
* 在属性上，使用双引号，不要使用单引号；
* 属性名全小写，用中划线做分隔符；
* 要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；
* 不要忽略可选的关闭标签，例：</li> 和 </body>。
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company-logo.png" alt="company" />
        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
```

* HTML5 doctype
    * 在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；
    * 虽然doctype不区分大小写，但是按照惯例，doctype大写 
```html
<!DOCTYPE html>
<html>
	...
</html>
```

* 字符编码
    * 通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    ...
</html>
```

* IE兼容模式
    * 用 <meta> 标签可以指定页面应该用什么版本的IE来渲染；
```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
    ...
</html>
```

* 引入CSS, JS
    * 根据HTML5规范, 通常在引入CSS和JS时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。
```html
<!-- External CSS -->
<link rel="stylesheet" href="code_guide.css">

<!-- In-document CSS -->
<style>
    ...
</style>

<!-- External JS -->
<script src="code_guide.js"></script>

<!-- In-document JS -->
<script>
    ...
</script>
```
* 属性顺序
    * 属性应该按照特定的顺序出现以保证易读性；
    * id
    * class
    * name
    * data-*
    * src, for, type, href, value , max-length, max, min, pattern
    * placeholder, title, alt
    * aria-*, role
    * required, readonly, disabled
```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```
* 减少标签数量
    * 在编写HTML代码时，需要尽量避免多余的父节点；
    * 很多时候，需要通过迭代和重构来使HTML变得更少。
```html
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```
* 实用高于完美
    * 尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；
    * 任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。