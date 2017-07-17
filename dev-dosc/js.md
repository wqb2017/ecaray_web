## js ##

* 统一缩进两个空格
* 分号 以下几种情况后需加分号：
    * 变量声明
    * 表达式
    * return
    * throw
    * break
    * continue
    * do-while
    
* 单行注释
    * 双斜线后，必须跟一个空格；
    * 缩进与下一行代码保持一致；
    * 可位于一个代码行的末尾，与代码间隔一个空格。
```js
if (condition) {
    // if you made it here, then all security checks passed
    allowed();
}

var zhangsan = 'zhangsan'; // one space after code
```

* 多行注释
    * 最少三行, '*'后跟一个空格，具体参照右边的写法；
    * 建议在以下情况下使用：
    * 难于理解的代码段
    * 可能存在错误的代码段
    * 浏览器特殊的HACK代码
    * 业务逻辑强相关的代码
* 文档注释
    * 建议在以下情况下使用：
    * 所有常量
    * 所有函数
    * 所有类
```js
**
 * @func
 * @desc 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数
 */
function foo(a, b, c, d, g, j) {
    ...
}
```

* 变量命名
    * 标准变量采用驼峰式命名（除了对象的属性外，主要是考虑到cgi返回的数据）
    * 'ID'在变量名中全大写
    * 'URL'在变量名中全大写
    * 常量全大写，用下划线连接
    * 构造函数，大写第一个字母
    * jquery对象必须以'$'开头命名
```js
var thisIsMyName;
var goodID;
var reportURL;
var AndroidVersion;
var iOSVersion;
var MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}

// not good
var body = $('body');

// good
var $body = $('body');
```

* 变量声明
    *　一个函数作用域中所有的变量声明提到函数首部，除了for (...)里面使用的一次性变量。
    * var的数量不做限制，但要统一，一行定义一个变量。
```js
// not good
function doSomethingWithItems(items) {
    var a,
        b;
    var value = 10;
    var result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}

// good
function doSomethingWithItems(items) {
    var a;
    var b;
    var value = 10;
    var result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}

function doSomethingWithItems(items) {
    var a,
        b,
        value = 10,
        result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
```

* 函数
    * 无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；
    *　函数调用括号前不需要空格；
    * 立即执行函数外必须包一层括号；
    * 不要给inline function命名；
    * 参数之间用', '分隔，注意逗号后有一个空格。
    
```js
// no space before '(', but one space before'{'
var doSomething = function(item) {
    // do something
};

function doSomething(item) {
    // do something
}

// not good
doSomething (item);

// good
doSomething(item);

// requires parentheses around immediately invoked function expressions
(function() {
    return 1;
})();

// not good
[1, 2].forEach(function x() {
    ...
});

// good
[1, 2].forEach(function() {
    ...
});

// not good
var a = [1, 2, function a() {
    ...
}];

// good
var a = [1, 2, function() {
    ...
}];

// use ', ' between function parameters
var doSomething = function(a, b, c) {
    // do something
};
```

* 数组、对象
    * 对象属性名不需要加引号；
    * 对象以缩进的形式书写，不要写在一行；
    * 数组、对象最后不要有逗号。
```js
// not good
var a = {
    'b': 1
};

var a = {b: 1};

var a = {
    b: 1,
    c: 2,
};

// good
var a = {
    b: 1,
    c: 2
};
```

* 括号
    * 下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。

* jshint
    * 用'===', '!=='代替'==', '!='；
    * for-in里一定要有hasOwnProperty的判断；
    * 不要在内置对象的原型上添加方法，如Array, Date；
    * 不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；
    * 变量不要先使用后声明；
    * 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；
    * 不要在同个作用域下声明同名变量；
    * 不要在一些不需要的地方加括号，例：delete(a.b)；
    * 不要使用未声明的变量（全局变量需要加到.jshintrc文件的globals属性里面）；
    * 不要声明了变量却不使用；
    * 不要在应该做比较的地方做赋值；
    * debugger不要出现在提交的代码里；
    * 数组中不要存在空元素；
    * 不要在循环内部声明函数；
    * 不要像这样使用构造函数，例：new function () { ... }, new Object；
```js
// not good
if (a == 1) {
    a++;
}

// good
if (a === 1) {
    a++;
}

// good
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        // be sure that obj[key] belongs to the object and was not inherited
        console.log(obj[key]);
    }
}

// not good
Array.prototype.count = function(value) {
    return 4;
};

// not good
var x = 1;

function test() {
    if (true) {
        var x = 0;
    }

    x += 1;
}

// not good
function test() {
    console.log(x);

    var x = 1;
}

// not good
new Person();

// good
var person = new Person();

// not good
delete(obj.attr);

// good
delete obj.attr;

// not good
if (a = 10) {
    a++;
}

// not good
var a = [1, , , 2, 3];

// not good
var nums = [];

for (var i = 0; i < 10; i++) {
    (function(i) {
        nums[i] = function(j) {
            return i + j;
        };
    }(i));
}

// not good
var singleton = new function() {
    var privateVar;

    this.publicMethod = function() {
        privateVar = 1;
    };

    this.publicMethod2 = function() {
        privateVar = 2;
    };
};
```